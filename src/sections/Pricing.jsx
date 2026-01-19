import React from 'react';
import { Link } from 'react-scroll';
import { Monitor, Smartphone, Globe, CheckCircle } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            title: 'Static & Portfolio Websites',
            icon: <Globe size={40} className="text-primary" />,
            price: 'Based on Requirements',
            description: 'Perfect for personal portfolios, landing pages, and small business websites.',
            features: [
                'Responsive Design',
                'SEO Optimization',
                'Contact Form Integration',
                'Fast Loading Speed',
                '1 Month Support'
            ],
            recommended: false
        },
        {
            title: 'Dynamic Web Applications',
            icon: <Monitor size={40} className="text-accent" />,
            price: 'Based on Complexity',
            description: 'Robust solutions for businesses needing user accounts, databases, and complex logic.',
            features: [
                'Full-Stack Development',
                'Database Integration',
                'User Authentication',
                'Admin Dashboard',
                '3 Months Support'
            ],
            recommended: true
        },
        {
            title: 'Mobile App Development',
            icon: <Smartphone size={40} className="text-primary" />,
            price: 'Custom Quote',
            description: 'Native or cross-platform mobile applications tailored to your specific needs.',
            features: [
                'iOS & Android Support',
                'Push Notifications',
                'Offline Capabilities',
                'API Integration',
                'App Store Submission'
            ],
            recommended: false
        }
    ];

    return (
        <section id="pricing" className="section-padding bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Pricing</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Transparent pricing tailored to your specific project needs. We deliver value at every scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white p-8 rounded-2xl border ${plan.recommended ? 'border-accent shadow-xl scale-105 z-10' : 'border-slate-100 shadow-lg'} hover:shadow-2xl transition-all duration-300 flex flex-col`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 flex justify-center">
                                <div className="p-4 bg-slate-50 rounded-full">
                                    {plan.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-center text-primary mb-2">{plan.title}</h3>
                            <div className="text-center mb-6">
                                <span className="text-xl font-bold text-slate-800">{plan.price}</span>
                            </div>

                            <p className="text-slate-600 text-center mb-8 text-sm leading-relaxed">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                                        <CheckCircle size={16} className="text-accent flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className={`w-full py-3 rounded-full font-bold transition-all duration-300 block text-center cursor-pointer ${plan.recommended ? 'bg-accent text-white hover:bg-opacity-90 shadow-md hover:shadow-lg' : 'bg-slate-100 text-primary hover:bg-slate-200'}`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Payment Process Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Simple Payment Process</h3>
                        <p className="text-slate-600">Secure and transparent milestones to get your project moving.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Initial Consultation", desc: "We discuss your requirements and finalize the scope." },
                            { step: "02", title: "Upfront Payment", desc: "Pay just 30% to secure your slot and kickstart the project.", highlight: true },
                            { step: "03", title: "Development", desc: "Regular updates and reviews as we build your solution." },
                            { step: "04", title: "Final Delivery", desc: "Pay the remaining balance and launch your project." }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-6 rounded-xl border ${item.highlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'} shadow-sm text-center relative`}>
                                <div className="text-4xl font-black text-slate-100 absolute top-2 right-4 z-0 pointer-events-none">{item.step}</div>
                                <h4 className="text-lg font-bold text-primary mb-2 relative z-10">{item.title}</h4>
                                <p className="text-slate-600 text-sm relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
