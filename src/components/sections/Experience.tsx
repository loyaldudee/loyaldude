import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="02" title="Experience" />

      <ol className="border-t border-line">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 0.08}>
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[3rem_1.3fr_1fr_1.4fr] md:items-start md:gap-8 md:py-10">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-terra-ink">
                    {job.role}
                  </p>
                </div>
                <p className="font-mono text-xs text-ink/70 md:pt-2">{job.duration}</p>
                <p className="leading-relaxed text-ink/70 md:pt-1">{job.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
