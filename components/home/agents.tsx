// components/home/Agents.tsx
import {getTranslations} from "next-intl/server";

export default async function Agents({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Agents",
    });

    return (
        <section className="max-container ">
            <div className="text-center ">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">{t("title")}</span>
                <h2 className="text-4xl md:leading-14 md:text-5xl my-5 font-medium md:w-3/5 mx-auto ">{t("subtitle")}</h2>
                <p className="max-w-2xl text-white/35 mx-auto text-[17px] mb-5">{t("description")}</p>
                <button className="bg-primary h-11 hover:bg-primary/80 duration-300 border border-blue-500 px-4 rounded-xl  ">{t("cta")}</button>
            </div>
        </section>
    );
}
