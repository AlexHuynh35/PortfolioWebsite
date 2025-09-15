"use client"

import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";
import { Sidebar, ProjectGallery, SectionTitle } from "@/components";
import { projects, wipProjects } from "@/data/projects";
import { allTools } from "@/data/tools";

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
  // Sort Projects

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

  // Filter by Types

  const [filters, setFilters] = useState({
    software: true,
    data: true,
    game: true,
  });

  const toggleFilter = (type: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredProjects = sortedProjects.filter((project) =>
    project.types.some((t) => filters[t as keyof typeof filters])
  );

  const filteredWIPProjects = wipProjects.filter((project) =>
    project.types.some((t) => filters[t as keyof typeof filters])
  );

  // Filter by Tools

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const matches = allTools.filter((tool) =>
        tool.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      setQuery(suggestions[0]);
      setSelectedTool(suggestions[0]);
      setSuggestions([]);
    }
  };

  const handleSelect = (tool: string) => {
    setSelectedTool(tool);
    setQuery(tool);
    setSuggestions([]);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredByToolsProjects = selectedTool
    ? filteredProjects.filter((project) =>
      project.tools.some(
        ([name]) => name.toLowerCase() === selectedTool.toLowerCase()
      )
    )
    : filteredProjects;

  const filteredByToolsWIPProjects = selectedTool
    ? filteredWIPProjects.filter((project) =>
      project.tools.some(
        ([name]) => name.toLowerCase() === selectedTool.toLowerCase()
      )
    )
    : filteredWIPProjects;

  const clearFilter = () => {
    setQuery("");
    setSelectedTool(null);
    setSuggestions([]);
  };

  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />
      <div className="max-w-5xl mx-auto">

        <SectionTitle title="Project Dex" variant="B" proportion={1} type="main" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 my-15">
          <div ref={wrapperRef} className="relative w-4/5 h-20">
            <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)] -z-10`} />
            <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]`} />
            <div className="absolute inset-0 px-12 flex items-center z-20">
              <div className="flex flex-row w-full items-center">
                <Image
                  src="/svgs/search.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className={`object-contain`}
                />
                <form onSubmit={handleSubmit} className="flex-1">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={query}
                      onChange={handleChange}
                      placeholder="Tool..."
                      className="w-full text-xl text-black px-4 py-2 font-rajdhani border-0 focus:ring-0 focus:outline-none placeholder-slate-500"
                    />
                    {suggestions.length > 0 && (
                      <ul className="absolute left-0 right-0 top-full text-black bg-white/90 shadow-lg backdrop-blur-sm font-rajdhani z-10">
                        {suggestions.map((s, i) => (
                          <li
                            key={i}
                            onClick={() => handleSelect(s)}
                            className="px-4 py-2 hover:scale-105 hover:bg-slate-100 cursor-pointer"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </form>
                <Image
                  onClick={clearFilter}
                  src="/svgs/refresh.svg"
                  alt="refresh"
                  width={24}
                  height={24}
                  className={`object-contain hover:scale-105 cursor-pointer`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {Object.keys(filters).map((type) => (
              <div
                key={type}
                className="relative w-18 h-18 sm:w-20 sm:h-20"
              >
                <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
                <div
                  onClick={() => toggleFilter(type as keyof typeof filters)}
                  className={`absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition cursor-pointer ${filters[type as keyof typeof filters] ? typeToColor[type as keyof typeof filters] : "bg-neutral-600 hover:bg-neutral-500"}`}
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
              className="relative w-18 h-18 sm:w-20 sm:h-20"
            >
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div
                onClick={() => toggleSort()}
                className={`absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition cursor-pointer bg-cyan-500 hover:bg-cyan-400`}
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

        <ProjectGallery projectList={filteredByToolsProjects} />

        <div className="py-10" />

        <div className="relative w-4/5 mx-auto">
          <SectionTitle title="WIP Projects" variant="B" proportion={2} type="main" />
        </div>

        <ProjectGallery projectList={filteredByToolsWIPProjects} />
      </div>
    </section>
  );
}
