import { Sidebar, ProjectGallery, SectionTitle } from "@/components";
import { projects } from "@/data/projects";

export default function About() {
  return (
    <section className="p-6">
      <Sidebar />

      <SectionTitle title="Project Dex" variant="B" proportion={1} />

      <ProjectGallery projectList={projects} />
    </section>
  );
}