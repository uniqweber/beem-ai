import {Link} from "@/i18n/navigation";
import {ArrowRight} from "lucide-react";
import {getTranslations} from "next-intl/server";
import Image from "next/image";

export default async function Hero({params}: {params: string}) {
    const t = await getTranslations({locale: params, namespace: "Home.Hero"});

    return (
        <section className="  lg:h-[150vh] overflow-hidden">
            <div className="max-w-5xl relative z-10 pt-20 pb-10 lg:pb-0 px-4 mx-auto">
                <Link
                    href="/contact"
                    locale={params}
                    className="border-white/15 px-3 py-2 text-sm rounded-xl inline-flex border items-center justify-center"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-white/30 ">{t("title").split("-")[0]}</span>
                        <span className="inline-flex  items-center gap-1.5">
                            {t("title").split("-")[1]} <ArrowRight size={16} />
                        </span>
                    </span>
                </Link>
                <h1 className="text-4xl md:w-10/12  font-medium tracking-[-0.015em] mt-4 mb-6 lg:text-6xl pr-4">
                    {t("subtitle")}
                </h1>
                <p className="text-lg md:w-8/12 text-white/35 mb-6">{t("description")}</p>
                <Link
                    href="/contact"
                    locale={params}
                    className="border h-11  hover:bg-white/10 duration-300 inline-flex items-center justify-center px-4 rounded-xl border-white/40"
                >
                    {t("cta")}
                </Link>
            </div>
            <div className="">
                <Image
                    src={"/hero.avif"}
                    alt="Hero Image"
                    loading="eager"
                    width={6000}
                    height={6000}
                    className="scale-140 rotate-24 size-full object-cover object-center"
                />
            </div>
        </section>
    );
}
