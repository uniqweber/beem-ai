// components/home/Customers.tsx
import {getTranslations} from "next-intl/server";

export default async function Customers({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Customers",
    });

    const caseStudies = t.CaseStudies || [];

    return (
        <section className="container mx-auto">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <p>{t("description")}</p>
            <button>{t("cta")}</button>

            <div>
                {caseStudies.map((item, idx: number) => (
                    <div key={idx}>
                        {/* <img src={item.img} alt={item.title} /> */}
                        <p>{item.category}</p>
                        <h3>{item.title}</h3>
                        <button>{item.cta}</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
