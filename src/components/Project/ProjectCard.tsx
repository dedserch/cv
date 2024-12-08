import React from "react"
import { IProject } from "../../types/project.type"

interface ProjectCardProps {
  project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-indigo-700">{project.name}</h3>
      <p className="text-gray-700">{project.description}</p>
      <p className="text-sm text-gray-500">{project.date}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:underline"
      >
        Link to GitHub
      </a>
      <div className="mt-2 flex flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm mr-2 mt-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
