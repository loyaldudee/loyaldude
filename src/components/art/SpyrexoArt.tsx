/** Spyrexo LMS — a dark admin dashboard with a dubbing waveform turning into four languages. */

const BARS = [10, 22, 14, 30, 18, 34, 12, 26, 20, 32, 16, 24];
const LANGS = ["#e07a5f", "#7c9c84", "#e9c46a", "#fdfbf7"];

export default function SpyrexoArt() {
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className="art h-full w-full"
      role="img"
      aria-label="A dark dashboard showing course stats and a video dubbing waveform"
    >
      <rect width="400" height="250" fill="#1a1f1c" />
      <circle cx="350" cy="34" r="70" fill="#e07a5f" opacity=".16" />
      <circle cx="40" cy="236" r="60" fill="#7c9c84" opacity=".14" />

      {/* window */}
      <rect x="36" y="26" width="328" height="198" rx="12" fill="#2a312d" stroke="#3b443e" strokeWidth="1.5" />
      <circle cx="52" cy="40" r="3.5" fill="#e07a5f" />
      <circle cx="64" cy="40" r="3.5" fill="#e9c46a" />
      <circle cx="76" cy="40" r="3.5" fill="#7c9c84" />

      {/* sidebar */}
      <rect x="46" y="54" width="52" height="160" rx="8" fill="#232925" />
      <rect x="54" y="64" width="36" height="7" rx="3.5" fill="#7c9c84" />
      {[80, 96, 112, 128].map((y) => (
        <rect key={y} x="54" y={y} width="30" height="6" rx="3" fill="#4a554d" />
      ))}

      {/* heading + stat cards */}
      <rect x="110" y="58" width="96" height="8" rx="4" fill="#cfd6d1" opacity=".85" />
      {[110, 192, 274].map((x, i) => (
        <g key={x}>
          <rect x={x} y="74" width="74" height="40" rx="8" fill="#232925" />
          <rect x={x + 8} y="82" width="28" height="4" rx="2" fill="#66716b" />
          <rect x={x + 8} y="94" width={[46, 38, 52][i]} height="9" rx="4.5" fill={LANGS[i]} className="a-blink" style={{ animationDelay: `${i * -1}s` }} />
        </g>
      ))}

      {/* dubbing panel */}
      <rect x="110" y="124" width="238" height="82" rx="10" fill="#232925" />
      <g fill="#e9c46a">
        {BARS.map((h, i) => (
          <rect
            key={i}
            x={122 + i * 8}
            y={152 - h / 2}
            width="4"
            height={h}
            rx="2"
            className="svg-anim a-wave"
            style={{ animationDelay: `${i * -0.22}s` }}
          />
        ))}
      </g>
      <path d="M226 152h20m-6-5 6 5-6 5" fill="none" stroke="#e9c46a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {LANGS.map((c, i) => (
        <rect key={i} x={256 + (i % 2) * 44} y={138 + Math.floor(i / 2) * 22} width="36" height="16" rx="8" fill={c} opacity=".92" />
      ))}
      <rect x="122" y="184" width="214" height="6" rx="3" fill="#3b443e" />
      <rect x="122" y="184" width="132" height="6" rx="3" fill="#7c9c84" />
    </svg>
  );
}
