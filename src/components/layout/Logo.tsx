/** Peacock-feather mark, inline so it needs no image request. */
export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      role="img"
      aria-label="Peacock feather logo"
    >
      <path d="M12 1C20 8 22 18 12 27 2 18 4 8 12 1Z" fill="#6A9488" />
      <ellipse cx="12" cy="14" rx="5.2" ry="6.4" fill="#E9C46A" />
      <ellipse cx="12" cy="14" rx="3.3" ry="4.2" fill="#1E7F86" />
      <ellipse cx="12" cy="14" rx="1.3" ry="1.8" fill="#1F2421" />
      <path d="M12 27v4" className="stroke-ink" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
