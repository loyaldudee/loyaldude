'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: "AIT VR Tour",
    tech: "Unity3D, Blender",
    description:
      "An interactive virtual reality tour of the Army Institute of Technology campus. It offers users a detailed and immersive walkthrough of the campus, showcasing its facilities and environment in a lifelike manner.",
    image: "/projects/ait-vr.jpg",
  },
  {
    title: "Custom 3D Environment Viewer",
    tech: "Unity3D, C#",
    description:
      "An application that enables users to view and explore custom-built 3D environments. Ideal for architectural visualization or virtual exhibitions.",
    image: "/projects/custom-viewer.jpg",
  },
  {
    title: "3D Environment Generator",
    tech: "Unity3D, C#",
    description:
      "A Unity application that procedurally generates customizable 3D environments for designing diverse virtual spaces.",
    image: "/projects/env-generator.jpg",
  },
  {
    title: "VR Herbal Garden",
    tech: "Unity3D, VR",
    description:
      "An immersive experience to explore medicinal plants used in AYUSH. Interact with a VR garden, learn plant benefits, and craft potions for healing.",
    image: "/projects/herbal-garden.jpg",
  },
  {
    title: "Gotchu",
    tech: "Unity3D, Blender",
    description:
      "A chaotic multiplayer game where players chase each other through a space-themed maze. Still under development, but already dangerously fun.",
    image: "/projects/gotchu.jpg",
  },
  {
    title: "Meeting Scheduler App",
    tech: "React Native",
    description:
      "A mobile app to streamline meeting scheduling and collaboration. Real-time notifications, calendar sync, and slick UI included.",
    image: "/projects/rn.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white scroll-mt-20 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 text-purple-400">
          🚀 Projects
        </h1>
        <p className="text-center text-gray-400 mb-12">
          A showcase of the virtual worlds, tools, and experiences I’ve brought to life.
        </p>

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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="w-full h-48 overflow-hidden">
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
    </section>
  );
}
