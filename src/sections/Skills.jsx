import React from 'react';
import { Code2, Database, Layout, Server, Wrench, Smartphone } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="w-8 h-8 text-blue-500" />,
            skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Material UI"]
        },
        {
            title: "Backend Development",
            icon: <Server className="w-8 h-8 text-green-500" />,
            skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]
        },
        {
            title: "Database",
            icon: <Database className="w-8 h-8 text-purple-500" />,
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"]
        },
        {
            title: "Programming Languages",
            icon: <Code2 className="w-8 h-8 text-yellow-500" />,
            skills: ["JavaScript", "Java", "Python", "TypeScript"]
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="w-8 h-8 text-pink-500" />,
            skills: ["React Native", "Android Studio"]
        },
        {
            title: "Tools & DevOps",
            icon: <Wrench className="w-8 h-8 text-slate-500" />,
            skills: ["Git & GitHub", "Docker", "VS Code", "Postman", "Vercel", "Netlify"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Expertise</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A versatile set of skills honed through building real-world applications and continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
