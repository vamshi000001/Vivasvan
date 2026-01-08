import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
    const form = useRef(null);
    const [status, setStatus] = useState(""); // sending | success | error

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
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss a collaboration?
                        Send me a message and I’ll respond within 24 hours.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
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
