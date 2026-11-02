/** Aegis — a shield at the centre of a six-agent ring with a token circling the workflow. */

const CX = 200;
const CY = 125;
const R = 78;
const RING = `M${CX + R} ${CY}a${R} ${R} 0 1 0 ${-2 * R} 0a${R} ${R} 0 1 0 ${2 * R} 0`;
const COLORS = ["#7c9c84", "#e9c46a", "#e07a5f", "#1f2421", "#7c9c84", "#e07a5f"];

const NODES = COLORS.map((color, i) => {
  const a = (Math.PI / 3) * i - Math.PI / 6;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), color };
});

export default function AegisArt() {
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className="art h-full w-full"
      role="img"
      aria-label="A shield surrounded by six connected agents"
    >
      <rect width="400" height="250" fill="#e3ece2" />
      <circle cx="340" cy="44" r="70" fill="#e9c46a" opacity=".24" />
      <circle cx="58" cy="220" r="56" fill="#7c9c84" opacity=".2" />

      <path d={RING} fill="none" stroke="#1f2421" strokeWidth="1.2" opacity=".25" />
      {NODES.map((n, i) => (
        <path
          key={i}
          d={`M${CX} ${CY}L${n.x.toFixed(1)} ${n.y.toFixed(1)}`}
          stroke="#1f2421"
          strokeWidth="1.6"
          strokeDasharray="4 6"
          opacity=".5"
          className="a-dash"
        />
      ))}
      {NODES.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="11" fill={n.color} stroke="#fdfbf7" strokeWidth="3" />
      ))}

      {/* token circling the workflow */}
      <circle
        className="a-orbit"
        r="5"
        fill="#fdfbf7"
        stroke="#1f2421"
        strokeWidth="2.2"
        style={{ offsetPath: `path('${RING}')`, animationDuration: "12s" }}
      />

      {/* shield */}
      <g className="svg-anim a-float">
        <path
          d="M200 92L233 104V128C233 150 218 164 200 172C182 164 167 150 167 128V104Z"
          fill="#1f2421"
          stroke="#fdfbf7"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M185 129l10 10 19-22" fill="none" stroke="#fdfbf7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
