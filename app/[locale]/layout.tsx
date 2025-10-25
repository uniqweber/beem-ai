import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";

import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import {routing} from "@/i18n/routing";
import { Locale } from "@/types";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;

    // Validate locale
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    // Load translations
    const messages = await getMessages();

    // Arabic requires RTL (right-to-left) text direction
    const dir = locale === "ar" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={dir}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />

                    <main className="min-h-[calc(100vh-180px)] flex h-40 cursor-pointer items-center justify-center">
                        {children}
                    </main>

                    <Footer params={locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
