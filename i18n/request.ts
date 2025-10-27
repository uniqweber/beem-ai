import {Locale} from "@/types";
import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

export default getRequestConfig(async ({locale}) => {
    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
