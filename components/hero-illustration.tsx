export function HeroIllustration() {
  return (
    <div className="relative h-[400px] w-[400px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        className="absolute inset-0"
      >
        <circle cx="200" cy="200" r="150" fill="#1e293b" />
        <path
          d="M200 50C117.2 50 50 117.2 50 200C50 282.8 117.2 350 200 350C282.8 350 350 282.8 350 200C350 117.2 282.8 50 200 50ZM200 320C133.8 320 80 266.2 80 200C80 133.8 133.8 80 200 80C266.2 80 320 133.8 320 200C320 266.2 266.2 320 200 320Z"
          fill="#0f172a"
        />

        {/* Plate */}
        <circle cx="200" cy="200" r="100" fill="#334155" />
        <circle cx="200" cy="200" r="90" fill="#1e293b" />

        {/* Food items */}
        <rect x="160" y="170" width="80" height="15" rx="5" fill="#f9a8d4" />
        <rect x="170" y="195" width="60" height="15" rx="5" fill="#93c5fd" />
        <rect x="180" y="220" width="40" height="15" rx="5" fill="#86efac" />

        {/* Fork and knife */}
        <rect x="140" y="130" width="8" height="60" rx="4" fill="#cbd5e1" />
        <rect x="252" y="130" width="8" height="60" rx="4" fill="#cbd5e1" />
        <rect x="240" y="130" width="8" height="40" rx="4" fill="#cbd5e1" />
        <rect x="228" y="130" width="8" height="40" rx="4" fill="#cbd5e1" />

        {/* Decorative elements */}
        <circle cx="120" cy="120" r="15" fill="#f9a8d4" opacity="0.6" />
        <circle cx="280" cy="120" r="15" fill="#93c5fd" opacity="0.6" />
        <circle cx="120" cy="280" r="15" fill="#86efac" opacity="0.6" />
        <circle cx="280" cy="280" r="15" fill="#fda4af" opacity="0.6" />
      </svg>
    </div>
  )
}

