"use client"

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components";

type ProjectType = 'software' | 'game' | 'data';

type ProjectDescriptionProps = {
  description: string;
  collaborators: string[];
  tools: string[];
};

export default function ProjectDescription({ description, collaborators, tools }: ProjectDescriptionProps) {
  const [activeBox, setActiveBox] = useState<0 | 1>(0);

  return (
    <div className="relative max-w-6xl mx-auto h-150 my-15">
      <div className="absolute right-10 -top-20 w-64 h-16">
        <SectionTitle title="Description" variant="B" proportion={3} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_5%,100%_75%,0%_80%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 flex justify-center px-8 [clip-path:polygon(0_0,100%_5%,100%_75%,0%_80%)] -z-30">
        <h2 className={`text-xl text-black font-rajdhani mt-20`}>
          {description}
        </h2>
      </div>
      <div className="absolute hidden md:block right-90 -bottom-10 w-64 h-64">
        <div className="absolute inset-0 -m-[10px] bg-gold [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-parchment [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] -z-10 flex items-center justify-center px-8">
          Content 1
        </div>
      </div>
      <div className="absolute hidden md:block right-10 -bottom-10 w-64 h-64">
        <div className="absolute inset-0 -m-[10px] bg-gold [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-parchment [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] -z-10 flex items-center justify-center px-8">
          Content 2
        </div>
      </div>
      <div className="absolute md:hidden right-10 -bottom-10 w-64 h-64">
        <div className="absolute inset-0 -m-[10px] bg-gold [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-parchment [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] -z-10 flex items-center justify-center px-8">
          {activeBox === 0 ? "Content 1" : "Content 2"}
        </div>
        <div
          onClick={() => setActiveBox(activeBox === 0 ? 1 : 0)}
          className="absolute right-0 bottom-0 w-8 h-8"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            fill
            className="object-contain transform scale-y-[-1] -rotate-25 filter grayscale brightness-100 opacity-70"
          />
        </div>
      </div>
    </div>
  )
}