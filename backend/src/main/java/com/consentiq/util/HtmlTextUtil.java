package com.consentiq.util;

import lombok.experimental.UtilityClass;
import org.jsoup.Jsoup;

@UtilityClass
public class HtmlTextUtil {

    public static String stripToPlain(String html, int maxLen) {
        if (html == null || html.isBlank()) {
            return "";
        }
        // Jsoup.parse().text() decodes &nbsp; and all HTML entities into proper spaces
        String plain = Jsoup.parse(html).body().text().replaceAll("\\s+", " ").trim();
        if (plain.length() <= maxLen) {
            return plain;
        }
        return plain.substring(0, maxLen - 1) + "…";
    }
}