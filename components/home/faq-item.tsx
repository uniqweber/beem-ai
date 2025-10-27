// components/home/FAQItem.tsx
"use client";

import {AnimatePresence, motion} from "framer-motion";
import {Plus} from "lucide-react";
import {ReactNode, useState} from "react";

interface FAQItemProps {
    question: string;
    answer: ReactNode[];
    index: number;
}

export default function FAQItem({question, answer, index}: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-50px"}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className=" overflow-hidden "
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full  py-5 flex items-center justify-between text-left "
            >
                <span className="font-medium text-lg pr-8">{question}</span>
                <motion.div
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                    className="shrink-0"
                >
                    <Plus className="w-5 h-5 text-white/60" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{
                            height: {duration: 0.3, ease: "easeInOut"},
                            opacity: {duration: 0.2},
                        }}
                        className="overflow-hidden"
                    >
                        <div className=" pb-5 pt-2 text-white/40 leading-relaxed">{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
