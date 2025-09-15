"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionTitle } from "@/components";

type ProjectDescriptionProps = {
  description: string;
  collaborators: string[];
  links: [string, string][];
};

export default function ProjectDescription({ description, collaborators, links }: ProjectDescriptionProps) {
  const [activeBox, setActiveBox] = useState<0 | 1>(0);

  return (
    <div className="relative max-w-6xl mx-auto h-150 my-30">
      <div className="absolute hidden md:block right-10 -top-20 w-80 z-10">
        <SectionTitle title="Description" variant="B" proportion={2} type="main" />
      </div>
      <div className="absolute md:hidden left-1/2 -top-20 transform -translate-x-1/2 w-64 z-10">
        <SectionTitle title="Description" variant="B" proportion={2} type="main" />
      </div>
      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_5%,100%_75%,0%_80%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 flex justify-center px-8 [clip-path:polygon(0_0,100%_5%,100%_75%,0%_80%)] -z-30">
        <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-orbitron font-bold mt-30`}>
          {description}
        </h2>
      </div>
      <div className="absolute hidden md:block right-10 bottom-0 w-64 h-64">
        <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] flex justify-center -z-10">
          <h2 className="font-bold font-orbitron text-black text-3xl pt-8">External Links</h2>
        </div>
        <div className="absolute inset-0 text-black flex justify-left items-center px-8">
          <ul className="list-none list-inside">
            {links.map(([name, url], index) => (
              <li key={index} className="text-xl font-rajdhani">
                <span className="mr-2">★</span>
                <Link
                  href={url}
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {collaborators.length != 0 && (
        <div className="absolute hidden md:block right-90 bottom-0 w-64 h-64">
          <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
          <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] flex justify-center -z-10">
            <h2 className="font-bold font-orbitron text-black text-3xl pt-8">Collaborators</h2>
          </div>
          <div className="absolute inset-0 text-black flex justify-left items-center px-8">
            <ul className="list-none list-inside">
              {collaborators.map((name, index) => (
                <li key={index} className="text-xl font-rajdhani">
                  <span className="mr-2">★</span>
                  <span className="font-bold">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="absolute md:hidden left-1/2 bottom-0 transform -translate-x-1/2 w-64 h-64">
        <div className="absolute inset-0 -m-[10px] bg-cyan-600 [clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)] -z-20" />
        <div className="absolute inset-0 bg-cyan-500 [clip-path:polygon(0_0,100%_0%,100%_80%,80%_100%,0_100%)] flex justify-center -z-10">
          <h2 className="font-bold font-orbitron text-black text-3xl pt-8">{activeBox === 0 ? "External Links" : "Collaborators"}</h2>
        </div>
        <div className="absolute inset-0 text-black flex justify-left items-center px-8">
          {activeBox === 0 ? (
            <ul className="list-none list-inside">
              {links.map(([name, url], index) => (
                <li key={index} className="text-xl font-rajdhani">
                  <span className="mr-2">★</span>
                  <Link
                    href={url}
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-none list-inside">
              {collaborators.map((name, index) => (
                <li key={index} className="text-xl font-rajdhani">
                  <span className="mr-2">★</span>
                  <span className="font-bold">{name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {collaborators.length != 0 && (
          <div
            onClick={() => setActiveBox(activeBox === 0 ? 1 : 0)}
            className="absolute right-0 bottom-0 w-8 h-8 hover:scale-105"
          >
            <Image
              src="/icons/arrow.png"
              alt="arrow"
              fill
              className="object-contain transform scale-y-[-1] -rotate-25 filter grayscale brightness-100 opacity-70"
            />
          </div>
        )}
      </div>
    </div>
  )
}