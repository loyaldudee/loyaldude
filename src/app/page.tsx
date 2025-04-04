import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center sm:text-left sm:items-start max-w-4xl mx-auto px-6 py-20">
        <Image
          className="rounded-full border-4 border-gray-700 shadow-lg"
          src="/profile.jpg" // Replace this with your actual profile image path
          alt="Mayur Rishi"
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-bold mt-6">Hey, I'm Mayur Rishi 👋</h1>
        <p className="text-gray-400 mt-4 max-w-lg">
          Game & VR Developer 🕹️ | Building immersive worlds in Unity & pushing boundaries in virtual reality.
          I'm passionate about interactive experiences and bringing ideas to life through code and creativity.
        </p>

        <Link href="/projects">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg mt-8 shadow-md transition">
            See My Projects 🚀
          </button>
        </Link>
      </main>
    </div>
  );
}
