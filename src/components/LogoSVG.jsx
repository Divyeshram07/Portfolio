export default function LogoSVG() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 200 200"
      className="animate-draw"
    >
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        className="logo-path"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="40"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        DR
      </text>
    </svg>
  );
}
