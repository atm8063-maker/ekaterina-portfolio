export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-sm uppercase tracking-wider text-[color:var(--accent)]">
      {children}
    </p>
  )
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-balance font-serif text-[color:var(--text-primary)] ${className ?? ''}`}
      style={{ fontSize: 'clamp(32px, 5vw, 40px)', lineHeight: 1.15 }}
    >
      {children}
    </h2>
  )
}
