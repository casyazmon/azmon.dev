import React from 'react'

// Interface matching the props passed from Projects.tsx
interface ProjectCardProps {
  project: {
    title: string;
    image?: string;
    description: string;
    stack: string;
    link: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <><div className="relative h-60 overflow-hidden">
      <img
        src={project.image ?? "/images/default.png"}
        width={400}
        height={400}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
    </div><div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-3">{project.title}</h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 flex-grow leading-relaxed">{project.description}</p>
        <div className="text-xs font-medium text-stone-500 dark:text-stone-500 mb-4 uppercase tracking-wide">{project.stack}</div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 text-sm font-medium inline-flex items-center gap-2 mt-auto"
        >
          View on GitHub
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </div></>
  )
}

export default ProjectCard