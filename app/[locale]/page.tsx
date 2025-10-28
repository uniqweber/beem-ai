import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

import Agents from "@/components/home/agents";
import Benefits from "@/components/home/benefits";
import Customers from "@/components/home/customers";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Logos from "@/components/home/logos";
import News from "@/components/home/news";
import OS from "@/components/home/os";
import PricingSection from "@/components/home/pricing";
import Solutions from "@/components/home/solutions";
import {routing} from "@/i18n/routing";

type Props = {params: Promise<{locale: string}>};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale: locale, namespace: "Home"});

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
    };
}

export default async function Home({params}: Props) {
    const {locale} = await params;

    return (
        <main className="space-y-40 mb-40">
            <Hero params={locale} />
            <Logos params={locale} />
            <Agents params={locale} />
            <OS params={locale} />
            <Benefits params={locale} />
            <Customers params={locale} />
            <News params={locale} />
            <Solutions params={locale} />
            <PricingSection params={locale} />
            <FAQ params={locale} />
        </main>
    );
}
