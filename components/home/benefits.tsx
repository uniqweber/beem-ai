// components/home/Benefits.tsx
import {getTranslations} from "next-intl/server";

export default async function Benefits({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Benefits",
    });

    return (
        <section className="container mx-auto">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <p>{t("description")}</p>
        </section>
    );
}
