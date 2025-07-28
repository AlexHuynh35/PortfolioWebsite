"use client"

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white border rounded-md shadow-md md:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (<p>=</p>) : (<p></p>)}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white p-6 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-xl font-bold mb-6">My Portfolio</h2>
        <nav className="space-y-4">
          <a href="#about" className="block hover:text-emerald-400">About</a>
          <a href="#projects" className="block hover:text-emerald-400">Projects</a>
        </nav>
      </aside>

      {/* Optional: Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}