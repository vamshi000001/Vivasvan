// Comprehensive knowledge base about Vivasvan team for AI chatbot
export const vivasvanKnowledge = {
    teamInfo: {
        name: "Vivasvan",
        description: "A collective of passionate developers delivering high-quality software solutions. From enterprise-grade backends to interactive frontends and AI integration.",
        tagline: "Building Digital Experiences",
        status: "Open to work & Collaboration",
        expertise: "Full Stack Developers specializing in Java, Spring Boot, React, and Modern Web Technologies. We solve complex problems with clean, efficient code."
    },

    services: [
        "Full Stack Web Development",
        "Enterprise Backend Systems",
        "Interactive Frontend Experiences",
        "AI & Machine Learning Integration",
        "Mobile App Development",
        "Cloud Deployment & DevOps"
    ],

    teamMembers: [
        {
            name: "Vamshi Pothraveni",
            role: "Founder & Java Full Stack Developer",
            description: "Specializing in robust backend systems with Java and Spring Boot. Focused on scalable architecture and efficient API design.",
            skills: ["Java", "Spring Boot", "Microservices"],
            linkedin: "https://www.linkedin.com/in/vamshi-potharaveni-120175271/",
            email: "vamshipotharaveni123@gmail.com"
        },
        {
            name: "Ramu Atika",
            role: "Team Lead & MERN Stack Developer",
            description: "Expert in building full-stack web applications using MongoDB, Express, React, and Node.js. Passionate about responsive UI and performance.",
            skills: ["React", "Node.js", "MongoDB"],
            linkedin: "https://www.linkedin.com/in/atikaramu/",
            email: "ramuatika@gmail.com"
        },
        {
            name: "Bharath Thangellapalli",
            role: "Python & AI Developer",
            description: "Leveraging Python and AI technologies to build intelligent solutions. Experienced in data processing and machine learning integration.",
            skills: ["Python", "AI/ML", "Data Science"],
            linkedin: "https://www.linkedin.com/in/bharathchary-dev/",
            email: "bharaththangellapalli@gmail.com"
        },
        {
            name: "Rajesh Nimmala",
            role: "MERN Stack Developer",
            description: "Experienced developer passionate about building scalable solutions and clean code architecture.",
            skills: ["React", "Node.js", "MongoDB"],
            linkedin: "https://www.linkedin.com/in/rajesh-nimmala-b90916337",
            email: "rajeshnimmala26@gmail.com"
        }
    ],

    pricing: [
        {
            title: "Static & Portfolio Websites",
            price: "Based on Requirements",
            description: "Perfect for personal portfolios, landing pages, and small business websites.",
            features: ["Responsive Design", "SEO Optimization", "Contact Form Integration", "Fast Loading Speed", "1 Month Support"]
        },
        {
            title: "Dynamic Web Applications",
            price: "Based on Complexity",
            description: "Robust solutions for businesses needing user accounts, databases, and complex logic.",
            features: ["Full-Stack Development", "Database Integration", "User Authentication", "Admin Dashboard", "3 Months Support"],
            recommended: true
        },
        {
            title: "Mobile App Development",
            price: "Custom Quote",
            description: "Native or cross-platform mobile applications tailored to your specific needs.",
            features: ["iOS & Android Support", "Push Notifications", "Offline Capabilities", "API Integration", "App Store Submission"]
        }
    ],

    paymentProcess: [
        { step: "01", title: "Initial Consultation", desc: "We discuss your requirements and finalize the scope." },
        { step: "02", title: "Upfront Payment", desc: "Pay just 30% to secure your slot and kickstart the project." },
        { step: "03", title: "Development", desc: "Regular updates and reviews as we build your solution." },
        { step: "04", title: "Final Delivery", desc: "Pay the remaining balance and launch your project." }
    ],

    projects: [
        {
            title: "Lost & Found",
            category: "Community Service",
            description: "The world's most advanced community-driven platform for reporting lost items and returning found ones. Features a sleek mobile-first UI with intuitive search and reporting flows.",
            technologies: ["React", "Tailwind CSS", "Vercel"],
            liveUrl: "https://lost-and-found-pink.vercel.app/",
            githubUrl: "https://github.com/ramu-varma/lost-and-found",
            featured: true,
            highlights: [
                "Community-driven platform",
                "Mobile-first design",
                "Intuitive search and reporting"
            ]
        },
        {
            title: "Bill Splitter",
            category: "Finance Utility",
            description: "The smartest way to split rent, utilities, and groceries. Eliminates awkward math with instant, accurate splitting for roommates and groups. Includes room management.",
            technologies: ["React", "Netlify", "JavaScript"],
            liveUrl: "https://billssplitterr.netlify.app/",
            githubUrl: "https://github.com/vamshi000001/billsplitter",
            featured: true,
            highlights: [
                "Smart expense splitting",
                "Room management",
                "Instant calculations"
            ]
        },
        {
            title: "Job Portal",
            category: "Recruitment Platform",
            description: "A comprehensive job board connecting developers with top opportunities. Features distinct portals for job seekers and employers with real-time application tracking.",
            technologies: ["MERN Stack", "Redux", "JWT"],
            liveUrl: "https://skillup-silk.vercel.app/",
            featured: false,
            highlights: [
                "Dual portals (seekers & employers)",
                "Real-time tracking",
                "Full MERN stack implementation"
            ]
        }
    ],

    technicalSkills: {
        frontend: {
            category: "Frontend Development",
            skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Material UI"]
        },
        backend: {
            category: "Backend Development",
            skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]
        },
        database: {
            category: "Database",
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"]
        },
        languages: {
            category: "Programming Languages",
            skills: ["JavaScript", "Java", "Python", "TypeScript"]
        },
        mobile: {
            category: "Mobile Development",
            skills: ["React Native", "Android Studio"]
        },
        tools: {
            category: "Tools & DevOps",
            skills: ["Git & GitHub", "Docker", "VS Code", "Postman", "Vercel", "Netlify"]
        }
    },

    achievements: [
        "Built production-ready applications serving real users",
        "Expertise across full stack development (Frontend, Backend, Database)",
        "Successfully deployed multiple projects on cloud platforms",
        "Strong focus on user experience and modern design principles",
        "Active collaboration and open to new opportunities"
    ],

    values: [
        "Clean, efficient code",
        "Scalable architecture",
        "User-centric design",
        "Continuous learning",
        "Quality software solutions"
    ]
};

