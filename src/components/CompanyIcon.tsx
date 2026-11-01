/** One tile per company: same size, same border, so a timeline of logos reads as one set. */
export function CompanyIcon({ company, size = "h-14 w-14" }: { company: string; size?: string }) {
  const tile = `flex shrink-0 items-center justify-center border bg-background ${size}`;
  switch (company) {
    case "FynoLabs":
      return (
        <span className={tile}>
          <img src="/img/logos/fynolabs.png" alt="FynoLabs" className="h-1/2 w-1/2" />
        </span>
      );
    case "Ringover":
      return (
        <span className={tile}>
          <img src="/img/logos/ringover.svg" alt="Ringover" className="h-1/2 w-1/2" />
        </span>
      );
    case "Wispel":
      return (
        <span className={tile}>
          <img src="/img/logos/wispel.svg" alt="Wispel" className="h-1/2 w-1/2" />
        </span>
      );
    case "IIIT Sonepat":
      return (
        <span className={tile} role="img" aria-label="IIIT Sonepat">
          <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M2 9l10-5 10 5-10 5z" />
            <path d="M6 11v5c2 2 10 2 12 0v-5" />
            <path d="M22 9v6" className="stroke-primary" />
          </svg>
        </span>
      );
    default:
      // Expert data platforms and anything else: a small abstract mark in the site's drawing style.
      return (
        <span className={tile} role="img" aria-label={company}>
          <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" aria-hidden="true">
            {[4, 12, 20].map((x) => [4, 12, 20].map((y) => <rect key={`${x}${y}`} x={x - 1.5} y={y - 1.5} width="3" height="3" className={x === 12 && y === 12 ? "fill-primary" : "fill-muted-foreground"} fillOpacity={x === 12 && y === 12 ? 1 : 0.5} />))}
            <circle cx="12" cy="12" r="6" className="stroke-primary" strokeWidth="1.2" />
          </svg>
        </span>
      );
  }
}
