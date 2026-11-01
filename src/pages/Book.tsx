import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../components/useTitle";
import { contact } from "../data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const CAL_LINK = "prashantkumarsingh/free-product-discovery-call";

/* The heading and talking points follow the button the visitor clicked. */
const TOPICS = {
  product: { heading: "Let's plan your product.", cover: ["What you're building", "What to build first", "Timeline and budget"], note: "Product" },
  data: { heading: "Let's scope your AI data.", cover: ["Domain and volume", "Rubric and acceptance bar", "A paid pilot"], note: "AI training data" },
  hire: { heading: "Let's talk about the role.", cover: ["The team and the role", "Where I can help first", "Terms and start date"], note: "Role" },
  general: { heading: "Let's talk about your idea.", cover: ["Your goals", "How I can help", "A clear next step"], note: "" },
} as const;
type Topic = keyof typeof TOPICS;

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { ns?: Record<string, (...args: unknown[]) => void>; loaded?: boolean; q?: unknown[] };
  }
}

/** Cal.com's official inline embed: sizes itself, so there's no empty box or second frame. */
function useCalInline(el: string, notes: string) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    /* eslint-disable */
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal; const ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable */
    const Cal = window.Cal!;
    Cal("init", "discovery", { origin: "https://cal.com" });
    const ns = Cal.ns!.discovery;
    ns("inline", {
      elementOrSelector: `#${el}`,
      calLink: CAL_LINK,
      config: { layout: "month_view", theme: "light", ...(notes ? { notes: `${notes}: ` } : {}) },
    });
    ns("ui", { theme: "light", hideEventTypeDetails: true, layout: "month_view", cssVarsPerTheme: { light: { "cal-brand": "#1a5cf0", "cal-bg-emphasis": "#eef2fd", "cal-border-subtle": "#eceef3", "cal-border": "#e3e6ec" } } });
    ns("on", { action: "linkReady", callback: () => setReady(true) });
    const t = window.setTimeout(() => setReady(true), 6000);
    return () => {
      window.clearTimeout(t);
      const node = document.getElementById(el);
      if (node) node.innerHTML = "";
    };
  }, [el, notes]);
  return ready;
}

export default function Book() {
  const [params] = useSearchParams();
  const raw = params.get("topic") ?? "general";
  const topic: Topic = raw in TOPICS ? (raw as Topic) : "general";
  const t = TOPICS[topic];
  useTitle("Book a call", "Book a free 30-minute discovery call with Prashant Kumar Singh.");
  useCalInline("cal-inline", t.note);

  return (
    <section className="pb-24 pt-12 md:pb-32 md:pt-20">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Free discovery call · 30 minutes</p>
          <h1 className="mt-6 text-section font-light tracking-tight">{t.heading}</h1>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-muted-foreground">
            {t.cover.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 8.5l3 3 7-7" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* One wrapper around the calendar; Cal.com shows its own loader inside it. */}
        <div className="mx-auto mt-14 max-w-[1080px] rounded-2xl border border-black/[0.06] bg-[hsl(225_20%_98%)] p-3 md:p-6">
          <div id="cal-inline" className="mx-auto min-h-[520px] w-full overflow-auto" />
        </div>

        <p className="mt-10 text-center text-small text-muted-foreground">
          Calendar not loading? <a href={contact.call} {...ext} className="text-foreground underline underline-offset-4 hover:text-primary">Book on Cal.com</a>
          <span className="mx-3 text-border">|</span>
          Rather write? <a href={`mailto:${contact.email}`} className="text-foreground underline underline-offset-4 hover:text-primary">Email me</a>, I reply within one business day.
        </p>
      </div>
    </section>
  );
}
