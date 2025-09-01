"use client"

import Image from "next/image";
import { useState } from "react";
import { Sidebar, ProjectGallery, SectionTitle } from "@/components";
import { projects } from "@/data/projects";

const typeToColor = {
  data: "bg-emerald-500 hover:bg-emerald-400",
  software: "bg-indigo-500 hover:bg-indigo-400",
  game: "bg-rose-500 hover:bg-rose-400",
};

const typeToImage = {
  data: "/data.png",
  software: "/software.png",
  game: "/game.png",
};

const typeToPadding = {
  data: "p-4",
  software: "p-4",
  game: "p-2",
};

export default function Home() {
  const [filters, setFilters] = useState({
    data: true,
    software: true,
    game: true,
  });

  const toggleFilter = (type: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredProjects = projects.filter((project) =>
    project.types.some((t) => filters[t as keyof typeof filters])
  );

  return (
    <section className="p-6">
      <Sidebar />

      <SectionTitle title="Project Dex" variant="B" proportion={1} />

      <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-4 my-10">
        {Object.keys(filters).map((type) => (
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
            <div
              key={type}
              onClick={() => toggleFilter(type as keyof typeof filters)}
              className={`absolute inset-0 w-18 h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition ${filters[type as keyof typeof filters] ? typeToColor[type as keyof typeof filters] : "bg-neutral-600 hover:bg-neutral-500"}`}
            >
              <Image
                src={typeToImage[type as keyof typeof filters]}
                alt={type}
                fill
                className={`object-contain ${typeToPadding[type as keyof typeof filters]}`}
              />
            </div>
          </div>
        ))}
      </div>

      <ProjectGallery projectList={filteredProjects} />
    </section>
  );
}
