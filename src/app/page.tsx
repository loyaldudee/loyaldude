import Image from "next/image";
import Navbar from "@/components/Navbar"; // Correct


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center sm:text-left sm:items-start max-w-4xl mx-auto px-6 py-20">
        <Image
          className="rounded-full border-4 border-gray-700 shadow-lg"
          src="/profile.jpg" // Replace with your image
          alt="Mayur Rishi"
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-bold mt-6">Hey, I'm Mayur Rishi 👋</h1>
        <p className="text-gray-400 mt-4 max-w-lg">
          I'm a **Game Developer** passionate about **VR & Unity**. I build
          immersive experiences and love exploring new tech. Let's connect and
          create something awesome! 🚀
        </p>
      </main>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src="/project1.png" alt="Project 1" width={400} height={200} />
            <h3 className="text-xl font-semibold mt-4">VR Herbal Garden 🌿</h3>
            <p className="text-gray-400 text-sm">
              A **VR experience** to explore medicinal plants and create herbal
              medicines.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src="/project2.png" alt="Project 2" width={400} height={200} />
            <h3 className="text-xl font-semibold mt-4">Ancient Cities VR 🏛</h3>
            <p className="text-gray-400 text-sm">
              Recreating lost civilizations in **virtual reality**, starting
              with Harappa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
