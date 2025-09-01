import { ProjectCard } from "@/components";
import { Project } from "@/data/projects";

type ProjectGalleryProps = {
  projectList: Project[]
}

export default function ProjectGallery({ projectList }: ProjectGalleryProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 place-items-center">
      {projectList.map((project, idx) => (
        <ProjectCard
          key={idx}
          slug={project.slug}
          title={project.title}
          description={project.description}
          types={project.types}
          variant={idx % 2 === 0 ? "A" : "B"}
        />
      ))}
    </div>
  )
}