import { site } from "./site";

export const heroChips = ["Python", "FastAPI", "LangGraph", "Next.js"];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript (MERN)", "SQL", "C#", "C++"],
  },
  {
    title: "AI & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "MCP",
      "FAISS",
      "SentenceTransformers",
      "LangSmith",
      "Ragas",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Django",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "Role-based access",
      "Job queues & workers",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "Tailwind CSS", "React Native", "Android Studio"],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "MongoDB", "Cloudflare R2", "AWS"],
  },
  {
    title: "Integrations & Media",
    items: ["Razorpay", "Gemini Live Translate", "Demucs", "ffmpeg"],
  },
  {
    title: "DevOps & Process",
    items: [
      "Docker Compose",
      "VPS deployment",
      "Git",
      "GitHub",
      "Pytest",
      "JIRA",
      "Confluence",
      "Agile",
      "Scrum",
    ],
  },
];

export const marqueeItems = [
  site.role,
  "Python",
  "FastAPI",
  "LangGraph",
  "RAG",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Cloudflare R2",
  "Razorpay",
  "Django",
  "React",
  "C#",
  "Pytest",
];
