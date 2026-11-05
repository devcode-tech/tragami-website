export function CloudDecor({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 260 150"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cloudBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff7f2" />
          <stop offset="55%" stopColor="#f3e6ff" />
          <stop offset="100%" stopColor="#c9c3f0" />
        </radialGradient>
      </defs>
      <g fill="url(#cloudBody)">
        <ellipse cx="70" cy="95" rx="60" ry="42" />
        <ellipse cx="140" cy="80" rx="70" ry="52" />
        <ellipse cx="205" cy="100" rx="48" ry="36" />
        <ellipse cx="110" cy="115" rx="80" ry="30" />
      </g>
    </svg>
  );
}
