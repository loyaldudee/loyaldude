export type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Prodapt Solutions",
    role: "Forward Deployment Engineer Trainee",
    duration: "Jun 2026 – Present",
    description:
      "Completed enterprise-grade training in applied AI and modern backend systems, then built and deployed production-style RAG and multi-agent backends with LangGraph, LangChain and FastAPI.",
  },
  {
    company: "Solytics Partners",
    role: "QA Engineer Intern",
    duration: "May 2025 – Nov 2025",
    description:
      "Audited multi-source enterprise datasets, traced root causes and reported findings that informed product decisions, turning stakeholder requirements into audit and test plans across Agile sprints.",
  },
  {
    company: "Front Benchers Infotech Limited",
    role: "App Developer Intern",
    duration: "March 2024 – September 2024",
    description:
      "Translated client requirements for three product builds into plans for non-technical stakeholders and managed concurrent sprint deliverables from brief to production release.",
  },
];
