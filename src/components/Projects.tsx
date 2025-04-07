'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: "AIT VR Tour",
    tech: "Unity3D, Blender",
    description:
      "An interactive virtual reality tour of the Army Institute of Technology campus. It offers users a detailed and immersive walkthrough of the campus, showcasing its facilities and environment in a lifelike manner.",
    image: "/ait-vr.jpg",
  },
  {
    title: "Custom 3D Environment Viewer",
    tech: "Unity3D, C#",
    description:
      "An application that enables users to view and explore custom-built 3D environments. Ideal for architectural visualization or virtual exhibitions.",
    image: "/custom-viewer.jpg",
  },
  {
    title: "3D Environment Generator",
    tech: "Unity3D, C#",
    description:
      "A Unity application that procedurally generates customizable 3D environments for designing diverse virtual spaces.",
    image: "/env-generator.jpg",
  },
  {
    title: "VR Herbal Garden",
    tech: "Unity3D, VR",
    description:
      "An immersive experience to explore medicinal plants used in AYUSH. Interact with a VR garden, learn plant benefits, and craft potions for healing.",
    image: "/herbal-garden.jpg",
  },
  {
    title: "Gotchu",
    tech: "Unity3D, Blender",
    description:
      "A chaotic multiplayer game where players chase each other through a space-themed maze. Still under development, but already dangerously fun.",
    image: "/gotchu.jpg",
  },
  {
    title: "Meeting Scheduler App",
    tech: "React Native",
    description:
      "A mobile app to streamline meeting scheduling and collaboration. Real-time notifications, calendar sync, and slick UI included.",
    image: "/rn.jpg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen text-white scroll-mt-20 px-6 py-20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block w-full text-center px-6 py-6 mb-12 rounded-2xl bg-black/40 backdrop-blur-md"
        >
          <h1 className="text-5xl font-bold text-purple-400 mb-4">
            🚀 Projects
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            A showcase of the virtual worlds, tools, and experiences I’ve brought to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className="w-full h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-purple-300 mb-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                  <p className="mt-3 text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
            aria-label="Close Modal"
          >
            ✖
          </button>
          <img
            src={selectedImage}
            alt="Selected Project"
            className="max-w-[90%] max-h-[80%] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
