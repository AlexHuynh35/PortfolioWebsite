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
        className="fixed top-20 z-30 left-0 group -translate-x-8"
      >
        <div className="relative w-24 h-24 hover:scale-105">
          <div className="absolute inset-0 bg-neutral-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_0,75%_0,100%_50%,75%_100%,0_100%)]" />
          <div className="absolute inset-0 bg-neutral-600 m-1 text-white font-bold flex items-center justify-center transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_0,75%_0,100%_50%,75%_100%,0_100%)]" />
        </div>
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
        <div className="absolute w-60 inset-0 bg-neutral-900 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] -z-20" />
        <div className="absolute w-58 inset-0 bg-neutral-800 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] -z-10" />
        <div className="absolute w-60 inset-0 bg-neutral-900 [clip-path:polygon(0_85%,100%_75%,95%_100%,0_100%)] -z-20" />
        <div className="absolute w-58 inset-0 bg-neutral-800 [clip-path:polygon(0_85%,100%_75%,95%_100%,0_100%)] -z-10" />
        <h2 className="text-xl font-orbitron font-bold mt-5 mb-6 p-6">Alex Huynh's Portfolio</h2>
        <nav className="flex flex-col text-center justify-center">
          <div className="relative w-full hover:scale-105">
            <div className="absolute inset-0 bg-neutral-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]" />
            <Link href="/about" className="block bg-neutral-600 mr-1 mt-1 mb-1 py-8 px-4 font-orbitron text-xl transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]">Player Profile</Link>
          </div>
          <div className="relative w-full hover:scale-105">
            <div className="absolute inset-0 bg-neutral-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]" />
            <Link href="/" className="block bg-neutral-600 mr-1 mt-1 mb-1 py-8 px-4 font-orbitron text-xl transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_20%,100%_0,90%_90%,0_100%)]">Project Dex</Link>
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