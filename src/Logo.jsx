// MentoreX logo mark: a graduation cap over rising budget bars.
// variant "dark"  = navy tile, white shapes (for light backgrounds)
// variant "light" = white tile, navy shapes (for dark backgrounds like the header/footer)
const Logo = ({ size = 40, variant = "dark", className = "" }) => {
  const tile = variant === "light" ? "#FFFFFF" : "#0E2A5C";
  const ink = variant === "light" ? "#0E2A5C" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill={tile} />
      <polygon
        points="32,10 54,19 32,28 10,19"
        fill={ink}
        stroke={ink}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="16" y="42" width="8" height="10" rx="1.5" fill={ink} />
      <rect x="28" y="37" width="8" height="15" rx="1.5" fill={ink} />
      <rect x="40" y="31" width="8" height="21" rx="1.5" fill="#F5A524" />
    </svg>
  );
};

export default Logo;
