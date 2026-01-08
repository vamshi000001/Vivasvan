import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="container mx-auto px-6 md:px-12 text-center">

                {/* Animated Badge */}
                <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full animate-fade-in">
                    <span className="text-secondary font-medium text-sm">Open to work & Collaboration</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Building Digital <span className="text-accent">Experiences</span>
                </h1>

                {/* Sub-headline */}
                <h2 className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Full Stack Developers specializing in Java, Spring Boot, React, and Modern Web Technologies.
                    We solve complex problems with clean, efficient code.
                </h2>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl cursor-pointer w-full md:w-auto"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3.5 bg-white text-primary border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md cursor-pointer w-full md:w-auto"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Stats/Tech Pill */}
                <div className="mt-16 flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    {['React', 'Spring Boot', 'Java', 'Tailwind', 'Node.js'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-white rounded-lg shadow-sm text-slate-500 text-sm font-medium border border-slate-100">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
