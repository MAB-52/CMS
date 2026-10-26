package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentTranslationResponse {

	private String consentTitle;
	private String translatedHtml;
	private String language;
	private String customerDisplayName;
}
