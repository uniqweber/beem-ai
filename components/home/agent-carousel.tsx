"use client";

import {ChevronLeft, ChevronRight} from "lucide-react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css/navigation";
import "swiper/swiper.css";

interface AIAgentData {
    category: string;
    title: string;
    workflows: string[];
    image: string;
}

export default function AgentCarousel() {
    const t = useTranslations("Home.Agents.Carousel");

    const aiAgentsData = t.raw("agents") as AIAgentData[];

    const translateCategory = (category: string) => t(`categories.${category}`);

    return (
        <div className="mt-20 relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                grabCursor
                speed={1400}
                centeredSlides={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        centeredSlides: true,
                    },
                }}
                loop
            >
                {aiAgentsData.map((agent, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div className="w-full relative h-full border rounded-2xl overflow-hidden border-white/15 group cursor-pointer">
                            <div className=" relative h-60 overflow-hidden">
                                <Image
                                    src={agent.image}
                                    alt={agent.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-bottom group-hover:scale-130 duration-500 ease-in-out group-hover:origin-bottom-left scale-115 "
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                            </div>

                            <div className="p-5 min-h-80 -mt-24 relative z-20 space-y-2.5 bg-transparent ">
                                <div className="w-max px-2.5 py-1.5 text-xs font-semibold tracking-wide uppercase bg-zinc-700/70 text-white/70 backdrop-blur-md rounded-md ">
                                    {translateCategory(agent.category)}
                                </div>
                                <h3 className="text-xl font-bold ">{agent.title}</h3>
                                <p className="text-[13px] uppercase font-semibold tracking-wider text-white/60">
                                    {t("workflow_heading")}
                                </p>

                                <ul className="space-y-1.5 ">
                                    {agent.workflows.map((flow, index) => (
                                        <li
                                            key={index}
                                            className="bg-white/5 px-3 py-3 rounded-lg text-sm text-white/60 "
                                        >
                                            {flow}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute bg-zinc-900 inset-0 opacity-0 group-hover:opacity-50 duration-500 ease-in-out "></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-y-0 -left-1 md:-left-5 flex items-center z-20">
                <div className="swiper-button-prev-custom cursor-pointer size-9 bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md">
                    <ChevronLeft className="w-5 h-5" />
                </div>
            </div>

            <div className="absolute inset-y-0 -right-1 md:-right-5 flex items-center z-20">
                <div className="swiper-button-next-custom size-9 cursor-pointer bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md">
                    <ChevronRight className="w-6 h-5" />
                </div>
            </div>

            <div
                dir="ltr"
                className="absolute inset-y-0 bg-linear-to-r left-0 from-black to-transparent px-5 md:px-10 z-10"
            ></div>
            <div
                dir="ltr"
                className="absolute inset-y-0 bg-linear-to-l right-0 from-black to-transparent px-5 md:px-10 z-10"
            ></div>
        </div>
    );
}
