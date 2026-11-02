import type { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/75">
      {children}
    </span>
  );
}
