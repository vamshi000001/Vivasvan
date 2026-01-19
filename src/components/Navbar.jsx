import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Our Team', to: 'contact' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer z-50">
                        <Link to="home" smooth={true} duration={500}>
                            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="text-slate-600 hover:text-primary font-medium cursor-pointer transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-50">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:hidden z-[90] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl text-slate-800 font-medium cursor-pointer"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                >
                    Contact
                </Link>
            </div>
        </>
    );
};

export default Navbar;
