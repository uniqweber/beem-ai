// components/shared/navbar.tsx
"use client";

import {motion, Variants} from "framer-motion"; // For smooth animations
import {Menu, X} from "lucide-react"; // Icons for mobile toggle
import Image from "next/image";
import {useState} from "react";

// Mobile menu animation variants
const menuVariants: Variants = {
    hidden: {opacity: 0, scaleY: 0, transition: {duration: 0.2}},
    visible: {
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export default function Navbar({locale}: {locale: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Common navigation links
    const navLinks = [
        {href: `/${locale}`, label: "Home"},
        {href: `#`, label: "Agents"},
        {href: `#`, label: "Solutions"},
        {href: `#`, label: "Pricing"},
        {href: `/${locale}/contact`, label: "Contact"},
    ];

    return (
        <div className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-lg z-50 text-white">
            <div className="max-container h-20 flex font-medium items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Image src={"/logo.png"} alt="Logo" width={90} height={100} priority />

                {/* Desktop Navigation Links (Hidden on small screens) */}
                <ul className="hidden lg:flex gap-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="hover:text-gray-300 transition-colors">
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons (Hidden on small screens) */}
                <div className="hidden lg:flex items-center gap-3">
                    <button className="h-9 text-sm px-4 rounded-lg border border-white/15 hover:bg-white/10 transition-colors">
                        Login
                    </button>
                    <button className="h-9 text-sm px-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
                        Request Access
                    </button>
                </div>

                {/* Mobile Menu Toggle Button (Visible on small screens) */}
                <button
                    className="lg:hidden text-white p-2 z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- Mobile Menu (Animated with Framer Motion) --- */}
            <motion.div
                initial="hidden"
                animate={isMenuOpen ? "visible" : "hidden"}
                variants={menuVariants}
                // Sets the pivot point for the scaleY animation to the top (0)
                style={{originY: 0}}
                className="lg:hidden absolute top-20 left-0 right-0 w-full bg-black border-b border-white/15 backdrop-blur-sm shadow-xl overflow-hidden"
            >
                {/* Mobile Links */}
                <ul className="flex flex-col p-4 space-y-3 border-t border-zinc-800">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            className="w-full text-lg p-2 font-semibold hover:bg-zinc-800 rounded-md transition-colors"
                            // Simple stagger effect for links
                            initial={{x: -20, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.1 + index * 0.05}}
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            <a href={link.href} className="block w-full">
                                {link.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Buttons */}
                <div className="flex flex-col p-4 space-y-3 border-t border-zinc-800">
                    <button className="w-full h-10 text-base font-semibold rounded-lg border border-white/15 hover:bg-white/10 transition-colors">
                        Login
                    </button>
                    <button className="w-full h-10 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 transition-colors">
                        Request Access
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
