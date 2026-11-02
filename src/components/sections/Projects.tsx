import { Github } from "lucide-react";
import ArrowLink from "@/components/ui/ArrowLink";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { Art } = project;

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-[5px_5px_0_var(--color-line)] transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <Art />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
            P.{String(index + 1).padStart(3, "0")}
          </span>
          <ul className="flex flex-wrap justify-end gap-2" aria-label="Tech used">
            {project.tech.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/70">{project.description}</p>
        {project.repo ? (
          <div className="mt-6">
            <ArrowLink href={project.repo}>
              <Github size={14} aria-hidden="true" /> GitHub
            </ArrowLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" title="Projects">
        A selection of the products and tools I’ve built and shipped.
      </SectionHeading>

      <div className="grid gap-10 md:grid-cols-2 md:pb-16">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:translate-y-16" : ""}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
