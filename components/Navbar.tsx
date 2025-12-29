"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Sai Kiran</h1>

        <div className="flex items-center space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setDark(!dark);
            }}
            className="border px-3 py-1 rounded-lg"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
