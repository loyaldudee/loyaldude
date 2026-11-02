/** IoT-Based VR Haptic Glove — a sensor-studded hand sending signals to a chip. */

const FINGERS = [
  { x: 143, y: 80, w: 15, h: 52 },
  { x: 162, y: 68, w: 15, h: 64 },
  { x: 181, y: 76, w: 15, h: 56 },
  { x: 200, y: 90, w: 15, h: 42 },
];

export default function HapticGloveArt() {
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className="art h-full w-full"
      role="img"
      aria-label="A glove with fingertip sensors sending signals to a microchip"
    >
      <rect width="400" height="250" fill="#f6ebcf" />
      <circle cx="70" cy="40" r="70" fill="#e07a5f" opacity=".14" />

      {/* glove */}
      <g fill="#fdfbf7" stroke="#1f2421" strokeWidth="2.4" strokeLinejoin="round">
        {FINGERS.map((f) => (
          <rect key={f.x} x={f.x} y={f.y} width={f.w} height={f.h} rx="7.5" />
        ))}
        <rect x="118" y="142" width="15" height="48" rx="7.5" transform="rotate(-36 125 166)" />
        <rect x="140" y="122" width="78" height="72" rx="20" />
      </g>

      {/* sensors */}
      {FINGERS.map((f, i) => (
        <g key={f.x}>
          <circle className="svg-anim a-ping" cx={f.x + f.w / 2} cy={f.y + 8} r="5" fill="#e07a5f" style={{ animationDelay: `${i * -0.5}s` }} />
          <circle cx={f.x + f.w / 2} cy={f.y + 8} r="4.5" fill="#e07a5f" stroke="#fdfbf7" strokeWidth="1.5" />
        </g>
      ))}
      <circle cx="116" cy="170" r="4.5" fill="#7c9c84" stroke="#fdfbf7" strokeWidth="1.5" />
      <circle cx="179" cy="158" r="6" fill="#1e7f86" stroke="#fdfbf7" strokeWidth="2" />

      {/* signal to chip */}
      <path d="M218 158C252 158 260 128 292 128" fill="none" stroke="#1f2421" strokeWidth="2" strokeDasharray="5 6" className="a-dash" />
      <g className="svg-anim a-float">
        <g stroke="#1f2421" strokeWidth="2.4" strokeLinecap="round">
          {[116, 128, 140].map((y) => (
            <path key={y} d={`M286 ${y}h-9M338 ${y}h9`} />
          ))}
        </g>
        <rect x="288" y="104" width="50" height="50" rx="8" fill="#1f2421" />
        <rect x="302" y="118" width="22" height="22" rx="4" fill="#e9c46a" />
        <path d="M350 100a14 14 0 0 1 14 14M350 90a24 24 0 0 1 24 24" fill="none" stroke="#e07a5f" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <path d="M40 214c24-18 36 14 62-2s38 10 62-6" fill="none" stroke="#1f2421" strokeWidth="2" strokeLinecap="round" opacity=".35" />
    </svg>
  );
}
