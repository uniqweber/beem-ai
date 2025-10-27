"use client";

import { Link } from "@/i18n/navigation";
import {CheckCircle} from "lucide-react";
import {useState} from "react";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const getYearlyPrice = (monthlyPrice: number) => {
        return Math.round(monthlyPrice * 10);
    };

    const plans = [
        {
            name: "Starter",
            price: {monthly: 49, yearly: getYearlyPrice(49)},
            description: "For individuals starting AI automation",
            features: [
                "1 user included",
                "5 AI Agents",
                "2M AI Tokens per month",
                "800 conversations per month",
                "Basic AI automation",
                "150 Knowledge Base items",
                "Email support",
            ],
            highlighted: false,
        },
        {
            name: "Professional",
            price: {monthly: 149, yearly: getYearlyPrice(149)},
            description: "For teams scaling AI-powered workflows",
            features: [
                "3 users included",
                "20 AI Agents",
                "5M AI Tokens per month",
                "3,000 conversations per month",
                "Advanced AI workflows",
                "300 Knowledge Base items",
                "Priority support",
            ],
            highlighted: true,
            badge: "Most Popular",
        },
        {
            name: "Business",
            price: {monthly: 499, yearly: getYearlyPrice(499)},
            description: "For businesses requiring advanced AI tools",
            features: [
                "5 users included",
                "50 AI Agents",
                "10M AI Tokens per month",
                "5,000 conversations per month",
                "Built-in AI automation",
                "1,000 Knowledge Base items",
                "Dedicated support",
            ],
            highlighted: false,
        },
    ];

    const primaryButton = "bg-white text-black hover:bg-gray-200";
    const highlightColor = "text-white";
    const highlightBorder = "border border-white";
    const defaultBorder = "border border-white/15";
    const cardBackground = "bg-zinc-950/70 backdrop-blur-sm";

    return (
        <div className="max-container mx-auto">
            <div className="text-center ">
                <span className="border border-white/15 text-sm py-2 px-3 rounded-lg">Pricing</span>
                <h2 className="text-4xl md:leading-14 md:text-5xl  mt-4 mb-5 md:max-w-lg mx-auto ">
                    Find the right plan for your growth
                </h2>
                <p className="max-w-lg text-zinc-400 mx-auto text-[17px] mb-10">
                    Choose a plan that fits your needs. Start with a 14-day trial to test all
                    features for free – No credit card required.
                </p>

                <div className="flex justify-center mb-16">
                    <div className="p-1 rounded-lg bg-zinc-900 flex transition-all duration-300 shadow-xl shadow-black/50 border border-zinc-800">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                billingCycle === "monthly"
                                    ? "bg-zinc-800 text-white shadow-inner shadow-black/50"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Monthly Billing
                        </button>

                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                                billingCycle === "yearly"
                                    ? "bg-zinc-800 text-white shadow-inner shadow-black/50"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Yearly Billing
                            <span className="absolute -top-3 right-0 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap transform -translate-x-1 shadow-lg">
                                SAVE 17%
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {plans.map((plan, index) => {
                    const isHighlighted = plan.highlighted;
                    const finalPrice = plan.price[billingCycle];
                    const monthlyPriceForYearly = plan.price.monthly;
                    const savings = monthlyPriceForYearly * 2;

                    return (
                        <div
                            key={index}
                            className={`relative rounded-xl p-8 transition-all duration-300 
                                    ${cardBackground} 
                                    ${isHighlighted ? highlightBorder : defaultBorder} 
                                    shadow-2xl shadow-black/50 hover:shadow-white/10`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span
                                        className={`bg-white text-black text-xs font-medium px-4 py-1.5 rounded-full shadow-xl`}
                                    >
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3
                                    className={`font-bold text-xl mb-2 ${
                                        isHighlighted ? highlightColor : "text-zinc-300"
                                    }`}
                                >
                                    {plan.name}
                                </h3>
                                <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-medium text-white">
                                        €{finalPrice}
                                    </span>
                                    <span className="text-zinc-500 ml-2 text-xl font-semibold">
                                        {billingCycle === "monthly" ? "/mo" : "/year"}
                                    </span>
                                </div>

                                {billingCycle === "yearly" ? (
                                    <p className="text-zinc-400 text-sm font-medium mt-1">
                                        Billed annually. Save €{savings}.
                                    </p>
                                ) : (
                                    <p className="text-zinc-500 text-sm mt-1">Billed monthly.</p>
                                )}
                            </div>

                            <Link
                                href="/contact"
                                className={`w-full block text-center border font-semibold border-white/20 mb-4 rounded-lg py-2 ${
                                    isHighlighted ? "bg-white text-black" : "bg-transparent"
                                } `}
                            >
                                Contact Sales
                            </Link>

                            <div className="space-y-2 pt-4 border-t border-white/15">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-start text-white/60 gap-3  font-medium"
                                    >
                                        <CheckCircle size={18} />
                                        <span className="">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
