import React from 'react';

interface ExperienceItemProps {
    title: string;
    duration: string;
    location?: string;
    company?: string;
    responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, duration, location, company, responsibilities }) => {
    return (
        <div className="mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <div className="mb-1 md:mb-0">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                        {company} {location && <span className="text-neutral-600 dark:text-neutral-400">| {location}</span>}
                    </h3>
                </div>
                <div className="text-sm italic text-neutral-800 dark:text-neutral-200">
                    <span className="font-medium">{title}</span>
                    <span className="ml-1">| {duration}</span>
                </div>
            </div>
            <div className="prose prose-sm dark:prose-invert mt-2 text-sm lg:text-[15px] text-black dark:text-white">
                <ul className="list-disc pl-5">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="mb-1 last:mb-0">{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceItem;