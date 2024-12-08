import React from "react"
import ProjectCard from "./ProjectCard"
import { IProject } from "../../types/project.type"

interface ProjectListProps {
  projects: IProject[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
