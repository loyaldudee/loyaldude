import { ArrowDown, MessageCircle } from "lucide-react";
import Logo from "@/components/layout/Logo";
import Chip from "@/components/ui/Chip";
import Pill from "@/components/ui/Pill";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import { heroChips } from "@/data/skills";
import { site } from "@/data/site";

function RotatingBadge() {
  return (
    <div className="absolute -bottom-4 -left-2 h-24 w-24 rounded-full bg-cream shadow-sm sm:-left-8 sm:h-28 sm:w-28" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
        <defs>
          <path id="badge-circle" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1 -76 0" />
        </defs>
        <text className="fill-ink font-mono text-[8.5px] uppercase" letterSpacing="2.4">
          <textPath href="#badge-circle">Python ✦ FastAPI ✦ RAG ✦ AI ✦ </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Logo className="h-9 w-auto" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-terra-ink">
              ( {site.role} )
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 flex flex-wrap items-center gap-x-5 text-[clamp(3.6rem,11vw,8.4rem)] font-extrabold leading-[0.92] tracking-[-0.025em]">
              <span>Hey, I’m</span>
              <span className="inline-flex items-center gap-4">
                {site.firstName}
                <Logo className="h-[0.8em] w-auto" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-2xl leading-snug">
              I build full-stack products that blend clean code,{" "}
              <em className="font-serif text-terra">creativity</em>, and{" "}
              <em className="font-serif text-terra">clear communication</em>.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              As a {site.role}, I take ideas from a plain-language brief to a secure,
              tested product—APIs, databases, LLM workflows and polished interfaces included.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core tech">
              {heroChips.map((c) => (
                <li key={c}>
                  <Chip>{c}</Chip>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Pill href="#projects">
                Explore projects <ArrowDown size={14} aria-hidden="true" />
              </Pill>
              <Pill href="#contact" variant="outline">
                Let’s talk <MessageCircle size={14} aria-hidden="true" />
              </Pill>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/25"
            />
            <PhotoFrame variant="arch" priority />
            <RotatingBadge />
            <span
              aria-hidden="true"
              className="absolute -right-4 bottom-10 h-3 w-3 rounded-full bg-terra"
            />
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {site.photoCaption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
