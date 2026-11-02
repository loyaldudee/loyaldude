/** NomNom Chat — anonymous chat bubbles with masked avatars. */

function Avatar({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="13" fill="#1f2421" />
      <rect x={cx - 8} y={cy - 4} width="6" height="4" rx="2" fill="#fdfbf7" />
      <rect x={cx + 2} y={cy - 4} width="6" height="4" rx="2" fill="#fdfbf7" />
    </g>
  );
}

export default function NomNomArt() {
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className="art h-full w-full"
      role="img"
      aria-label="Anonymous chat bubbles with masked avatars"
    >
      <rect width="400" height="250" fill="#f8e3da" />
      <circle cx="350" cy="220" r="80" fill="#e9c46a" opacity=".22" />

      <g className="svg-anim a-float">
        <Avatar cx={50} cy={64} />
        <rect x="74" y="40" width="156" height="48" rx="16" fill="#fdfbf7" />
        <path d="M78 74l-10 8 4-14z" fill="#fdfbf7" />
        <rect x="90" y="54" width="104" height="6" rx="3" fill="#1f2421" opacity=".7" />
        <rect x="90" y="68" width="68" height="6" rx="3" fill="#1f2421" opacity=".35" />
      </g>

      <g className="svg-anim a-float" style={{ animationDelay: "-2.5s" }}>
        <Avatar cx={352} cy={132} />
        <rect x="150" y="108" width="176" height="48" rx="16" fill="#e07a5f" />
        <path d="M322 142l12 8-6-16z" fill="#e07a5f" />
        <rect x="166" y="122" width="118" height="6" rx="3" fill="#fdfbf7" opacity=".9" />
        <rect x="166" y="136" width="82" height="6" rx="3" fill="#fdfbf7" opacity=".55" />
      </g>

      <g className="svg-anim a-float" style={{ animationDelay: "-5s" }}>
        <Avatar cx={50} cy={200} />
        <rect x="74" y="178" width="98" height="44" rx="16" fill="#e9c46a" />
        <path d="M78 208l-10 8 4-14z" fill="#e9c46a" />
        {[100, 122, 144].map((x, i) => (
          <circle key={x} cx={x} cy="200" r="5" fill="#1f2421" className="a-blink" style={{ animationDelay: `${i * -0.5}s` }} />
        ))}
      </g>
    </svg>
  );
}
