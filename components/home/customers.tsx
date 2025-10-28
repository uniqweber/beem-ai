// components/home/Customers.tsx
import {Link} from "@/i18n/navigation";
import {ArrowRight} from "lucide-react";
import {getTranslations} from "next-intl/server";
import Image from "next/image";

export default async function Customers({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Customers",
    });

    const caseStudies = t.raw("CaseStudies") as Array<{
        category: string;
        title: string;
        cta: string;
        img: string;
        href: string;
    }>;

    return (
        <section className="max-container pt-2 overflow-hidden">
            <div className="text-center ">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                    {t("title")}
                </span>
                <h2 className="text-4xl md:text-5xl md:leading-14 my-5 font-medium md:w-3/5 mx-auto px-5 md:px-0 ">
                    {t("subtitle")}
                </h2>
                <p className="max-w-2xl text-white/35 mx-auto text-[17px] mb-5">
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
            <div className="mt-20 flex gap-6 md:gap-10">
                {caseStudies.map((item, idx: number) => (
                    <Link href={item.href} locale={params} key={idx} className="w-80 md:w-[350px] block shrink-0">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-full h-[350px] object-cover rounded-2xl"
                        />
                        <p className="mt-4 text-white/35 font-medium ">{item.category}</p>
                        <h3 className="text-2xl mt-2 font-semibold mb-4">{item.title}</h3>
                        <button className="flex items-center gap-2 text-white/35 font-medium text-[17px]">
                            {item.cta} <ArrowRight size={20} />{" "}
                        </button>
                    </Link>
                ))}
            </div>
        </section>
    );
}
