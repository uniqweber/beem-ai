"use client";

import {ChevronDown, Clock, Send, Target, TrendingUp} from "lucide-react";
import {useTranslations} from "next-intl";
import {useState} from "react";

interface StandardInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "tel";
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormData {
    fullName: string;
    companyMail: string;
    companyName: string;
    useCase: string;
    budget: "Yes" | "No";
    phoneNumber: string;
    language: "English" | "Italian" | "Spanish";
    privacyChecked: boolean;
}

const StandardInput = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder = "",
    value,
    onChange,
}: StandardInputProps) => (
    <div className="group">
        <label
            htmlFor={name}
            className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
        >
            {label}
            {required && <span className="text-white">*</span>}
        </label>
        <div className="relative">
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                className={`w-full py-3 px-4 bg-zinc-950 rounded-lg border border-white/15 text-white text-sm transition-all duration-200 outline-none`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

interface BenefitListItemProps {
    icon: React.ElementType;
    text: string;
}

const BenefitListItem = ({icon: Icon, text}: BenefitListItemProps) => (
    <div className="flex items-center text-[17px] text-white/40 gap-3">
        <Icon className="w-5 h-5 shrink-0 " />
        <span>{text}</span>
    </div>
);

interface StatBlockProps {
    value: string;
    label: string;
}

const StatBlock = ({value, label}: StatBlockProps) => (
    <div className="p-3 items-center gap-3 rounded-lg border border-white/20 border-dashed flex transition-shadow hover:shadow-lg hover:shadow-white/5">
        <p className="text-lg font-extrabold text-white ">{value}</p>
        <p className="text-xs uppercase ">{label}</p>
    </div>
);

export default function Contact() {
    const t = useTranslations("Contact");

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        companyMail: "",
        companyName: "",
        useCase: "",
        budget: "Yes",
        phoneNumber: "",
        language: "English",
        privacyChecked: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {name, value, type} = e.target;

        let updatedValue: string | boolean;

        if (type === "checkbox") {
            updatedValue = (e.target as HTMLInputElement).checked;
        } else if (name === "budget") {
            updatedValue = value as "Yes" | "No";
        } else if (name === "language") {
            updatedValue = value as "English" | "Italian" | "Spanish";
        } else {
            updatedValue = value;
        }

        setFormData((prev) => ({...prev, [name]: updatedValue}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.companyMail ||
            !formData.companyName ||
            !formData.budget ||
            !formData.privacyChecked
        ) {
            alert(t("form_error_alert"));
            return;
        }
    };

    const languageOptions: FormData["language"][] = ["English", "Italian", "Spanish"];
    const budgetOptions: FormData["budget"][] = ["Yes", "No"];

    return (
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-16 pt-20 pb-40">
            <div className=" space-y-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-5 leading-tight tracking-tight">
                        {t("title")}
                    </h1>

                    <p className="text-lg text-white/40 max-w-lg">{t("subtitle")}</p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mb-4 text-white">
                        {t("section_coverage_title")}
                    </h2>
                    <div className="space-y-1">
                        <BenefitListItem icon={Target} text={t("coverage_point_1")} />

                        <BenefitListItem icon={Clock} text={t("coverage_point_2")} />

                        <BenefitListItem icon={TrendingUp} text={t("coverage_point_3")} />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-medium mb-5 text-white">
                        {t("section_results_title")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <StatBlock value={t("stat_1_value")} label={t("stat_1_label")} />

                        <StatBlock value={t("stat_2_value")} label={t("stat_2_label")} />

                        <StatBlock value={t("stat_3_value")} label={t("stat_3_label")} />

                        <StatBlock value={t("stat_4_value")} label={t("stat_4_label")} />
                    </div>
                </div>
            </div>

            <div className={`border p-6 rounded-xl border-white/15`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <StandardInput
                        label={t("input_full_name_label")}
                        name="fullName"
                        required
                        placeholder={t("input_full_name_placeholder")}
                        value={formData.fullName}
                        onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    />
                    <StandardInput
                        label={t("input_mail_label")}
                        name="companyMail"
                        type="email"
                        required
                        placeholder={t("input_mail_placeholder")}
                        value={formData.companyMail}
                        onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <StandardInput
                            label={t("input_company_name_label")}
                            name="companyName"
                            required
                            placeholder={t("input_company_name_placeholder")}
                            value={formData.companyName}
                            onChange={
                                handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void
                            }
                        />
                        <StandardInput
                            label={t("input_phone_label")}
                            name="phoneNumber"
                            type="tel"
                            placeholder={t("input_phone_placeholder")}
                            value={formData.phoneNumber}
                            onChange={
                                handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void
                            }
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="useCase"
                            className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                        >
                            {t("input_use_case_label")}
                        </label>
                        <textarea
                            id="useCase"
                            name="useCase"
                            rows={4}
                            value={formData.useCase}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-zinc-950 rounded-lg border border-white/15 text-white text-sm outline-none resize-none`}
                            placeholder={t("input_use_case_placeholder")}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                        <div>
                            <p
                                className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                            >
                                {t("budget_label")}
                                <span className="text-white">{t("required_symbol")}</span>
                            </p>
                            <div className="flex gap-3">
                                {budgetOptions.map((option) => (
                                    <label
                                        key={option}
                                        className={`flex items-center py-2 px-5 rounded-full border border-white/15 cursor-pointer transition-all duration-200 text-sm ${
                                            formData.budget === option
                                                ? "bg-white text-black font-semibold border-white"
                                                : `bg-zinc-900 hover:border-zinc-500`
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={option}
                                            checked={formData.budget === option}
                                            onChange={() =>
                                                setFormData((p) => ({...p, budget: option}))
                                            }
                                            required
                                            className="hidden"
                                        />

                                        <span>
                                            {t(
                                                `budget_${option.toLowerCase()}` as
                                                    | "budget_yes"
                                                    | "budget_no"
                                            )}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <p
                                className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                            >
                                {t("language_label")}
                            </p>
                            <select
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={
                                    handleChange as (
                                        e: React.ChangeEvent<HTMLSelectElement>
                                    ) => void
                                }
                                className={`w-full py-3 px-4 bg-zinc-950 rounded-lg border text-white text-sm appearance-none cursor-pointer border-white/15`}
                            >
                                {languageOptions.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {t(
                                            `language_option_${lang.toLowerCase()}` as
                                                | "language_option_english"
                                                | "language_option_italian"
                                                | "language_option_spanish"
                                        )}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown
                                className={` absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 w-4 h-4 pointer-events-none`}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`bg-white text-black font-medium text-center py-2.5 w-full rounded-lg flex items-center justify-center gap-3 `}
                    >
                        {t("submit_button")} <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
}
