package com.consentiq.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import lombok.experimental.UtilityClass;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

@UtilityClass
public class HtmlTextUtil {

    private static final char NBSP = (char) 160;

    /** Elements that can run script, load other documents or capture input — never allowed in consent content. */
    private static final String DANGEROUS_ELEMENTS =
            "script, iframe, frame, frameset, object, embed, applet, link, meta, base, form, input, button, "
                    + "textarea, select, style, svg, math, template, noscript";

    private static final Set<String> URL_ATTRIBUTES = Set.of("href", "src", "action", "formaction", "xlink:href", "srcset");

    /** True when the HTML has no visible text, e.g. "", "<p></p>" or "<p>&nbsp; </p>". */
    public static boolean isBlankHtml(String html) {
        if (html == null || html.isBlank()) {
            return true;
        }
        return Jsoup.parse(html).body().text().replace(NBSP, ' ').trim().isEmpty();
    }

    /**
     * Removes anything that can execute script from rich-text consent HTML (script/iframe/etc. elements,
     * on* event handlers, javascript:/vbscript:/data: URLs) while keeping formatting such as inline
     * styles, classes and the data-* attributes used by merge-tag chips.
     */
    public static String sanitizeRichHtml(String html) {
        if (html == null || html.isBlank()) {
            return html;
        }
        Document doc = Jsoup.parseBodyFragment(html);
        doc.outputSettings().prettyPrint(false);
        doc.body().select(DANGEROUS_ELEMENTS).remove();
        for (Element el : doc.body().getAllElements()) {
            List<String> toRemove = new ArrayList<>();
            for (Attribute attr : el.attributes()) {
                String name = attr.getKey().toLowerCase(Locale.ROOT);
                String value = attr.getValue() == null ? "" : attr.getValue();
                if (name.startsWith("on")
                        || (URL_ATTRIBUTES.contains(name) && isUnsafeUrl(value))
                        || (name.equals("style") && isUnsafeStyle(value))) {
                    toRemove.add(attr.getKey());
                }
            }
            toRemove.forEach(el::removeAttr);
        }
        return doc.body().html();
    }

    private static boolean isUnsafeUrl(String value) {
        // Browsers ignore whitespace/control chars inside the scheme ("java\tscript:"), so strip them first
        String v = value.replaceAll("[\\s\\u0000-\\u001f]", "").toLowerCase(Locale.ROOT);
        return v.startsWith("javascript:")
                || v.startsWith("vbscript:")
                || (v.startsWith("data:") && !v.startsWith("data:image/"));
    }

    private static boolean isUnsafeStyle(String value) {
        String v = value.replaceAll("\\s", "").toLowerCase(Locale.ROOT);
        return v.contains("expression(") || v.contains("javascript:") || v.contains("vbscript:");
    }

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
