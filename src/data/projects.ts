import type { ComponentType } from "react";
import AegisArt from "@/components/art/AegisArt";
import HapticGloveArt from "@/components/art/HapticGloveArt";
import NomNomArt from "@/components/art/NomNomArt";
import SchedulerArt from "@/components/art/SchedulerArt";
import SpyrexoArt from "@/components/art/SpyrexoArt";

export type Project = {
  title: string;
  tech: string[];
  description: string;
  /** Optional — a link is only rendered when one is provided. */
  repo?: string;
  Art: ComponentType;
};

export const projects: Project[] = [
  {
    title: "Spyrexo LMS",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    description:
      "A full-stack learning and virtual-internship platform: courses, live classes, mentor-graded internships, certificate generation, Razorpay payments, and an AI tool that dubs a video into four Indian languages. Built end to end and deployed to a VPS.",
    Art: SpyrexoArt,
  },
  {
    title: "Aegis — AI Claims Assistant",
    tech: ["LangGraph", "FastAPI", "ChromaDB"],
    description:
      "An AI-powered insurance claims platform: a stateful 6-agent LangGraph workflow, ChromaDB semantic search, Random Forest and Isolation Forest risk scoring, real-time Kafka ingestion and an adjuster copilot chatbot, with a human sign-off on every payout. It scored 100% retrieval hit rate and 0.95 ROC-AUC on its own evaluation suite.",
    repo: "https://github.com/loyaldudee/Capstone",
    Art: AegisArt,
  },
  {
    title: "NomNom Chat",
    tech: ["Django", "PostgreSQL", "Redis"],
    description:
      "An anonymous campus chat platform, owned from problem framing through deployment, then iterated using post-launch behavior and user feedback.",
    Art: NomNomArt,
  },
  {
    title: "IoT-Based VR Haptic Glove",
    tech: ["IoT", "Research"],
    description:
      "Independent research on a sensor-driven haptic glove. I defined the methodology, cleaned the sensor data and published the findings in a Q2 peer-reviewed international journal (ETASR); a patent filing for the sensor-fusion architecture is in progress.",
    Art: HapticGloveArt,
  },
  {
    title: "Meeting Scheduler App",
    tech: ["React Native"],
    description:
      "A mobile app to streamline meeting scheduling and collaboration. Real-time notifications, calendar sync, and slick UI included.",
    repo: "https://github.com/TheNectarStudios/REPAPP",
    Art: SchedulerArt,
  },
];
