package com.consentiq.service;

import java.security.SecureRandom;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.consentiq.exception.OtpException;
import com.consentiq.exception.PasswordResetException;
import com.consentiq.model.dto.request.ForgotPasswordRequest;
import com.consentiq.model.dto.request.ResetPasswordRequest;
import com.consentiq.model.dto.request.VerifyOtpRequest;
import com.consentiq.model.entity.PasswordResetToken;
import com.consentiq.model.entity.User;
import com.consentiq.repository.PasswordResetTokenRepository;
import com.consentiq.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PasswordResetService {

	private static final Logger log = LoggerFactory.getLogger(PasswordResetService.class);
	private static final SecureRandom RANDOM = new SecureRandom();
	private static final int MAX_OTP_ATTEMPTS = 5;
	private static final long RESEND_COOLDOWN_SECONDS = 60;

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private final UserRepository userRepository;
	private final PasswordResetTokenRepository tokenRepository;
	private final ForgotEmailPasswordService forgotemailpasswordService;
	private final PasswordEncoder passwordEncoder;

	@Transactional
	public void initiatePasswordReset(ForgotPasswordRequest request) {
		String cu = currentUser();
		log.debug("Entering initiatePasswordReset | params: email={}", request.getEmail());
		log.info("User={} | action=initiatePasswordReset | entity=PasswordReset | id=n/a", cu);
		log.debug("Transaction started | method=initiatePasswordReset | id=n/a");
		String email = request.getEmail().trim().toLowerCase();

		log.info("Executing DB query | method=findByEmailIgnoreCase | param=email={}", email);
		Optional<User> userOptional = userRepository.findByEmailIgnoreCase(email);
		log.info("DB query completed | method=findByEmailIgnoreCase | present={}", userOptional.isPresent());
		if (userOptional.isEmpty()) {
			log.info("Password reset requested for non-existent email: {}", email);
			log.debug("Transaction completing | method=initiatePasswordReset | id=n/a");
			log.debug("Exiting initiatePasswordReset | completed successfully");
			return;
		}

		User user = userOptional.get();

		if (!user.getActive()) {
			// Answer exactly like an unknown email so the response never reveals that the account exists
			log.warn("Password reset requested for inactive user: {}", email);
			return;
		}

		// Same generic success during the cooldown so the inbox can't be flooded; the previous OTP stays valid
		Optional<PasswordResetToken> latest = tokenRepository.findTopByEmailOrderByIdDesc(email);
		if (latest.isPresent() && latest.get().getCreatedAt() != null
				&& latest.get().getCreatedAt().isAfter(Instant.now().minusSeconds(RESEND_COOLDOWN_SECONDS))) {
			log.warn("Password reset OTP skipped | reason=cooldown | email={}", email);
			return;
		}

		log.info("Executing DB query | method=invalidateAllTokensForEmail | param=email={}", email);
		tokenRepository.invalidateAllTokensForEmail(email);
		log.info("DB query completed | method=invalidateAllTokensForEmail | completed");

		String otp = generateOtp();

		PasswordResetToken token = PasswordResetToken.builder()
				.email(email)
				.otp(otp)
				.expiryDate(LocalDateTime.now().plusMinutes(15))
				.used(false)
				.attempts(0)
				.build();

		log.info("Executing DB query | method=save | param=email={}", email);
		tokenRepository.save(token);
		log.info("DB query completed | method=save | completed");

		try {
			forgotemailpasswordService.sendOtpEmail(email, otp);
			log.info("Password reset OTP sent to user: {}", email);
		} catch (Exception e) {
			log.error("Exception in initiatePasswordReset | user={} | message={}", cu, e.getMessage(), e);
			throw new PasswordResetException("Failed to send OTP. Please try again.");
		}
		log.debug("Transaction completing | method=initiatePasswordReset | id=n/a");
		log.debug("Exiting initiatePasswordReset | completed successfully");
	}

	// noRollbackFor: a wrong guess throws OtpException but the attempt count must still be saved
	@Transactional(noRollbackFor = OtpException.class)
	public void verifyOtp(VerifyOtpRequest request) {
		String cu = currentUser();
		log.debug("Entering verifyOtp | params: email={} | otp=****", request.getEmail());
		log.info("User={} | action=verifyOtp | entity=PasswordReset | id=n/a", cu);
		log.debug("Transaction started | method=verifyOtp | id=n/a");
		String email = request.getEmail().trim().toLowerCase();

		checkOtp(email, request.getOtp());

		log.info("OTP verified successfully for email: {}", email);
		log.debug("Transaction completing | method=verifyOtp | id=n/a");
		log.debug("Exiting verifyOtp | completed successfully");
	}

	@Transactional(noRollbackFor = OtpException.class)
	public void resetPassword(ResetPasswordRequest request) {
		String cu = currentUser();
		log.debug("Entering resetPassword | params: email={} | otp=****", request.getEmail());
		log.info("User={} | action=resetPassword | entity=PasswordReset | id=n/a", cu);
		log.debug("Transaction started | method=resetPassword | id=n/a");
		if (!request.getNewPassword().equals(request.getConfirmPassword())) {
			throw new PasswordResetException("Passwords do not match. Please ensure both passwords are identical.");
		}

		String newPassword = request.getNewPassword();
		if (newPassword.length() < 6) {
			throw new PasswordResetException("Password must be at least 6 characters long.");
		}

		if (!newPassword.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=\\S+$).{6,}$")) {
			throw new PasswordResetException(
					"Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and no spaces.");
		}

		String email = request.getEmail().trim().toLowerCase();

		PasswordResetToken token = checkOtp(email, request.getOtp());

		log.info("Executing DB query | method=findByEmailIgnoreCase | param=email={}", email);
		User user = userRepository.findByEmailIgnoreCase(email)
				.orElseThrow(() -> new PasswordResetException("User not found. Please check your email address."));
		log.info("DB query completed | method=findByEmailIgnoreCase | present=true");

		if (!user.getActive()) {
			throw new PasswordResetException(
					"Your account is inactive. Please contact administrator to reactivate your account.");
		}

		if (passwordEncoder.matches(request.getNewPassword(), user.getPassword())) {
			throw new PasswordResetException(
					"New password cannot be the same as your current password. Please choose a different password.");
		}

		user.setPassword(passwordEncoder.encode(request.getNewPassword()));
		log.info("Executing DB query | method=save | param=userId={}", user.getId());
		userRepository.save(user);
		log.info("DB query completed | method=save | completed");

		token.setUsed(true);
		log.info("Executing DB query | method=save | param=tokenId={}", token.getId());
		tokenRepository.save(token);
		log.info("DB query completed | method=save | completed");

		log.info("Executing DB query | method=invalidateAllTokensForEmail | param=email={}", email);
		tokenRepository.invalidateAllTokensForEmail(email);
		log.info("DB query completed | method=invalidateAllTokensForEmail | completed");

		log.info("Password reset successful for user: {}", email);
		log.debug("Transaction completing | method=resetPassword | id=n/a");
		log.debug("Exiting resetPassword | completed successfully");
	}

	@Transactional
	public void cleanupExpiredTokens() {
		String cu = currentUser();
		log.debug("Entering cleanupExpiredTokens | params: none");
		log.info("User={} | action=cleanupExpiredTokens | entity=PasswordResetToken | id=n/a", cu);
		log.debug("Transaction started | method=cleanupExpiredTokens | id=n/a");
		log.info("Executing DB query | method=deleteExpiredTokens | param=now");
		tokenRepository.deleteExpiredTokens(LocalDateTime.now());
		log.info("DB query completed | method=deleteExpiredTokens | completed");
		log.info("Cleaned up expired password reset tokens");
		log.debug("Transaction completing | method=cleanupExpiredTokens | id=n/a");
		log.debug("Exiting cleanupExpiredTokens | completed successfully");
	}

	/**
	 * Validates the OTP against the latest active token for the email. Wrong guesses are counted and
	 * the token is cancelled after {@link #MAX_OTP_ATTEMPTS}, so the code cannot be brute-forced.
	 */
	private PasswordResetToken checkOtp(String email, String otp) {
		if (otp == null || otp.trim().isEmpty()) {
			throw new OtpException("OTP cannot be empty");
		}

		if (!otp.matches("\\d{6}")) {
			throw new OtpException("OTP must be a 6-digit number");
		}

		log.info("Executing DB query | method=findTopByEmailAndUsedFalseOrderByIdDesc | param=email={}", email);
		// Same message as a wrong code, so this endpoint cannot be used to find registered emails
		PasswordResetToken token = tokenRepository.findTopByEmailAndUsedFalseOrderByIdDesc(email)
				.orElseThrow(() -> new OtpException("Invalid OTP. Please check and try again."));
		log.info("DB query completed | method=findTopByEmailAndUsedFalseOrderByIdDesc | present=true");

		if (token.isExpired()) {
			throw new OtpException("OTP has expired. Please request a new one using 'Resend OTP'.");
		}

		if (!token.getOtp().equals(otp)) {
			int attempts = (token.getAttempts() == null ? 0 : token.getAttempts()) + 1;
			token.setAttempts(attempts);
			if (attempts >= MAX_OTP_ATTEMPTS) {
				token.setUsed(true);
				tokenRepository.save(token);
				log.warn("OTP locked after {} wrong attempts | email={}", attempts, email);
				throw new OtpException("Too many incorrect attempts. Please request a new OTP.");
			}
			tokenRepository.save(token);
			log.warn("Wrong OTP | attempt={} of {} | email={}", attempts, MAX_OTP_ATTEMPTS, email);
			throw new OtpException("Invalid OTP. Please check and try again.");
		}

		return token;
	}

	private String generateOtp() {
		// otp column is unique across all tokens, so skip codes that already exist
		String otp;
		do {
			otp = String.valueOf(100000 + RANDOM.nextInt(900000));
		} while (tokenRepository.existsByOtp(otp));
		return otp;
	}
}
