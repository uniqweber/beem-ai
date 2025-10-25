// components/shared/footer.tsx
import {getTranslations} from "next-intl/server";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export default async function Footer({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.Footer",
    });

    const navigationData = t.raw("Navigation") as Record<string, Array<{title: string; link: string}>>;

    return (
        <footer>
            <div className="container mx-auto">
                <div className="mb-10">
                    <p>{t("subscribe")}</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>{t("cta")}</button>
                </div>

                <div className="grid grid-cols-5">
                    {Object.entries(navigationData).map(([section, items]) => (
                        <div key={section}>
                            <h4>{section}</h4>
                            <div>
                                {items.map((item, idx) => (
                                    <Link className="block" key={idx} href={item.link}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <p>{t("copyright")}</p>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}
