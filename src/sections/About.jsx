import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import vamshiImg from '../assets/vamshi.jpg';
import ramuImg from '../assets/ramu.jpg';
import bharathImg from '../assets/bharath.jpg';

const About = () => {
    const team = [
        {
            name: 'Vamshi Pothraveni',
            role: 'Java Developer',
            image: vamshiImg,
            description: 'Specializing in robust backend systems with Java and Spring Boot. Focused on scalable architecture and efficient API design.',
            skills: ['Java', 'Spring Boot', 'Microservices'],
            linkedin: 'https://www.linkedin.com/in/vamshi-potharaveni-120175271/',
            email: 'mailto:vamshipotharaveni123@gmail.com'
        },
        {
            name: 'Ramu Atika',
            role: 'MERN Stack Developer',
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
        }
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About The Team</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are a collective of passionate developers delivering high-quality software solutions.
                        From enterprise-grade backends to interactive frontends and AI integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="mb-6 relative overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-white shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                            <p className="text-accent font-medium mb-3">{member.role}</p>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                {member.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {member.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-white border border-slate-200 text-slate-500 text-xs rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-slate-200">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href={member.email} className="text-slate-400 hover:text-red-500 transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
