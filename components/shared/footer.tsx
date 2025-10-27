// components/shared/footer.tsx
import {ArrowRight} from "lucide-react";
import {getTranslations} from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export default async function Footer({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Footer",
    });

    const navigationData = t.raw("Navigation") as Record<
        string,
        Array<{title: string; link: string}>
    >;
    return (
        <footer>
            <div className="max-container">
                <div className="flex items-center justify-between">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo.png"
                            alt="Beam"
                            width={80}
                            height={32}
                            className="h-5 w-auto"
                        />
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://youtube.com"
                            target="_blank"
                            className="text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-start mt-8 mb-16 justify-between">
                    <div>
                        <Image
                            src="/trust.png"
                            alt="Beam"
                            width={200}
                            height={32}
                            className="h-12 w-auto"
                        />
                        <Link
                            href="/trust-center"
                            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 ml-1 mt-3"
                        >
                            <div className="bg-white/10 rounded px-1 py-0.5">
                                <ArrowRight size={14} className="-rotate-45" />
                            </div>
                            Trust Center
                        </Link>
                    </div>
                    {/* Newsletter Section */}
                    <div className=" flex items-end justify-between">
                        <div className="flex-1 max-w-2xl">
                            <h3 className="text-lg font-medium mb-3">{t("subscribe")}</h3>
                            <div className="flex gap-3 h-11">
                                <input type="email" placeholder="name@email.com" className="h-full bg-white/10 w-60 md:w-72 px-4 rounded-lg" />
                                <button className="bg-white px-4 rounded-lg text-black font-semibold h-full">
                                    {t("cta")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-12 mb-16">
                    {Object.entries(navigationData).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="font-medium mb-4">{section}</h4>
                            <ul className="space-y-1 font-medium">
                                {items.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={item.link}
                                            className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pb-6 flex items-center justify-between">
                    <p className="text-sm text-white/40">{t("copyright")}</p>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}
