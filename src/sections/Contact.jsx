import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Linkedin, Mail } from "lucide-react";
import vamshiImg from '../assets/vamshi-updated.jpg';
import ramuImg from '../assets/ramu.jpg';
import bharathImg from '../assets/bharath.jpg';
import rajeshImg from '../assets/rajesh.jpg';

const Contact = () => {
    const form = useRef(null);
    const [status, setStatus] = useState(""); // sending | success | error

    const founder = {
        name: 'Vamshi Pothraveni',
        role: 'Founder & Java Full Stack Developer',
        image: vamshiImg,
        description: 'Specializing in robust backend systems with Java and Spring Boot. Focused on scalable architecture and efficient API design.',
        skills: ['Java', 'Spring Boot', 'Microservices'],
        linkedin: 'https://www.linkedin.com/in/vamshi-potharaveni-120175271/',
        email: 'mailto:vamshipotharaveni123@gmail.com'
    };

    const team = [
        {
            name: 'Ramu Atika',
            role: 'Team Lead & MERN Stack Developer',
            image: ramuImg,
            description: 'Expert in building full-stack web applications using MongoDB, Express, React, and Node.js. Passionate about responsive UI and performance.',
            skills: ['React', 'Node.js', 'MongoDB'],
            linkedin: 'https://www.linkedin.com/in/atikaramu/',
            email: 'mailto:ramuatika@gmail.com'
        },
        {
            name: 'Bharath Thangellapalli',
            role: 'Python & AI Developer',
            image: bharathImg,
            description: 'Leveraging Python and AI technologies to build intelligent solutions. Experienced in data processing and machine learning integration.',
            skills: ['Python', 'AI/ML', 'Data Science'],
            linkedin: 'https://www.linkedin.com/in/bharathchary-dev/',
            email: 'mailto:bharaththangellapalli@gmail.com'
        },
        {
            name: 'Rajesh Nimmala',
            role: 'MERN Stack Developer',
            image: rajeshImg,
            description: 'Experienced developer passionate about building scalable solutions and clean code architecture.',
            skills: ['React', 'Node.js', 'MongoDB'],
            linkedin: 'https://www.linkedin.com/in/rajesh-nimmala-b90916337',
            email: 'mailto:rajeshnimmala26@gmail.com'
        }
    ];

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // 1️⃣ Send message to YOU (ADMIN)
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // 2️⃣ Send auto-reply to USER
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="section-padding bg-slate-50">
            <div className="container mx-auto">
                {/* Team Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Our Team</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Meet the experts behind our innovative solutions.
                    </p>
                </div>

                {/* Founder Section */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6">FOUNDER</span>

                        <div className="mb-6 relative overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-slate-50 shadow-lg">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-3xl font-bold text-primary mb-2">{founder.name}</h3>
                        <p className="text-accent font-medium text-lg mb-4">{founder.role}</p>
                        <p className="text-slate-600 mb-6 text-base leading-relaxed max-w-lg mx-auto">
                            {founder.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {founder.skills.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-full text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href={founder.email} className="p-3 bg-slate-50 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-10 relative inline-block left-1/2 transform -translate-x-1/2">
                        <span className="relative z-10 bg-slate-50 px-4">Core Team</span>
                        <span className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-0"></span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 group text-center relative overflow-hidden">
                                {member.role.includes('Team Lead') && (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                )}

                                {member.role.includes('Team Lead') && (
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                                        TEAM LEAD
                                    </span>
                                )}

                                <div className={`mb-4 relative overflow-hidden rounded-full mx-auto border-4 border-slate-50 shadow-md ${member.role.includes('Team Lead') ? 'w-40 h-40' : 'w-28 h-28'}`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                    {member.description}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {member.skills.slice(0, 3).map((skill) => (
                                        <span key={skill} className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-xs rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-3 pt-4 border-t border-slate-100">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={member.email} className="text-slate-400 hover:text-red-500 transition-colors">
                                        <Mail size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss a collaboration?
                        Send me a message and I’ll respond within 24 hours.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label
                                className="block text-slate-700 font-medium mb-2"
                                htmlFor="from_name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                id="from_name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                className="block text-slate-700 font-medium mb-2"
                                htmlFor="from_email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                id="from_email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                className="block text-slate-700 font-medium mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sending..." : (
                                <>
                                    Send Message <Send size={20} />
                                </>
                            )}
                        </button>

                        {/* Success */}
                        {status === "success" && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                                <CheckCircle size={20} />
                                Message sent successfully. I’ll get back to you soon.
                            </div>
                        )}

                        {/* Error */}
                        {status === "error" && (
                            <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                                <AlertCircle size={20} />
                                Failed to send message. Please try again later.
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
