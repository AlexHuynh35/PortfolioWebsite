"use client"

import Image from "next/image";
import { SectionTitle } from "@/components";

type ProjectTasksProps = {
  contributions: string[];
  tools: [string, string][];
};

export default function ProjectTasks({ contributions, tools }: ProjectTasksProps) {
  return (
    <div className="relative max-w-6xl mx-auto h-200 mt-30 mb-15">
      <div className="absolute left-10 -top-20 w-80 z-10">
        <SectionTitle title="Tasks" variant="A" proportion={2} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_5%,100%_0,100%_80%,0%_75%)] -z-30" />
      <div className="absolute inset-0 text-black flex justify-left px-8">
        <ul className="list-none list-inside mt-30">
          {contributions.map((contribution, index) => (
            <li key={index} className="text-xl md:text-3xl">
              <span className="mr-2">★</span>
              <span className="font-bold">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute hidden md:block right-10 bottom-0 w-128 h-64">
        <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,90%_100%,0_100%)] flex justify-center -z-10">
          <h2 className="font-bold font-orbitron text-black text-3xl pt-8">Tools</h2>
        </div>
        <div className="absolute inset-0 text-black flex flex-row flex-wrap justify-center content-center gap-4 px-8 mt-15">
          {tools.map(([name, url], index) => (
            <div key={index} className="relative text-xl font-rajdhani w-15 h-15">
              <Image
                src={url}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute md:hidden right-10 -bottom-15 w-64 h-128">
        <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_90%,80%_100%,0_100%)] flex justify-center -z-10">
          <h2 className="font-bold font-orbitron text-black text-3xl pt-8">Tools</h2>
        </div>
        <div className="absolute inset-0 text-black flex flex-col flex-wrap justify-center content-center gap-4 px-8 mt-15">
          {tools.map(([name, url], index) => (
            <div key={index} className="relative text-xl font-rajdhani w-15 h-15">
              <Image
                src={url}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}