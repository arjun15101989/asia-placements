interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 32, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradIcon" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#logoGradIcon)" />
      <rect x="2" y="2" width="44" height="44" rx="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
      <path
        d="M16 32L28 20"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18H30V28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="34" r="3" fill="white" fillOpacity="0.3" />
      <circle cx="14" cy="34" r="3" fill="white" fillOpacity="0.3" />
    </svg>
  )
}
