package com.consentiq.security;

import com.consentiq.model.entity.User;
import com.consentiq.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Logger log = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    private final UserRepository userRepository;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        String cu = currentUser();
        log.debug("Entering loadUserByUsername | params: email={}", email);
        log.info("User={} | action=loadUserByUsername | entity=User | id=n/a", cu);
        log.debug("Transaction started | method=loadUserByUsername | email={}", email);
        log.info("Executing DB query | method=findByEmail | param={}", email);
        Optional<User> opt = userRepository.findByEmail(email);
        int cnt = opt.isPresent() ? 1 : 0;
        log.info("Query returned {} record(s) | method=findByEmail | param={}", cnt, email);
        User user =
                opt.orElseThrow(
                        () -> {
                            log.warn("No record found | entity=User | id=n/a | user={}", cu);
                            return new UsernameNotFoundException("User not found with email: " + email);
                        });
        UserDetails result = UserDetailsImpl.fromUser(user);
        log.debug("Transaction completing | method=loadUserByUsername | email={}", email);
        log.debug("Exiting loadUserByUsername | result=present");
        return result;
    }
}
