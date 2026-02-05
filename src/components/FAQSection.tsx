"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Do you offer a first consultation?",
        answer: "Yes, I offer a brief initial consultation to ensure we are a good mutual fit and to discuss your goals for therapy."
    },
    {
        question: "What should I expect in my first session?",
        answer: "Our first session is a time for us to get to know each other. We will discuss your background, what brings you to therapy now, and how we can best work together."
    },
    {
        question: "How long does therapy typically last?",
        answer: "The duration of therapy is unique to each individual. Some clients find resolution in a few months, while others value longer-term support for deep personal growth."
    },
    {
        question: "Do you accept insurance?",
        answer: "I am an out-of-network provider. I can provide you with a 'superbill' that you may submit to your insurance company for potential reimbursement."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding">
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h2 className="text-4xl mb-6 text-primary">Common Questions</h2>
                    <p className="text-foreground/70">
                        If you have other questions, please feel free to reach out via the contact form.
                    </p>
                </div>

                <div className="md:col-span-2 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-primary/10">
                            <button
                                className="w-full py-6 text-left flex justify-between items-center group"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className={`text-xl font-medium transition-colors ${activeIndex === index ? 'text-accent' : 'text-primary'}`}>
                                    {faq.question}
                                </span>
                                <span className={`text-2xl transition-transform ${activeIndex === index ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="pb-6 text-foreground/70 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
