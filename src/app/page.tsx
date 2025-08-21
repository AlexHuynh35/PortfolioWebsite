import { ProjectGallery } from "@/components";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <section className="p-6">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ProjectGallery projectList={projects} />
      </div>
    </section>
  );
}
