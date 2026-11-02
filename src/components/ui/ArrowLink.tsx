import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:text-terra-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terra ${className}`}
    >
      {children}
      <ArrowUpRight
        size={14}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
