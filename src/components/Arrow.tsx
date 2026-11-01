export function Arrow({ className = "", diagonal = false }: { className?: string; diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.4">
      {diagonal ? <path d="M4.5 11.5l7-7M5.5 4.5h6v6" /> : <path d="M2 8h11M9 4l4 4-4 4" />}
    </svg>
  );
}

/** The arrow at the end of a row link: slides right on hover (parent needs `group`). */
export function RowArrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-[1.1em] w-[1.1em] shrink-0 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}
