"use client";

import {useLocale} from "next-intl";
import {useEffect} from "react";

import {routing} from "@/i18n/routing";

const LOCALE_STORAGE_KEY = "lang_pref";
const DEFAULT_LOCALE = routing.defaultLocale;

export default function LocaleRedirect() {
    const currentLocale = useLocale();

    useEffect(() => {
        if (typeof window === "undefined" || currentLocale === DEFAULT_LOCALE) return;

        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

        if (savedLocale && savedLocale !== currentLocale && savedLocale !== DEFAULT_LOCALE) {
            if (currentLocale === DEFAULT_LOCALE) {
                window.location.replace(`/${savedLocale}`);
            }
        }
    }, [currentLocale]);

    return null;
}
