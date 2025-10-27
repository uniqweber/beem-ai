// components/home/Benefits.tsx
import {getTranslations} from "next-intl/server";
import Image from "next/image";

export default async function Benefits({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Benefits",
    });

    return (
        <section className="max-container ">
            <div className="text-center mb-10 ">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                    {t("title")}
                </span>
                <h2 className="text-4xl md:text-5xl md:leading-14 my-5 font-medium max-w-3xl lg:px-5 mx-auto ">
                    {t("subtitle")}
                </h2>
                <p className="max-w-2xl text-white/35 mx-auto text-[17px] mb-5">
                    {t("description")}
                </p>
            </div>
            <Image src="/benefits.png" alt="OS" width={6000} height={6000} />
        </section>
    );
}
