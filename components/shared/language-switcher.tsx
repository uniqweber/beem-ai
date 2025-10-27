"use client";

import {useRouter} from "@/i18n/navigation";
import {useLocale} from "next-intl";
import {usePathname} from "next/navigation";

import {routing} from "@/i18n/routing";
import {Locale} from "@/types";

const LOCALE_STORAGE_KEY = "lang_pref";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: string) => {
        const segments = pathname.split("/").filter(Boolean);
        
        if (routing.locales.includes(segments[0] as Locale)) {
            segments.shift();
        }

        const pathWithoutLocale = segments.length > 0 ? `/${segments.join("/")}` : "/";

        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
        router.push(pathWithoutLocale, {locale: newLocale});
    };

    return (
        <select value={locale} onChange={(e) => handleChange(e.target.value)} className="h-10 px-5 bg-white text-black font-medium rounded-full text-sm appearance-none">
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="ar">🇸🇦 العربية</option>
        </select>
    );
}
