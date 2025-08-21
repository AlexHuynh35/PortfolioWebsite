import { ProjectCard } from "@/components";
import { Project } from "@/data/projects";

type ProjectGalleryProps = {
  projectList: Project[]
}

export default function ProjectGallery({ projectList }: ProjectGalleryProps) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            types={project.types}
            variant={idx % 2 === 0 ? "A" : "B"}
          />
        ))}
      </div>
    </div>
  )
}