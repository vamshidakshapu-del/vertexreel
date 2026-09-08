export function Logo() {
  const gold = '#e0b93c'
  const teal = '#2fd7c4'
  const navy = '#141a2e'
  // 8 film-reel / clock dots around the ring
  const dots = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2
    return { x: 32 + Math.cos(a) * 23, y: 32 + Math.sin(a) * 23 }
  })
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="29.5" fill={navy} stroke={gold} strokeWidth="1.6" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.7" fill="#2a3350" />
      ))}
      <path
        d="M19 17 L31.5 43 L44.5 17"
        fill="none"
        stroke={gold}
        strokeWidth="6.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 39 L27 51 L37 45 Z" fill={teal} />
    </svg>
  )
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ServiceIcon({ name }) {
  if (name === 'app')
    return (
      <svg viewBox="0 0 24 24" {...base}>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    )
  if (name === 'web')
    return (
      <svg viewBox="0 0 24 24" {...base}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}
