import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-6">About Me 👨‍💻</h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500">
            <Image src="/profile.jpg" alt="Mayur Rishi" layout="fill" objectFit="cover" />
          </div>

          {/* Bio Section */}
          <div className="max-w-2xl">
            <p className="text-gray-300 text-lg">
              Hey, I’m <span className="font-semibold text-purple-400">Mayur Rishi</span>, a passionate 
              <span className="text-blue-400"> Game & VR Developer</span> with expertise in Unity, C#, and React Native.  
              I love creating immersive experiences and pushing the boundaries of <strong>Virtual Reality</strong>.
            </p>
            <p className="mt-4 text-gray-400">
              I’ve worked on various <strong>VR projects</strong>, developed mobile apps, and built interactive simulations. 
              Currently, I’m focusing on <strong>VR Herbal Garden</strong>, where users explore medicinal plants in a virtual world.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-purple-400">Skills & Tools 🚀</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 text-gray-300">
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">Unity</span>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">C#</span>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">React Native</span>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">Next.js</span>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">Three.js</span>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-center">AWS</span>
              </div>
            </div>

            {/* Resume & Contact */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link
                href="/resume.pdf"
                className="bg-purple-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-purple-700 transition"
              >
                📄 Download Resume
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
              >
                📩 Contact Me
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
