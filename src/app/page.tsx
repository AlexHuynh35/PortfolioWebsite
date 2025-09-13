"use client"

import Image from "next/image";
import { useState, useMemo } from "react";
import { Sidebar, ProjectGallery, SectionTitle } from "@/components";
import { projects } from "@/data/projects";

type SortMode = "alphabetical" | "recent";

const typeToColor = {
  data: "bg-emerald-500 hover:bg-emerald-400",
  software: "bg-indigo-500 hover:bg-indigo-400",
  game: "bg-rose-500 hover:bg-rose-400",
};

const typeToImage = {
  data: "/svgs/data.svg",
  software: "/svgs/software.svg",
  game: "/svgs/game.svg",
};

export default function Home() {
  const [sortMode, setSortMode] = useState<SortMode>("recent");

  const sortedProjects = useMemo(() => {
    const projectsCopy = [...projects];
    if (sortMode === "alphabetical") {
      return projectsCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      return projectsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }, [projects, sortMode]);

  const toggleSort = () => {
    setSortMode((prev) => (prev === "alphabetical" ? "recent" : "alphabetical"));
  };

  const [filters, setFilters] = useState({
    data: true,
    software: true,
    game: true,
  });

  const toggleFilter = (type: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredProjects = sortedProjects.filter((project) =>
    project.types.some((t) => filters[t as keyof typeof filters])
  );

  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />
      <div className="max-w-5xl mx-auto">

        <SectionTitle title="Project Dex" variant="B" proportion={1} type="main" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 my-15">
          <div className="relative w-4/5 h-20">
            <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)] -z-10`} />
            <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)] flex flex-row items-center justify-center px-12`}>
              <Image
                src="/svgs/search.svg"
                alt="search"
                width={24}
                height={24}
                className={`object-contain`}
              />
              <input
                type="text"
                placeholder="Search Skills..."
                className="flex-1 h-18 px-4 py-2 text-xl text-black font-rajdhani border-0 focus:ring-0 focus:outline-none placeholder-slate-500"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {Object.keys(filters).map((type) => (
              <div
                key={type}
                className="relative w-20 h-20"
              >
                <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
                <div
                  onClick={() => toggleFilter(type as keyof typeof filters)}
                  className={`absolute inset-0 w-18 h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition ${filters[type as keyof typeof filters] ? typeToColor[type as keyof typeof filters] : "bg-neutral-600 hover:bg-neutral-500"}`}
                >
                  <Image
                    src={typeToImage[type as keyof typeof filters]}
                    alt={type}
                    fill
                    className={`object-contain p-3`}
                  />
                </div>
              </div>
            ))}
            <div
              className="relative w-20 h-20"
            >
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div
                onClick={() => toggleSort()}
                className={`absolute inset-0 w-18 h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition bg-cyan-500 hover:bg-cyan-400`}
              >
                <Image
                  src={sortMode == "alphabetical" ? "/svgs/alphabet.svg" : "/svgs/recent.svg"}
                  alt="sort"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
          </div>
        </div>

        <ProjectGallery projectList={filteredProjects} />
      </div>
    </section>
  );
}
