"use client";

import {ChevronDown, Clock, Send, Target, TrendingUp} from "lucide-react";
import {useState} from "react";

// --- Helper Components ---
const StandardInput = ({
    label = "",
    name = "",
    type = "text",
    required = false,
    placeholder = "",
    value = "",
    onChange = (): void => {},
}) => (
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

// --- REFINED: Minimalist Feature/Benefit List Item ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BenefitListItem = ({icon: Icon, text}: {icon: any; text: string}) => (
    <div className="flex items-center text-[17px] text-white/40 gap-3">
        <Icon className="w-5 h-5  shrink-0 " />
        <span>{text}</span>
    </div>
);

// --- MODIFIED: Stat Block now supports four points in a 2x2 grid ---
const StatBlock = ({value, label}: {value: string; label: string}) => (
    <div className="p-3 items-center gap-3 rounded-lg border border-white/20 border-dashed flex   transition-shadow hover:shadow-lg hover:shadow-white/5">
        <p className="text-lg font-extrabold text-white ">{value}</p>
        <p className="text-xs uppercase ">{label}</p>
    </div>
);

// =========================================================================
// MAIN COMPONENT - REVISED SPLIT-SCREEN
// =========================================================================

export default function DemoRequestPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyMail: "",
        companyName: "",
        useCase: "",
        budget: "Yes",
        phoneNumber: "",
        language: "English",
        privacyChecked: false,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {name, value, type} = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData((prev) => ({...prev, [name]: checked}));
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
            alert("Please fill out all required fields and accept the privacy policy.");
            return;
        }
        setFormSubmitted(true);
    };

    return (
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-16 pt-20 pb-40">
            {/* --- LEFT COLUMN: VALUE PROPOSITION (MINIMALIST) --- */}
            <div className=" space-y-12">
                {/* Main Headline */}
                <div>
                    <h1 className="text-5xl font-medium mb-5 leading-tight tracking-tight">
                        Schedule Your <br /> AI Strategy Session
                    </h1>
                    <p className="text-lg text-white/40 max-w-lg">
                        A personalized session to see how Beem can automate your operations and
                        enhance productivity using AI agents.
                    </p>
                </div>

                {/* What We Will Cover - CLEAN LIST */}
                <div>
                    <h2 className="text-xl font-medium mb-4 text-white">
                        What we will cover together:
                    </h2>
                    <div className="space-y-1">
                        <BenefitListItem
                            icon={Target}
                            text="Tailored overview for your unique needs"
                        />
                        <BenefitListItem
                            icon={Clock}
                            text="Interactive meeting to answer all your inquiries"
                        />
                        <BenefitListItem
                            icon={TrendingUp}
                            text="ROI evaluation for your business growth"
                        />
                    </div>
                </div>

                {/* Key Results / Stats - CLEAN BLOCK */}
                <div>
                    <h2 className="text-xl font-medium mb-5 text-white">Proven Results</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <StatBlock value="2X" label="Team Efficiency Increase" />
                        <StatBlock value="75%" label="Inquiries Automated" />
                        <StatBlock value="7X" label="Sales Cycle Acceleration" />
                        <StatBlock value="30%" label="Support Workload Reduction" />
                    </div>
                </div>
            </div>

            {/* --- RIGHT COLUMN: CONTACT FORM (STICKY CARD) --- */}
            <div className={`border p-6 rounded-xl border-white/15`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Mail */}
                    <StandardInput
                        label="Full Name"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <StandardInput
                        label="Company Mail (Work emails only)"
                        name="companyMail"
                        type="email"
                        required
                        placeholder="work@company.com"
                        value={formData.companyMail}
                        onChange={handleChange}
                    />

                    {/* Row 2: Company Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <StandardInput
                            label="Company Name"
                            name="companyName"
                            required
                            placeholder="Your Company Inc."
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        <StandardInput
                            label="Phone Number"
                            name="phoneNumber"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Use Case */}
                    <div>
                        <label
                            htmlFor="useCase"
                            className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                        >
                            What"s your specific use case?
                        </label>
                        <textarea
                            id="useCase"
                            name="useCase"
                            rows={4}
                            value={formData.useCase}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-zinc-950 rounded-lg border  border-white/15 text-white text-sm outline-none  resize-none`}
                            placeholder="Describe your key challenge in customer support or sales automation."
                        />
                    </div>

                    {/* Budget & Language Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                        {/* Budget Radio Buttons */}
                        <div>
                            <p
                                className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                            >
                                Budget within €1000/month?<span className="text-white">*</span>
                            </p>
                            <div className="flex gap-3">
                                {["Yes", "No"].map((option) => (
                                    <label
                                        key={option}
                                        className={`flex items-center py-2 px-5 rounded-full border border-white/15 cursor-pointer transition-all duration-200 text-sm ${
                                            formData.budget === option
                                                ? "bg-white text-black font-semibold border-white"
                                                : `bg-zinc-900  hover:border-zinc-500`
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
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Preferred Language Select */}
                        <div className="relative">
                            <p
                                className={`block text-xs font-semibold uppercase tracking-wider mb-2 `}
                            >
                                Preferred language
                            </p>
                            <select
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className={`w-full py-3 px-4 bg-zinc-950 rounded-lg border text-white text-sm appearance-none cursor-pointer border-white/15`}
                            >
                                <option value="English">English</option>
                                <option value="Italian">Italian</option>
                                <option value="Spanish">Spanish</option>
                            </select>
                            <ChevronDown
                                className={` absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 w-4 h-4 pointer-events-none`}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`bg-white text-black font-medium text-center py-2.5 w-full rounded-lg flex items-center justify-center gap-3 `}
                    >
                        Send Message <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
}
