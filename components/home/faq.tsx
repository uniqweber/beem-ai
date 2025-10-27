// components/home/FAQ.tsx
import {getTranslations} from "next-intl/server";
import {ReactNode} from "react";
import FAQItem from "./faq-item";


/**
 * FAQ component using next-intl for localization.
 * @param params The current locale (e.g., 'en', 'bn').
 */
export default async function FAQ({params}: {params: string}) {
    // Fetch translations for the component namespace.
    const t = await getTranslations({
        locale: params,
        namespace: "Home.FAQ",
    });

    // Get the raw array structure directly from the translation file.
    const questionsData = t.raw("Questions") as Array<{question: string; answer: string}>;

    /**
     * Formats the raw answer string (which may contain \n and numbered lists)
     * into an array of React elements (p, br, or div).
     */
    const formatAnswer = (answer: string): ReactNode[] => {
        // Split the answer by newline to process line by line.
        const lines = answer.split("\n");

        return lines.map((line, index) => {
            const trimmedLine = line.trim();

            // Renders a line break for vertical spacing/empty lines.
            if (!trimmedLine) {
                return <br key={index} />;
            }

            // Checks for a numbered list pattern (e.g., "1.", "2.").
            if (/^\d+\./.test(trimmedLine)) {
                return (
                    // Adds left padding for numbered list effect.
                    <div key={index} className="pl-4 mb-2">
                        {trimmedLine}
                    </div>
                );
            }

            // Default: Render as a paragraph.
            return (
                <p key={index} className="mb-2">
                    {trimmedLine}
                </p>
            );
        });
    };

    return (
        <section className="max-container">
            <div className="text-center">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">
                    {t("title")}
                </span>
                <h2 className="text-4xl md:text-5xl md:leading-14 my-5 font-medium md:w-3/5 mx-auto">
                    {t("subtitle")}
                </h2>
                <p className="max-w-2xl text-white/35 mx-auto text-[17px] mb-5">
                    {t("description")}
                </p>
            </div>
            <div className="mt-20 md:mt-32 mx-auto max-w-3xl space-y-4">
                {questionsData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={formatAnswer(item.answer)}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
