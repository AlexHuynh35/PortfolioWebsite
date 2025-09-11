"use client"

import Link from "next/link";
import { SectionTitle } from "@/components";

type ProjectTasksProps = {
  contributions: string[];
};

export default function ProjectTasks({ contributions }: ProjectTasksProps) {
  return (
    <div className="relative max-w-6xl mx-auto h-150 my-30">
      <div className="absolute right-10 -top-30 w-80 z-10">
        <SectionTitle title="Tasks & Contributions" variant="B" proportion={2} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_5%,100%_95%,0%_100%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_0,100%_5%,100%_95%,0%_100%)] -z-30" />
      <div className="absolute inset-0 text-black flex justify-left items-center px-8">
        <ul className="list-none list-inside">
          {contributions.map((contribution, index) => (
            <li key={index} className="text-3xl">
              <span className="mr-2">★</span>
              <span className="font-bold">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}