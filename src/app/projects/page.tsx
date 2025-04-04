import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects 🚀</h1>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Project Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src="/project1.png" alt="VR Herbal Garden" width={400} height={200} />
            <h2 className="text-2xl font-semibold mt-4">VR Herbal Garden 🌿</h2>
            <p className="text-gray-400 text-sm mt-2">
              A fully immersive VR simulation that lets users explore and collect medicinal plants. Part of the Nectar initiative.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src="/project2.png" alt="Ancient Cities VR" width={400} height={200} />
            <h2 className="text-2xl font-semibold mt-4">Ancient Cities VR 🏛️</h2>
            <p className="text-gray-400 text-sm mt-2">
              Step into the past! Rebuilding lost civilizations like Harappa using Unity VR for historical immersion and edutainment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
