/** Meeting Scheduler — a phone showing a calendar, with a ringing notification bell. */

const CELLS = Array.from({ length: 20 }, (_, i) => ({
  x: 161 + (i % 5) * 16,
  y: 82 + Math.floor(i / 5) * 18,
}));
const BUSY = new Map<number, string>([
  [2, "#7c9c84"],
  [7, "#e9c46a"],
  [11, "#e07a5f"],
  [16, "#7c9c84"],
]);

export default function SchedulerArt() {
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className="art h-full w-full"
      role="img"
      aria-label="A phone showing a calendar with a notification bell"
    >
      <rect width="400" height="250" fill="#efe9db" />
      <circle cx="90" cy="70" r="60" fill="#7c9c84" opacity=".2" />
      <circle cx="330" cy="200" r="70" fill="#e07a5f" opacity=".16" />

      {/* phone */}
      <rect x="140" y="18" width="120" height="226" rx="22" fill="#fdfbf7" stroke="#1f2421" strokeWidth="4" />
      <rect x="180" y="26" width="40" height="6" rx="3" fill="#1f2421" opacity=".85" />
      <rect x="152" y="44" width="96" height="22" rx="8" fill="#1f2421" />
      <rect x="160" y="52" width="40" height="6" rx="3" fill="#fdfbf7" />
      <circle cx="236" cy="55" r="4" fill="#e9c46a" />

      {CELLS.map((c, i) => {
        const busy = BUSY.get(i);
        return (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width="12"
            height="13"
            rx="3"
            fill={busy ?? "#f5f2eb"}
            stroke={busy ? "none" : "#e4dfd3"}
            className={busy ? "a-blink" : undefined}
            style={busy ? { animationDelay: `${i * -0.35}s` } : undefined}
          />
        );
      })}
      <rect x="152" y="166" width="96" height="14" rx="6" fill="#7c9c84" opacity=".8" />
      <rect x="152" y="186" width="70" height="14" rx="6" fill="#e9c46a" opacity=".9" />
      <rect x="152" y="206" width="84" height="14" rx="6" fill="#e07a5f" opacity=".85" />

      {/* bell */}
      <g className="svg-anim a-float">
        <g transform="translate(296 52)">
          <circle className="svg-anim a-ping" cx="0" cy="0" r="22" fill="#e07a5f" opacity=".4" />
          <circle cx="0" cy="0" r="22" fill="#1f2421" />
          <path d="M-8 6V-2a8 8 0 0 1 16 0V6l3 3h-22z" fill="#fdfbf7" />
          <circle cx="0" cy="13" r="3" fill="#fdfbf7" />
          <circle cx="12" cy="-12" r="5" fill="#e07a5f" stroke="#1f2421" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}
