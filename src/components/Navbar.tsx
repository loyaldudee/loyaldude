"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `hover:underline ${
      pathname === path ? "text-yellow-400 font-semibold" : "text-white"
    }`;

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-bold text-white">
        Mayur Rishi
      </Link>
      <div className="space-x-6">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/projects" className={linkClasses("/projects")}>
          Projects
        </Link>
        {/* <Link href="/about" className={linkClasses("/about")}>About</Link> */}
      </div>
    </nav>
  );
}
