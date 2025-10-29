"use client";

import { Link } from "@/i18n/navigation";
import {Calendar, Monitor, Video} from "lucide-react";
import {useTranslations} from "next-intl";
import Image from "next/image";

interface EventItem {
    time: string;
    title: string;
    author: string;
    format: string;
    tags: string[];
    image: string;
    bgColor: string;
    href: string;
}

interface EventGroup {
    date: string;
    day: string;
    items: EventItem[];
}

export default function Booking() {
    const t = useTranslations("Booking");

    const events = t.raw("events") as EventGroup[];

    const translateDay = (day: string) =>
        t(`day_names.${day}` as "day_names.Thursday" | "day_names.Friday" | "day_names.Wednesday");
    const translateFormat = (format: string) =>
        t(`formats.${format}` as "formats.Virtual" | "formats.Zoom" | "formats.To Be Announced");

    return (
        <div className="relative pt-20 pb-40">
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="text-center ">
                    <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                        {t("heading_tag")}
                    </span>

                    <h2 className="text-4xl md:leading-14 md:text-5xl my-5 font-medium md:w-3/5 mx-auto ">
                        {t("heading_title")}
                    </h2>

                    <p className="max-w-2xl text-white/35 mx-auto text-[17px] mb-5">
                        {t("heading_subtitle")}
                    </p>
                </div>

                {events.map((dateGroup, idx) => (
                    <div key={idx} className="mb-8 mt-20">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/15">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <h2 className="text-sm font-medium text-gray-400">
                                <span className="text-white font-semibold">{dateGroup.date}</span>{" "}
                                {translateDay(dateGroup.day)}
                            </h2>
                        </div>

                        {dateGroup.items.map((event, eventIdx) => (
                            <div
                                key={eventIdx}
                                className=" rounded-xl p-6 bg-zinc-950 border border-white/15 shadow-2xl shadow-zinc-900/50 hover:border-teal-500/50 transition-all duration-300 mb-4"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-400 mb-2">
                                            {event.time}
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                                            {event.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                            <div className="size-5 bg-linear-to-br text-xs font-bold text-white leading-none from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                                                {event.author.charAt(0).toUpperCase()}
                                            </div>

                                            <span>
                                                {t("by_prefix")} {event.author}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                                            {event.format === "Virtual" ||
                                            event.format === "Zoom" ? (
                                                <Monitor className="w-4 h-4" />
                                            ) : (
                                                <Video className="w-4 h-4" />
                                            )}

                                            <span>{translateFormat(event.format)}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {event.tags.map((tag, tagIdx) => (
                                                <div
                                                    key={tagIdx}
                                                    className={`${
                                                        tag === "AI Agents" ||
                                                        tag === "AI in HR" ||
                                                        tag === "AI in Customer service"
                                                            ? "bg-green-900/30 text-green-400 border border-green-800/50 hover:bg-green-900/40"
                                                            : tag === "Artificial Intelligence"
                                                            ? "bg-red-900/30 text-red-400 border border-red-800/50 hover:bg-red-900/40"
                                                            : tag === "Automation"
                                                            ? "bg-yellow-900/30 text-yellow-400 border border-yellow-800/50 hover:bg-yellow-900/40"
                                                            : tag === "German"
                                                            ? "bg-pink-900/30 text-pink-400 border border-pink-800/50 hover:bg-pink-900/40"
                                                            : "bg-blue-900/30 text-blue-400 border border-blue-800/50 hover:bg-blue-900/40"
                                                    } text-xs font-medium px-2.5 rounded-full py-1`}
                                                >
                                                    {t(`tags.${tag}` as const)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="shrink-0">
                                        <div className={`size-32 overflow-hidden relative`}>
                                            <Image
                                                src={event.image}
                                                alt={event.author}
                                                fill
                                                className="w-full h-full rounded-lg object-cover"
                                            />

                                            <div
                                                className={`absolute inset-0 bg-linear-to-br ${event.bgColor} opacity-40 mix-blend-multiply rounded-lg`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href={event.href} className="w-full block text-center py-2 px-4 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors duration-200">
                                        {t("register_button")}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
