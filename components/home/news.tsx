"use client";
import {Link} from "@/i18n/navigation";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import Image from "next/image";

export interface NewsArticle {
    id: number;
    title: string;
    author?: string;
    authorImage?: string;
    date?: string;
    image: string;
    featured: boolean;
    href: string;
}

export default function News({params}: {params: string}) {
    const t = useTranslations("Home.News");
    const articles = t.raw("Articles") as NewsArticle[];

    const featuredArticle = articles[0];
    const sideArticles = articles.slice(1);
    return (
        <section className="max-container">
            {/* Header */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
            >
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                    {t("title")}
                </span>
                <h2 className="text-4xl md:text-5xl md:leading-14 mt-5  font-medium ">
                    {t("subtitle")}
                </h2>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid lg:grid-cols-2 gap-6 my-12">
                {/* Featured Article */}
                <motion.article
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="relative group cursor-pointer"
                >
                    <Link
                        href={featuredArticle.href}
                        locale={params}
                        className="relative block h-[450px] rounded-2xl overflow-hidden "
                    >
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            width={6000}
                            height={6000}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                {t("category")}
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="text-3xl font-semibold mb-4 transition-colors">
                                {featuredArticle.title}
                            </h3>
                            <div className="flex items-center gap-3  text-white/80 font-semibold">
                                <Image
                                    src={featuredArticle.authorImage || "/news-author.jpg"}
                                    alt={featuredArticle.author || "Author"}
                                    width={40}
                                    height={40}
                                    className="size-10 object-top object-cover rounded-full"
                                />
                                <span>by {featuredArticle.author}</span>
                                <span>—</span>
                                <span>{featuredArticle.date}</span>
                            </div>
                        </div>
                    </Link>
                </motion.article>

                {/* Side Articles */}
                <div className="h-full flex flex-col gap-4 lg:gap-0 justify-between">
                    {sideArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.1 * (index + 1)}}
                        >
                            <Link
                                href={article.href}
                                locale={params}
                                className="flex gap-4 cursor-pointer"
                            >
                                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm text-white/40 font-medium mb-2">
                                        {t("category")}
                                    </span>
                                    <h4 className="text-lg font-semibold leading-snug group-hover:text-purple-300 transition-colors">
                                        {article.title}
                                    </h4>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.6}}
                className="flex justify-center"
            >
                <Link
                    href="#"
                    locale={params}
                    className="border  border-white/15 text-sm py-2 px-3 rounded-lg"
                >
                    {t("cta")}
                </Link>
            </motion.div>
        </section>
    );
}
