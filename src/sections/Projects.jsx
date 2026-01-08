import React from 'react';
import { Github, ExternalLink, Code2, Layers, Database } from 'lucide-react';
import billSplitterImg from '../assets/bill-splitter.jpg';
import lostAndFoundImg from '../assets/lost-and-found.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'Lost & Found',
            category: 'Community Service',
            description: 'The world\'s most advanced community-driven platform for reporting lost items and returning found ones. Features a sleek mobile-first UI with intuitive search and reporting flows.',
            tech: ['React', 'Tailwind CSS', 'Vercel'],
            live: 'https://lost-and-found-pink.vercel.app/',
            github: '#', // Repository link not provided
            image: lostAndFoundImg,
            featured: true
        },
        {
            title: 'Bill Splitter',
            category: 'Finance Utility',
            description: 'The smartest way to split rent, utilities, and groceries. Eliminates awkward math with instant, accurate splitting for roommates and groups. Includes room management.',
            tech: ['React', 'Netlify', 'JavaScript'],
            live: 'https://billssplitterr.netlify.app/',
            github: 'https://github.com/vamshi000001/billsplitter',
            image: billSplitterImg,
            featured: true
        },
        {
            title: 'Job Portal',
            category: 'Recruitment Platform',
            description: 'A comprehensive job board connecting developers with top opportunities. Features distinct portals for job seekers and employers with real-time application tracking.',
            tech: ['MERN Stack', 'Redux', 'JWT'],
            live: '#',
            github: '#',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60', // Placeholder
            featured: false
        }
    ];

    return (
        <section id="projects" className="section-padding bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Showcasing our best work. Real-world applications solving real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        <ExternalLink size={16} /> View Details
                                    </span>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm z-20">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-slate-50 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-slate-50 text-slate-600 rounded-full hover:bg-accent hover:text-white transition-colors"
                                            title="View Live App"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
