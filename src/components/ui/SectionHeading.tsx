import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  children?: ReactNode;
};

/** "( 01 ) ———" rule, big title, optional intro line. */
export default function SectionHeading({
  index,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.2em] text-terra-ink">
          ( {index} )
        </span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-5xl font-extrabold tracking-[-0.025em] md:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 max-w-xl text-lg text-ink/70">{children}</p>
      ) : null}
    </Reveal>
  );
}
