import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  external?: boolean;
  /** Suggested filename — makes the link download instead of navigate. */
  download?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  solid: "bg-ink text-cream hover:bg-terra",
  outline: "border border-ink/25 text-ink hover:border-terra hover:text-terra-ink",
};

/** Pill-shaped link or button. Renders <a> when `href` is set, <button> otherwise. */
export default function Pill({
  children,
  variant = "solid",
  href,
  external,
  download,
  onClick,
  type = "button",
  disabled,
  className = "",
}: PillProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
