import { Fragment, type ReactNode } from "react";

/** Renders the small amount of inline markup the blog uses: **bold**, `code` and [text](url). */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const s = m[0];
    if (s.startsWith("**")) parts.push(<strong key={i++} className="font-medium text-foreground">{s.slice(2, -2)}</strong>);
    else if (s.startsWith("`")) parts.push(<code key={i++} className="rounded-none bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">{s.slice(1, -1)}</code>);
    else {
      const mm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(s)!;
      parts.push(<a key={i++} href={mm[2]} target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">{mm[1]}</a>);
    }
    last = m.index + s.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}
