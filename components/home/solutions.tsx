// components/home/Solutions.tsx
import {getTranslations} from "next-intl/server";

export default async function Solutions({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Solutions",
    });

    return (
        <section className="container mx-auto">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <p>{t("description")}</p>
            <button>{t("cta")}</button>
        </section>
    );
}
