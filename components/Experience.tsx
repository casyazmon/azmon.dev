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
            ],
        },

    ];

    return (
        <section className='container mx-auto px-6 py-24' id="experience">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>
                {/* About Me Section - now taking one column on large screens */}
                <div className='lg:col-span-1 flex flex-col items-start'>
                    <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-8 tracking-tight">
                        About Me
                    </h2>
                    <div className='prose prose-stone dark:prose-invert text-lg font-light leading-relaxed text-stone-600 dark:text-stone-400 mb-10'>
                        <p>
                            Hi! I&apos;m Akap Azmon, an Ottawa-based full-stack software developer passionate about
                            building clean, scalable systems with real-world impact. With extensive experience
                            crafting Android apps, backend APIs, and cloud-ready platforms using Java, Kotlin,
                            Spring Boot, and Firebase, I&apos;ve delivered solutions for telemedicine, e-commerce,
                            and LMS platforms. As a former computer science instructor and certified Kubernetes
                            Associate, I value collaboration, clean architecture, and continuous learning,
                            and I&apos;m actively seeking remote software development roles to build great
                            things with great teams.
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 w-full'>
                        <button
                            type="button"
                            className="group flex items-center justify-center text-base font-medium px-8 py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-700 dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                            Download CV
                            <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                &rarr;
                            </span>
                        </button>
                        {/* <button
                            type="button"
                            className="group flex items-center justify-center text-base font-medium px-8 py-3 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 w-full sm:w-auto"
                        >
                            Check My Portfolio
                            <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                &rarr;
                            </span>
                        </button> */}
                    </div>
                </div>

                {/* Experience Section - now taking two columns on large screens */}
                <div className='lg:col-span-2'>
                    <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-12 tracking-tight">
                        Experience
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experienceData.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <ExperienceItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
