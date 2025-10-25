import Agents from "@/components/home/agents";
import Benefits from "@/components/home/benefits";
import Customers from "@/components/home/customers";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import OS from "@/components/home/os";
import Solutions from "@/components/home/solutions";
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

type Props = {params: Promise<{locale: string}>};

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
            <Agents params={locale} />
            <OS params={locale} />
            <Benefits params={locale} />
            <Customers params={locale} />
            <Solutions params={locale} />
            <FAQ params={locale} />
        </main>
    );
}
