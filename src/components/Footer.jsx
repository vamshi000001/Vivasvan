import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="home" smooth={true} duration={500} className="mb-4 cursor-pointer flex items-center gap-2">
                            <img src={logo} alt="Logo" className="bg-white rounded-full p-1 h-10 w-10 object-contain" />
                            <span className="text-2xl font-bold text-white tracking-tight">Vivasvan<span className="text-blue-400">Portfolio</span></span>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Crafting digital experiences with code and creativity.
                        </p>
                    </div>

                    {/* Connect */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={24} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:vamshipotharaveni123@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Vivasvan Technologies. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="contact" smooth={true} duration={500} className="hover:text-slate-300 cursor-pointer">
                            Contact
                        </Link>
                        <Link to="home" smooth={true} duration={500} className="hover:text-slate-300 cursor-pointer">
                            Back to Top
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
