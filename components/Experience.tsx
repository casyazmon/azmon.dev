'use client';
import React from 'react';

const Experience = () => {
    // Data for experience entries
    const experienceData = [
        {
            company: "Freelance Software Engineer",
            duration: "Jan 2024 - Present",
            title: "Software Engineer",
            location: "Remote",
            responsibilities: [
                "Built responsive Android and web applications using Java, Kotlin, Jetpack Compose, React.js, and Next.js",
                "Created and consumed RESTful APIs; integrated Google Maps, Firebase Auth, AWS services",
            ],
            tech: ["Java", "Kotlin", "React.js", "Next.js", "Firebase", "AWS"]
        },
        {
            company: "Government Bilingual High School",
            duration: "Jan 2024 - Present",
            title: "Computer Science Instructor",
            location: "Baffoussam, Cameroon",
            responsibilities: [
                "Designed and taught programming fundamentals using C, C++, Java, and SQL",
                "Supervised student-led software projects simulating professional SDLC workflows",
            ],
            tech: ["C", "C++", "Java", "SQL"]
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

