import { marqueeItems } from "@/data/skills";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {marqueeItems.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="flex items-center whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-cream"
        >
          <span className="px-6">{item}</span>
          <span className="text-gold" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Slightly tilted dark band of skills, looping with pure CSS. */
export default function Marquee() {
  return (
    <section aria-label="Skills" className="relative overflow-hidden py-14">
      <div className="-mx-4 -rotate-1 bg-ink py-4">
        <div className="animate-marquee flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
