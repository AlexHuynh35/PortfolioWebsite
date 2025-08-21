"use client"

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Arrow Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 z-50 left-0 group hover:scale-105 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-48" : "-translate-x-16"}`}
      >
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-slate-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_0,75%_0,100%_50%,75%_100%,0_100%)]" />
          <div className="absolute inset-0 bg-slate-600 m-1 text-white font-bold flex items-center justify-center transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_5%,70%_5%,95%_50%,70%_100%,0_100%)]" />
        </div>
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
        <div className="absolute w-58 inset-0 bg-slate-800 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] -z-10" />
        <div className="absolute w-60 inset-0 bg-slate-900 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] -z-20" />
        <div className="absolute w-58 inset-0 bg-slate-800 [clip-path:polygon(0_85%,100%_75%,95%_100%,0_100%)] -z-10" />
        <div className="absolute w-60 inset-0 bg-slate-900 [clip-path:polygon(0_84%,100%_74%,95%_100%,0_100%)] -z-20" />
        <h2 className="text-xl font-bold mt-20 mb-6 p-6">My Portfolio</h2>
        <nav className="flex flex-col text-center justify-center">
          <div className="relative w-full hover:scale-105">
            <div className="absolute inset-0 bg-slate-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]" />
            <Link href="#about" className="block bg-slate-600 mr-1 mt-1 mb-1 py-8 px-4 text-xl transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_25%,98%_5%,89%_90%,0_100%)]">Player Profile</Link>
          </div>
          <div className="relative w-full hover:scale-105">
            <div className="absolute inset-0 bg-slate-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]" />
            <Link href="#projects" className="block bg-slate-600 mr-1 mt-1 mb-1 py-8 px-4 text-xl transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_25%,98%_5%,89%_90%,0_100%)]">Project Dex</Link>
          </div>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-md z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}