import React from 'react';

import ExperienceItem from './ExperienceItem';

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
                "Collaborated with UX designers to enhance usability and improve customer journeys",
                "Participated in daily agile ceremonies and used Jira, Git, and Bitbucket for project coordination",
            ],
        },
        {
            company: "Government Bilingual High School",
            duration: "Jan 2024 - Present",
            title: "Computer Science Instructor",
            location: "Baffoussam, Cameroon",
            responsibilities: [
                "Designed and taught programming fundamentals using C, C++, Java, and SQL",
                "Supervised student-led software projects simulating professional SDLC workflows",
                "Promoted concepts in data modeling, debugging, and agile collaboration practices",
                "Led extracurricular hackathons and coding clubs to reinforce technical foundations",
            ],
        },
        {
            company: "Afkanerd Technologies",
            duration: "Jan 2024 - Present",
            title: "Software Engineer",
            location: "Bamenda, Cameroon",
            responsibilities: [
                "Developed and maintained an Android app and Spring Boot backend for an e-commerce platform",
                "Built scalable APIs, performed unit and integration testing, and deployed features using CI/CD workflows",
                "Applied object-oriented design principles and collaborated with frontend developers to ensure UX alignment",
                "Developed full-stack enterprise applications using React, PostgreSQL, and Docker.",
                "Conducted code reviews, contributing to maintaining high standards of code quality and team collaboration.",
                "Provided mentorship to two IT college students, enhancing their practical software engineering skills.",
            ],
        },
    ];

    return (
        <div className='container mx-auto px-6 py-24' id="experience">
            <div className='flex flex-col lg:flex-row items-start justify-start gap-12 lg:gap-24'>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-12 tracking-tight">
                        Experience
                    </h2>
                    <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 pl-8 space-y-12">
                        {experienceData.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-300 bg-stone-50 dark:border-stone-600 dark:bg-stone-900" />
                                <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100">{item.title}</h3>
                                <div className="flex flex-wrap gap-2 text-sm text-stone-500 dark:text-stone-400 mt-1 mb-3">
                                    <span className="font-medium text-stone-700 dark:text-stone-300">{item.company}</span>
                                    <span>•</span>
                                    <span>{item.duration}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                                    {item.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='hidden lg:flex flex-col w-full lg:w-1/2 items-start sticky top-24'>
                    <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-8 tracking-tight">
                        About Me
                    </h2>
                    <div className='prose prose-stone dark:prose-invert text-lg font-light leading-relaxed text-stone-600 dark:text-stone-400'>
                        <p>
                            Hi! I’m Akap Azmon, a full-stack software developer based in Ottawa, with a passion for building clean, scalable systems that make a real-world impact.
                        </p>
                        <p>
                            I’ve spent the last few years crafting Android apps, backend APIs, and cloud-ready platforms using tools like Java, Kotlin, Spring Boot, and Firebase.
                            I’ve built telemedicine systems, e-commerce sites, LMS platforms—you name it. And whether I’m debugging an Android service or deploying a microservice,
                            I love solving problems that help people.
                        </p>
                        <p>
                            I’m also a former computer science instructor and a certified Kubernetes Associate, so I enjoy mentoring as much as I enjoy coding. Collaboration,
                            clean architecture, and learning from others are at the heart of how I work.
                        </p>
                        <p>
                            I’m actively looking for remote software development roles where I can build great things with great teams.
                        </p>
                        <p>
                            Thanks for visiting—and feel free to explore my projects or get in touch. Let’s build something that matters.
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 mt-10 w-full'>
                        <button
                            type="button"
                            className="group flex items-center justify-center text-base font-medium px-8 py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                            Download CV
                            <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                &rarr;
                            </span>
                        </button>
                        <button
                            type="button"
                            className="group flex items-center justify-center text-base font-medium px-8 py-3 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 w-full sm:w-auto"
                        >
                            Check My Portfolio
                            <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                &rarr;
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
