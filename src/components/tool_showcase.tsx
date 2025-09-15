"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionTitle } from "@/components";
import { softwareTools, dataTools, gameTools, Tool } from "@/data/tools";

const toolCategories = {
  software: softwareTools,
  data: dataTools,
  game: gameTools,
};

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

type Category = keyof typeof toolCategories;

export default function ToolShowcase() {
  const [currentCategory, setCurrentCategory] = useState<Category>("software");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const categories: Category[] = ["software", "data", "game"];

  const tools = toolCategories[currentCategory];

  return (
    <div className="relative max-w-5xl mx-auto h-160 my-30">
      <div className="absolute hidden md:block left-10 -top-20 w-80 z-10">
        <SectionTitle title="Skill Set" variant="A" proportion={2} type="main" />
      </div>
      <div className="absolute md:hidden left-1/2 -top-20 transform -translate-x-1/2 w-64 z-10">
        <SectionTitle title="Skill Set" variant="A" proportion={2} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-30" />
      <div className="absolute inset-0 px-8">
        <div className="flex flex-col mt-30">
          <div className="flex justify-center gap-8 mb-12">
            {categories.map((cat) => (
              <div
                key={cat}
                className="relative w-18 h-18 sm:w-20 sm:h-20"
              >
                <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
                <div
                  onClick={() => setCurrentCategory(cat)}
                  className={`absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition cursor-pointer ${cat == currentCategory ? typeToColor[cat as keyof typeof typeToColor] : "bg-neutral-600 hover:bg-neutral-500"}`}
                >
                  <Image
                    src={typeToImage[cat as keyof typeof typeToImage]}
                    alt={cat}
                    fill
                    className={`object-contain p-3`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-around text-center">
            {Object.entries(tools).map(([subType, toolList]) => (
              <div key={subType}>
                <h2 className="font-bold text-sm sm:text-md md:text-lg xl:text-xl font-orbitron text-black capitalize mb-2">{subType}</h2>
                <div className="flex justify-center gap-4">
                  {(toolList as Tool[]).map((tool) => (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedTool(tool)}
                      className="relative w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
                    >
                      <Image
                        src={tool.imageUrl}
                        alt={tool.name}
                        fill
                        className="object-contain hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-70 h-70">
          <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
          <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] flex justify-center items-center text-center -z-10">
            <h2 className={`font-bold font-orbitron text-black text-4xl p-8 ${selectedTool && "hidden"}`}>Select A Tool For More Detail</h2>
          </div>
          {selectedTool && (
            <div className="absolute inset-0 text-black flex flex-col justify-left gap-3 px-6">
              <div className="absolute -left-5 -bottom-2 w-35 h-12 z-10">
                <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] -z-20" />
                <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] flex justify-center items-center text-center -z-10">
                  <h2 className="font-bold text-md text-black font-orbitron">Proficiency</h2>
                </div>
              </div>
              <div className="absolute right-23 -bottom-4 w-12 h-12 z-10">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 -m-[10px] bg-orange-600 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
                  <div className="absolute inset-0 bg-orange-500 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
                </div>
              </div>
              <div className="absolute right-6 -bottom-7 w-12 h-12 z-10">
                <div className="relative w-full h-full">
                  <div className={`absolute inset-0 -m-[10px] ${selectedTool.proficiency != "beginner" ? "bg-orange-600" : "bg-neutral-700"} [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]`} />
                  <div className={`absolute inset-0 ${selectedTool.proficiency != "beginner" ? "bg-orange-500" : "bg-neutral-600"} [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]`} />
                </div>
              </div>
              <div className="absolute -right-7 bottom-3 w-12 h-12 z-10">
                <div className="relative w-full h-full">
                  <div className={`absolute inset-0 -m-[10px] ${selectedTool.proficiency == "expert" ? "bg-orange-600" : "bg-neutral-700"} [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]`} />
                  <div className={`absolute inset-0 ${selectedTool.proficiency == "expert" ? "bg-orange-500" : "bg-neutral-600"} [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]`} />
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-2">
                <div className="relative w-10 h-10">
                  <Image
                    src={selectedTool.imageUrl}
                    alt={selectedTool.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-orbitron font-bold">{selectedTool.name}</h2>
              </div>
              {selectedTool.subTools?.length > 0 && (
                <div>
                  <span className="font-semibold font-orbitron text-sm">Capabilities:</span>{" "}
                  <div className="font-rajdhani text-sm">{selectedTool.subTools.join(", ")}</div>
                </div>
              )}
              {selectedTool.projects?.length > 0 && (
                <div>
                  <span className="font-semibold font-orbitron text-sm">Projects:</span>{" "}
                  <ul className="list-disc list-inside">
                    {selectedTool.projects.map(([name, url], i) => (
                      <li key={i}>
                        <Link
                          href={url}
                          rel="noopener noreferrer"
                          className="font-rajdhani hover:underline text-sm"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}