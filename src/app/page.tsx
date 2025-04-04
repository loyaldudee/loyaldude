import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <Image src="/profile.jpg" alt="Mayur Rishi" layout="fill" objectFit="cover" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Hey, I'm Mayur 👋</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          I’m a <span className="text-purple-400 font-semibold">Game & VR Developer</span> with a love for immersive
          worlds, pixel-perfect code, and digital storytelling. Dive into my universe of VR, Unity, and code wizardry. 🧙‍♂️
        </p>

        {/* CTA Button */}
        <Link href="/projects">
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-white font-semibold transition">
            🚀 See My Projects
          </button>
        </Link>
      </main>
    </div>
  );
}
