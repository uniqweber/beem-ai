"use client";

import {useLocale} from "next-intl";
import {usePathname} from "next/navigation";

import {routing} from "@/i18n/routing";
import { Locale } from "@/types";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    const handleChange = (newLocale: string) => {
        const segments = pathname.split("/").filter(Boolean);

        // Remove current locale from path if present
        if (routing.locales.includes(segments[0] as Locale)) {
            segments.shift();
        }

        const path = segments.length > 0 ? `/${segments.join("/")}` : "";
        window.location.href = `/${newLocale}${path}`;
    };

    return (
        <select value={locale} onChange={(e) => handleChange(e.target.value)} className="rounded-md border px-2 py-1">
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="ar">🇸🇦 العربية</option>
        </select>
    );
}
