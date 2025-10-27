"use client";

import {routing} from "@/i18n/routing";
import {Locale} from "@/types";
import {useEffect} from "react";

const LOCALE_STORAGE_KEY = "lang_pref";
const DEFAULT_LOCALE = routing.defaultLocale;

export default function RootPageRedirect() {
    useEffect(() => {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

        const targetLocale =
            savedLocale && routing.locales.includes(savedLocale as Locale) ? savedLocale : DEFAULT_LOCALE;

        if (window.location.pathname === "/" || window.location.pathname === "") {
            window.location.replace(`/${targetLocale}`);
        }
    }, []);

    return (
        <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Loading...</div>
    );
}
