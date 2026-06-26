export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#E2C376" />
          <stop offset="1" stopColor="#A8842F" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="#0B1B3A" />
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="12.25"
        stroke="url(#lg)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        d="M30 15.5c-1.6-1.3-4-2-6.4-2-4.3 0-7.3 2.1-7.3 5.4 0 3 2.3 4.3 6.2 5.1 3 .6 3.9 1.1 3.9 2.2 0 1.2-1.3 1.9-3.4 1.9-2.1 0-4.1-.8-5.6-2.1"
        stroke="url(#lg)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M31.5 14.5v13.2c0 3.4-2.2 5.6-5.9 5.6-2 0-3.7-.7-5-1.9"
        stroke="url(#lg)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
