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
    repo: "https://github.com/GDXR-AR-VR/AIT_VR-Tour",
  },
  {
    title: "Custom 3D Environment Viewer",
    tech: "Unity3D, C#",
    description:
      "An application that enables users to view and explore custom-built 3D environments. Ideal for architectural visualization or virtual exhibitions.",
    image: "/custom-viewer.jpg",
    repo: "https://github.com/TheNectarStudios/VRAPPFINAL",
  },
  {
    title: "3D Environment Generator",
    tech: "Unity3D, C#",
    description:
      "A Unity application that procedurally generates customizable 3D environments for designing diverse virtual spaces.",
    image: "/env-generator.jpg",
    repo: "https://github.com/TheNectarStudios/GIT-LFS-Creator123",
  },
  {
    title: "VR Herbal Garden",
    tech: "Unity3D, VR",
    description:
      "An immersive experience to explore medicinal plants used in AYUSH. Interact with a VR garden, learn plant benefits, and craft potions for healing.",
    image: "/herbal-garden.jpg",
    repo: "https://github.com/TheNectarStudios/HerbalGarden",
  },
  {
    title: "Gotchu",
    tech: "Unity3D, Blender",
    description:
      "A chaotic multiplayer game where players chase each other through a space-themed maze. Still under development, but already dangerously fun.",
    image: "/gotchu.jpg",
    repo: "https://github.com/TheNectarStudios/GOTCHU_FR",
  },
  {
    title: "Meeting Scheduler App",
    tech: "React Native",
    description:
      "A mobile app to streamline meeting scheduling and collaboration. Real-time notifications, calendar sync, and slick UI included.",
    image: "/rn.jpg",
    repo: "https://github.com/TheNectarStudios/REPAPP",
  },
];

function ProjectCard({ project, setSelectedImage, isInView, index }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / centerY * -10;
    const tiltY = (x - centerX) / centerX * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'all 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        ref={cardRef}
        className="relative bg-[#393E46]/50 border border-[#00ADB5]/30 rounded-2xl overflow-hidden shadow-md"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
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

        <div className="p-6 flex flex-col gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-[#EEEEEE]/60">{project.tech}</p>
            <p className="mt-2 text-[#EEEEEE]/80">{project.description}</p>
          </div>

          <div className="mt-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-6 h-6 hover:scale-125 transition-transform"
            >
              <img
                src="/github-mark-white.png"
                alt="GitHub Repo"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const projectRefs = projects.map(() => useRef(null));
  const projectInViews = projectRefs.map(ref => useInView(ref, { once: true }));

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-20 px-6 py-20 text-[#EEEEEE] relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block w-full text-center px-6 py-6 mb-12 rounded-2xl backdrop-blur-md shadow-md"
        >
          <h1 className="text-5xl font-bold text-[#00ADB5] mb-4">🚀 Projects</h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#EEEEEE]/80 text-lg max-w-2xl mx-auto"
          >
            A showcase of the virtual worlds, tools, and experiences I've brought to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} ref={projectRefs[index]}>
              <ProjectCard
                project={project}
                setSelectedImage={setSelectedImage}
                isInView={projectInViews[index]}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#EEEEEE] text-3xl hover:text-[#00ADB5] transition"
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
