"use client";

import {Link} from "@/i18n/navigation";
import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

export default function Customers({params}: {params: string}) {
    const t = useTranslations("Home.Customers");

    const caseStudies = t.raw("CaseStudies") as Array<{
        category: string;
        title: string;
        cta: string;
        img: string;
        href: string;
    }>;

    return (
        <section className="max-container pt-2 ">
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
            <div className="mt-20  relative">
                {/* {caseStudies.map((item, idx: number) => (
                    <Link
                        href={item.href}
                        locale={params}
                        key={idx}
                        className="w-80 md:w-[350px] block shrink-0"
                    >
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
                ))} */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    grabCursor
                    speed={1400}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                    loop
                >
                    {caseStudies.map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <Link
                                href={item.href}
                                locale={params}
                                key={index}
                                className=" block border rounded-2xl overflow-hidden border-white/15 md:border-0 md:overflow-auto md:rounded-none"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={400}
                                    height={400}
                                    className="w-full lg:h-[350px] object-cover rounded-2xl"
                                />
                                <div className="px-4 pb-4 md:px-0 md:pb-0">
                                    <p className="mt-4 text-white/35 font-medium ">
                                        {item.category}
                                    </p>
                                    <h3 className="text-2xl mt-2 font-semibold mb-4">
                                        {item.title}
                                    </h3>
                                    <button className="flex items-center gap-2 text-white/35 font-medium text-[17px]">
                                        {item.cta} <ArrowRight size={20} />{" "}
                                    </button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute inset-y-0 -left-1 lg:-left-5 flex items-center z-20">
                    <div className="swiper-button-prev-custom cursor-pointer size-9 bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                </div>

                <div className="absolute inset-y-0 -right-1 lg:-right-5 flex items-center z-20">
                    <div className="swiper-button-next-custom size-9 cursor-pointer bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md">
                        <ChevronRight className="w-6 h-5" />
                    </div>
                </div>

                <div
                    dir="ltr"
                    className="absolute hidden md:block inset-y-0 bg-linear-to-r -left-0.5 from-black to-transparent px-5 md:px-10 z-10"
                ></div>
                <div
                    dir="ltr"
                    className="absolute hidden md:block inset-y-0 bg-linear-to-l -right-0.5 from-black to-transparent px-5 md:px-10 z-10"
                ></div>
            </div>
        </section>
    );
}
