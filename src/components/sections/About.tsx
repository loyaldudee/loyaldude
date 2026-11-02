import { FileDown } from "lucide-react";
import Chip from "@/components/ui/Chip";
import Pill from "@/components/ui/Pill";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About Me" />

      <div className="grid items-start gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal>
          <PhotoFrame variant="polaroid" />
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/75">
          <p>
            Hey, I’m <strong className="font-semibold text-ink">{site.name}</strong>, a {site.role}{" "}
            specializing in <strong className="font-semibold text-ink">Python</strong>,{" "}
            <strong className="font-semibold text-ink">FastAPI</strong>,{" "}
            <strong className="font-semibold text-ink">Next.js</strong> and{" "}
            <strong className="font-semibold text-ink">LLM workflows</strong> like RAG and
            multi-agent systems. I build complete products{" "}
            <em className="font-serif text-xl text-terra">end to end</em> — from the database
            and background workers to the dashboards people actually use.
          </p>
          <p>
            I recently built and shipped <strong className="font-semibold text-ink">Spyrexo</strong>,
            a learning and internship platform with payments, certificates and an AI video-dubbing
            pipeline, and I’m open to freelance projects. I like turning a plain-language request
            into a plan, then a working, tested feature — with the trade-offs explained up front.
          </p>

          <div className="space-y-5 pt-4">
            <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/80">
              <span className="text-terra" aria-hidden="true">
                ✦
              </span>
              Skills &amp; Tools
            </h3>
            {skillGroups.map((group) => (
              <div key={group.title} className="sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:mb-0 sm:pt-1.5">
                  {group.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s}>
                      <Chip>{s}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Pill href={site.resumeUrl} download={site.resumeFilename}>
              Download resume <FileDown size={14} aria-hidden="true" />
            </Pill>
            <Pill href="#contact" variant="outline">
              Contact me
            </Pill>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
