import { ProjectCard } from "@/components";

export default function Home() {
  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto text-center px-4 py-12">
        <ProjectCard
          title="Title"
          description="Description"
          types={["data", "software"]}
        />

        <ProjectCard
          title="Title"
          description="Description"
          types={["game"]}
        />
      </div>
    </section>
  );
}
