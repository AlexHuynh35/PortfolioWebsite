"use client"

import Image from "next/image";
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
      <div className="absolute left-10 -top-20 w-80 z-10">
        <SectionTitle title="Skill Set" variant="B" proportion={2} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-30" />
      <div className="absolute inset-0 px-8">
        <div className="flex flex-col mt-25">
          <div className="flex justify-center gap-8 mb-12">
            {categories.map((cat) => (
              <div
                key={cat}
                className="relative w-20 h-20"
              >
                <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
                <div
                  onClick={() => setCurrentCategory(cat)}
                  className={`absolute inset-0 w-18 h-18 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition ${cat == currentCategory ? typeToColor[cat as keyof typeof typeToColor] : "bg-neutral-600 hover:bg-neutral-500"}`}
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
                <h3 className="font-bold text-lg md:text-xl font-orbitron text-black capitalize mb-2">{subType}</h3>
                <div className="flex justify-center gap-4">
                  {(toolList as Tool[]).map((tool) => (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedTool(tool)}
                      className="relative w-12 h-12"
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
        <div className="absolute right-10 -bottom-10 w-80 h-80">
          <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
          <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] flex justify-center items-center text-center -z-10">
            <h2 className={`font-bold font-orbitron text-black text-4xl p-8 ${selectedTool && "hidden"}`}>Select A Tool For More Detail</h2>
          </div>
        </div>
      </div>
    </div>
  );
}