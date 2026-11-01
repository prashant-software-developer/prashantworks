import { useEffect } from "react";

export function Lightbox({ srcs, index, onClose, onIndex }: { srcs: string[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  useEffect(() => {
    if (index === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % srcs.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + srcs.length) % srcs.length);
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [index, srcs.length, onClose, onIndex]);

  if (index === null) return null;
  const btn = "absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-background/90 border text-foreground hover:text-primary";
  return (
    <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 md:p-12" onClick={onClose}>
      <img src={srcs[index]} alt="" className="max-h-full max-w-full object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
      <button aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border bg-background/90 hover:text-primary" onClick={onClose}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      {srcs.length > 1 && (
        <>
          <button aria-label="Previous" className={`${btn} left-3`} onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + srcs.length) % srcs.length); }}>
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M14 8H3M7 4L3 8l4 4" /></svg>
          </button>
          <button aria-label="Next" className={`${btn} right-3`} onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % srcs.length); }}>
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11M9 4l4 4-4 4" /></svg>
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-background/80">{index + 1} / {srcs.length}</p>
        </>
      )}
    </div>
  );
}
