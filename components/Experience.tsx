'use client';
import React from 'react';

const Experience = () => {
    // Data for experience entries
    const experienceData = [
        {
            company: "Freelance Developer",
            duration: "Mar 2024 - Present",
            title: "Software Developer",
            location: "Remote, Canada",
            responsibilities: [
                "Designed and deployed scalable Java microservices with Spring Boot, improving system throughput by 30%",
                "Built and integrated RESTful APIs with AWS services, reducing request latency by 25%",
                "Conducted code reviews and mentored junior developers, contributing to sub-100ms API response times for critical workflows",
                "Actively participated in Agile Scrum ceremonies, contributing to sprint planning and backlog refinement",
            ],
            tech: ["Java", "Spring Boot", "AWS", "REST APIs", "Microservices", "Agile/Scrum"]
        },
        {
            company: "WeCodeDesigns",
            duration: "Apr 2020 - Feb 2024",
            title: "Web Developer",
            location: "Bafoussam, Cameroon",
            responsibilities: [
                "Developed and maintained web platforms using Next.js, WordPress, and LMS tools, supporting e-learning use cases",
                "Implemented server-side rendering and image optimization, improving initial load time by 60% and reducing bounce rate by 25%",
                "Integrated third-party services including payment gateways, CRMs, and analytics tools",
                "Collaborated closely with stakeholders to gather requirements and deliver features on schedule",
            ],
            tech: ["Next.js", "WordPress", "React", "LMS", "Payment Integration", "Analytics"]
        },
        {
            company: "Afkanerd Technologies",
            duration: "Jan 2017 - Feb 2019",
            title: "Full-Stack Developer",
            location: "Bamenda, Cameroon",
            responsibilities: [
                "Built a telemedicine platform using React, Spring Boot, and PostgreSQL, serving 2,000+ users with real-time video and chat",
                "Designed REST APIs and applied Redis caching, reducing latency by 35%",
                "Containerized and deployed services to AWS ECS/EKS, improving deployment speed by 50%",
            ],
            tech: ["React", "Spring Boot", "PostgreSQL", "Redis", "AWS ECS/EKS", "Docker", "REST APIs"]
        },
    ];

    return (
        <section className='container mx-auto px-6 py-24 bg-background' id="experience">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight font-mono">
                <span className="text-secondary">$</span> cat experience.log
            </h2>
            <p className="text-secondary mb-16 font-mono text-sm">
              // Professional journey and contributions
            </p>

            {/* Timeline */}
            <div className="max-w-4xl space-y-12">
                {experienceData.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-border">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background" />

                        {/* Date */}
                        <div className="font-mono text-sm text-secondary mb-2">
                            {item.duration}
                        </div>

                        {/* Role and company */}
                        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">
                            {item.title}
                        </h3>
                        <div className="text-secondary mb-4">
                            {item.company} • {item.location}
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2 mb-4 text-secondary">
                            {item.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5">›</span>
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-surface border border-border text-xs font-mono text-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-16">
                <button
                    type="button"
                    className="group font-medium px-8 py-4 bg-foreground text-background hover:bg-accent transition-all duration-300 border border-foreground hover:border-accent font-mono text-sm md:text-base inline-flex items-center gap-2"
                    onClick={() => window.open('/akap azmon.pdf', '_blank')}
                >
                    <span>$ download_cv</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
            </div>
        </section>
    );
};

export default Experience;

