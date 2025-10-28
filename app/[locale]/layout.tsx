import {NextIntlClientProvider} from "next-intl";
import {Figtree} from "next/font/google";
import {notFound} from "next/navigation";

import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import LocaleRedirect from "@/components/shared/redirect";
import {routing} from "@/i18n/routing";
import {Locale} from "@/types";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {locale: string} | Promise<{locale: string}>;
}) {
    const resolvedParams = await params;
    const {locale} = resolvedParams;

    // Validate locale
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    // Load translations
    // const messages = await getMessages();
    const messages = (await import(`../../messages/${locale}.json`)).default;

    // Arabic requires RTL (right-to-left) text direction
    const dir = locale === "ar" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={dir}>
            <body className={`${figtree.variable} antialiased`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <LocaleRedirect />
                    <Navbar locale={locale} />
                    <main className="mt-20">{children}</main>
                    <Footer params={locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
