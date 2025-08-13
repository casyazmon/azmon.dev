import React from 'react'

interface ExperienceItemProps {
    title: string;
    duration: string;
    location?: string;
    company?: string;
    responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, duration, location, company, responsibilities }) => {
    return (
        <div className="mb-10 mt-4 md:mt-0">
            <h2 className="text-xl text-black dark:text-white">{company} | {location}</h2>
            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {title} | {duration}
            </span>
            <div className="prose prose-sm dark:prose-invert mt-2 text-sm lg:text-[15px] text-black dark:text-white">
                <ul className="list-disc">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceItem