"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mayur Rishi</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
