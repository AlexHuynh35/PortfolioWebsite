import { ProjectGallery, SectionTitle } from "@/components";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <section className="p-6">
      <SectionTitle title="Project Dex" variant="B" proportion={1} />

      <ProjectGallery projectList={projects} />
    </section>
  );
}
