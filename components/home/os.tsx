// components/home/OS.tsx
import {Link} from "@/i18n/navigation";
import {getTranslations} from "next-intl/server";
import Image from "next/image";

export default async function OS({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.OS",
    });

    return (
        <section className="max-container ">
            <div className="text-center mb-10 ">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                    {t("title")}
                </span>
                <h2 className="text-4xl md:leading-14 md:text-5xl my-5 font-medium max-w-xl mx-auto ">
                    {t("subtitle")}
                </h2>
                <p className="max-w-xl text-white/35 mx-auto text-[17px] mb-5">
                    {t("description")}
                </p>
                <Link
                    href="#"
                    locale={params}
                    className="bg-primary h-11 inline-flex items-center justify-center hover:bg-primary/80 duration-300 border border-blue-500 px-4 rounded-xl"
                >
                    {t("cta")}
                </Link>
            </div>
            <Image src="/os.png" alt="OS" width={6000} height={6000} />
        </section>
    );
}
