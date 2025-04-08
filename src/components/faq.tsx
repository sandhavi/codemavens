import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQItem {
    question: string;
    answer: string | JSX.Element;
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "What is Baby Guard, and who is it for?",
            answer: "Baby Guard is a digital health platform designed to support pregnant women, new mothers, and caregivers by providing tools to monitor maternal and newborn health. It’s ideal for expecting mothers, parents of newborns, healthcare providers, and caregivers who need reliable health tracking and expert advice."
        },
        {
            question: "What features does Baby Guard offer?",
            answer: "Baby Guard offers various features including health tracking, expert advice, and community support tailored for pregnant women and new parents."
        },
        {
            question: "Can Baby Guard be used offline?",
            answer: "Yes, Baby Guard offers offline functionality for features like health data recording and reminders. This ensures you can use essential features even in areas with limited or no internet access."
        },
        {
            question: "How does Baby Guard ensure the privacy of my health data?",
            answer: "Baby Guard uses advanced encryption to protect your health information. All data is securely stored, and only you and authorized healthcare providers can access it. We comply with data privacy regulations to safeguard your information."
        },
        {
            question: "Is Baby Guard free to use?",
            answer: "Baby Guard offers a free version with essential features. A premium subscription unlocks advanced functionalities like personalized consultations, exclusive educational content, and additional tools for holistic family health management."
        },
    ];

    const { ref } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <div className="flex flex-col h-auto md:h-screen items-center justify-center w-full" id="faq">
            <h2 className="text-center text-5xl mb-3 font-bold font-bruno md:text-6xl text-gray-800">
                FAQ
            </h2>

            <div className="mx-auto w-full">
                <div className="mx-auto mt-3 grid z-2 max-w-3xl divide-y divide-neutral-200 font-des w-full">
                    {faqItems.map((faq, index) => (
                        <div
                            ref={ref}
                            key={index}
                            className="py-1 w-full"
                        >
                            <div className="group w-full">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between font-des font-semibold tracking-wide bg-pink-100 p-3 md:p-3 rounded-lg text-gray-800 md:text-lg text-base w-full hover:bg-pink-200 transition"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`transition transform duration-700 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                            style={{ overflow: 'hidden' }}
                                            className="text-gray-800 text-base md:text-lg rounded-md tracking-wide w-full bg-pink-50 mt-4 mb-1 md:px-6 px-3"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;