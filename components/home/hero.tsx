import {getTranslations} from "next-intl/server";

export default async function Hero({params}: {params: string}) {
    const t = await getTranslations({locale: params, namespace: "Home.Hero"});

    return (
        <section className="container mx-auto">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <p>{t("description")}</p>
            <button>{t("cta")}</button>
        </section>
    );
}
