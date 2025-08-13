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
        <div className='container mx-auto px-4 pt-32 pb-16' id="experience">
            <div className='flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-40'>
                <div className="w-full lg:w-1/2">
                    <h2 id="experience" className="mx-auto pt-2 text-xl font-bold dark:text-white md:pt-2 md:text-4xl">
                        Experience
                    </h2>
                    <div className="relative mx-auto max-w-2xl pb-16 pt-4 text-white antialiased ">
                        {experienceData.map((item, index) => (
                            <ExperienceItem
                                key={index}
                                title={item.title}
                                duration={item.duration}
                                company={item.company}
                                location={item.location}
                                responsibilities={item.responsibilities}
                            />
                        ))}
                    </div>
                </div>
                <div className=' hidden lg:flex flex-col w-full lg:w-1/2  items-start gap-2'>
                    <h2 id="cover-letter" className="mx-auto pt-2 text-xl font-bold dark:text-white md:pt-2 md:text-4xl mb-6">
                        Cover Letter
                    </h2>
                    <p className='prose prose-sm dark:prose-invert mt-2 text-md lg:text-[18px] dark:text-white'>
                        Hi! I’m Akap Azmon a full-stack software developer based in Ottawa, with a passion for building clean, scalable systems that make real-world impact.

                        I’ve spent the last few years crafting Android apps, backend APIs, and cloud-ready platforms using tools like Java, Kotlin, Spring Boot, and Firebase. 
                        I’ve built telemedicine systems, e-commerce sites, LMS platforms—you name it. And whether I’m debugging an Android service or deploying a microservice, 
                        I love solving problems that help people.<br/><br></br>

                        I’m also a former computer science instructor and a certified Kubernetes Associate so I enjoy mentoring as much as I enjoy coding. Collaboration, 
                        clean architecture, and learning from others are at the heart of how I work. <br/><br></br>

                        I’m actively looking for remote software development roles where I can build great things with great teams.<br/><br></br>

                        Thanks for visiting—and feel free to explore my projects or get in touch. Let’s build something that matters.

                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full'>
                        <button
                            type="button"
                            className="flex items-center text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 border-2 border-black rounded-full self-start hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
                        >
                            Download CV
                            <span className="ml-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                                &rarr;
                            </span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 border-2 border-black rounded-full self-start hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
                        >
                            Check My Portfolio
                            <span className="ml-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
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