// Generate a formatted context string for the AI
export const getFormattedKnowledge = () => {
    const kb = vivasvanKnowledge;

    return `
You are an AI assistant for the Vivasvan development team. Here is comprehensive information about the team:

TEAM OVERVIEW:
- Name: ${kb.teamInfo.name}
- Description: ${kb.teamInfo.description}
- Tagline: ${kb.teamInfo.tagline}
- Expertise: ${kb.teamInfo.expertise}
- Status: ${kb.teamInfo.status}

SERVICES OFFRED:
${kb.services.map(service => `- ${service}`).join('\n')}

PRICING PLANS:
${kb.pricing.map(plan => `
- ${plan.title}
  Price: ${plan.price}
  Description: ${plan.description}
  Features: ${plan.features.join(', ')}
  ${plan.recommended ? '(Recommended Plan)' : ''}
`).join('\n')}

PAYMENT PROCESS:
${kb.paymentProcess.map(step => `- Step ${step.step}: ${step.title} - ${step.desc}`).join('\n')}

TEAM MEMBERS:
${kb.teamMembers.map(member => `
- ${member.name} (${member.role})
  Description: ${member.description}
  Skills: ${member.skills.join(', ')}
  LinkedIn: ${member.linkedin}
  Email: ${member.email}
`).join('\n')}

PROJECTS:
${kb.projects.map(project => `
- ${project.title} (${project.category})
  Description: ${project.description}
  Technologies: ${project.technologies.join(', ')}
  ${project.liveUrl ? `Live URL: ${project.liveUrl}` : ''}
  ${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}
  Highlights: ${project.highlights.join(', ')}
`).join('\n')}

TECHNICAL SKILLS:
${Object.values(kb.technicalSkills).map(category => `
- ${category.category}: ${category.skills.join(', ')}
`).join('\n')}

ACHIEVEMENTS:
${kb.achievements.map(achievement => `- ${achievement}`).join('\n')}

CORE VALUES:
${kb.values.map(value => `- ${value}`).join('\n')}

IMPORTANT INSTRUCTIONS:
1. Only answer questions related to Vivasvan team, projects, services, pricing, skills, or team members.
2. If a question is NOT related to Vivasvan, respond EXACTLY with: "This question is not related to Vivasvan. Thank you! - Vivasvan Team"
3. Be friendly, professional, enthusiastic, and informative.
4. When asked about pricing, mention the flexible options and the simple 30% upfront payment process.
5. Provide specific details when asked about team members, projects, or skills.
6. If asked about contact information, provide the relevant LinkedIn or email.
7. Keep responses concise but comprehensive.
`;
};
