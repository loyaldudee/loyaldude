"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold hover:text-purple-400 transition-colors">
        Mayur Rishi
      </Link>

      <div className="space-x-6 text-sm sm:text-base">
        <Link href="/" className="hover:text-purple-400 transition-colors">
          Home
        </Link>
        <Link href="/projects" className="hover:text-purple-400 transition-colors">
          Projects
        </Link>
        <Link href="/about" className="hover:text-purple-400 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-purple-400 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
