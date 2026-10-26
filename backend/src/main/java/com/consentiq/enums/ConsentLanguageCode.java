package com.consentiq.enums;

public enum ConsentLanguageCode {
    en("English", false),
    hi("Hindi", false),
    mr("Marathi", false),
    ur("Urdu", true);

    public final String label;
    public final boolean rtl;

    ConsentLanguageCode(String label, boolean rtl) {
        this.label = label;
        this.rtl = rtl;
    }
}