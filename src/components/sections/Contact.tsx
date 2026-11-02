import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import { socials } from "@/data/socials";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading index="04" title="Contact">
        Have a project in mind or just want to say hi? Drop a message, and let’s connect!
      </SectionHeading>

      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/80">
            <span className="text-terra" aria-hidden="true">
              ✦
            </span>
            Socials
          </h3>
          <ul className="mt-6 border-t border-line">
            {site.email ? (
              <li className="border-b border-line">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between py-5 text-2xl font-bold tracking-tight transition-colors hover:text-terra-ink"
                >
                  {site.email}
                  <ArrowUpRight size={18} aria-hidden="true" className="text-muted transition-colors group-hover:text-terra" />
                </a>
              </li>
            ) : null}
            {socials.map(({ name, href, icon: Icon }) => (
              <li key={name} className="border-b border-line">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:text-terra-ink"
                >
                  <span className="flex items-center gap-4 text-2xl font-bold tracking-tight">
                    <Icon size={20} aria-hidden="true" className="text-ink/70 transition-colors group-hover:text-terra" />
                    {name}
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className="text-muted transition-colors group-hover:text-terra" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
