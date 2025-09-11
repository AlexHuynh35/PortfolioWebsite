import { BottomBar, SectionTitle, ProjectDescription, ProjectTasks, MediaCarousel } from "@/components";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
    <section className="p-6">
      <SectionTitle title={project.title} variant="A" proportion={1} type={project.types[0]} />

      <ProjectDescription description={project.description} collaborators={project.collaborators} links={project.otherUrls} />

      <ProjectTasks contributions={project.contributions} tools={project.tools} />

      <MediaCarousel itchUrl={project.itchUrl} tableauUrl={project.tableauUrl} images={project.images} />

      <div className="py-20" />

      <BottomBar type={project.types[1] ? project.types[1] : project.types[0]} />
    </section>
  );
}