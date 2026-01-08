import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);

    const faqs = [
        {
            question: "What does Vivasvan Technologies do?",
            answer: "We specialize in building high-quality web and mobile applications, providing end-to-end software solutions from concept to deployment."
        },
        {
            question: "Who do you work with?",
            answer: "We work with startups, businesses, and individuals looking to transform their ideas into robust digital products."
        },
        {
            question: "Do you build websites or mobile apps?",
            answer: "We build both! Our expertise covers modern responsive websites and cross-platform mobile applications using technologies like React and React Native."
        },
        {
            question: "Can you integrate AI into apps?",
            answer: "Yes, we can integrate AI features such as chatbots, recommendation systems, and data analysis into your applications to enhance user experience."
        },
        {
            question: "How fast can you build an MVP?",
            answer: "Timeline varies by complexity, but we specialize in rapid agile development to get your MVP to market as quickly as possible, typically within 4-8 weeks."
        },
        {
            question: "What technologies do you use?",
            answer: "We use a modern tech stack including React, Node.js, Spring Boot, Python, MongoDB, MySQL, and cloud services like AWS and Vercel."
        },
        {
            question: "Do you provide long-term support?",
            answer: "Absolutely. We offer various maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally."
        },
        {
            question: "What makes you different from other software companies?",
            answer: "Our team combines technical expertise with a business-first mindset. We don't just write code; we build solutions that drive growth and solve real problems."
        },
        {
            question: "How can I get started with Vivasvan Technologies?",
            answer: "Simply use the contact form below or reach out to us via email. We offer a free initial consultation to discuss your project requirements."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setVisibleItems((prev) => {
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                        <HelpCircle className="text-accent" /> FAQ
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Common questions about our services and process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            data-index={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-700 ease-out hover:shadow-md transform ${visibleItems.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-primary">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-accent min-w-[24px]" />
                                ) : (
                                    <ChevronDown className="text-slate-400 min-w-[24px]" />
                                )}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h3 className="text-xl font-bold text-primary mb-2">Still have questions? 🤔</h3>
                    <p className="text-slate-600 mb-6">
                        We're here to help! Reach out to us for a free consultation and let's discuss your project.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                    >
                        Contact us below
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
