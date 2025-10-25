// components/home/FAQ.tsx
import {getTranslations} from "next-intl/server";

export default async function FAQ({params}: {params: string}) {
    const t = await getTranslations({
        locale: params,
        namespace: "Home.FAQ",
    });

    // Questions array থেকে data নিন
    const questionsData = t.raw("Questions") as Array<{question: string; answer: string}>;

    // Answer format করার function
    const formatAnswer = (answer: string) => {
        // \n দিয়ে split করুন
        const lines = answer.split("\n");

        return lines.map((line, index) => {
            const trimmedLine = line.trim();

            // যদি line খালি হয়
            if (!trimmedLine) {
                return <br key={index} />;
            }

            // যদি line number দিয়ে শুরু হয় (1. 2. 3. etc)
            if (/^\d+\./.test(trimmedLine)) {
                return (
                    <div key={index} className="pl-4 mb-2">
                        {trimmedLine}
                    </div>
                );
            }

            // Normal paragraph
            return (
                <p key={index} className="mb-2">
                    {trimmedLine}
                </p>
            );
        });
    };

    return (
        <section className="container mx-auto px-4 py-12">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <p>{t("description")}</p>

            <div className="max-w-4xl mx-auto ">
                {questionsData.map((item, index) => (
                    <details key={index}>
                        <summary>{item.question}</summary>
                        <div>{formatAnswer(item.answer)}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}
