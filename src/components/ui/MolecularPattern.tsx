interface MolecularPatternProps {
  className?: string;
  /** Stroke colour, defaults to the current text colour. */
  stroke?: string;
}

/**
 * Purely decorative line art: a central node linked to surrounding nodes plus
 * hexagonal rings. It is an abstract motif and does not depict any real molecule.
 */
export default function MolecularPattern({
  className,
  stroke = "currentColor",
}: MolecularPatternProps) {
  const nodes = [
    { x: 200, y: 70 },
    { x: 330, y: 200 },
    { x: 200, y: 330 },
    { x: 70, y: 200 },
  ];
  const outer = [
    { x: 292, y: 108 },
    { x: 108, y: 108 },
    { x: 292, y: 292 },
    { x: 108, y: 292 },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
        <polygon points="200,40 252,70 252,130 200,160 148,130 148,70" opacity="0.35" />
        <polygon points="330,170 382,200 382,260 330,290 278,260 278,200" opacity="0.25" />
        <polygon points="70,170 122,200 122,260 70,290 18,260 18,200" opacity="0.25" />
        <circle cx="200" cy="200" r="150" strokeDasharray="3 9" opacity="0.4" />
        <circle cx="200" cy="200" r="95" opacity="0.3" />
        {nodes.map((n) => (
          <line key={`l-${n.x}-${n.y}`} x1="200" y1="200" x2={n.x} y2={n.y} opacity="0.7" />
        ))}
        {outer.map((n) => (
          <line key={`o-${n.x}-${n.y}`} x1="200" y1="200" x2={n.x} y2={n.y} opacity="0.25" />
        ))}
      </g>
      <g stroke={stroke} strokeWidth="1.5">
        <circle cx="200" cy="200" r="22" fill={stroke} fillOpacity="0.12" />
        <circle cx="200" cy="200" r="7" fill={stroke} />
        {nodes.map((n) => (
          <circle key={`n-${n.x}-${n.y}`} cx={n.x} cy={n.y} r="11" fill="none" />
        ))}
        {outer.map((n) => (
          <circle key={`c-${n.x}-${n.y}`} cx={n.x} cy={n.y} r="5" fill={stroke} fillOpacity="0.5" />
        ))}
      </g>
    </svg>
  );
}
