import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact } from "../data/site";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/ai-training", label: "AI Training" },
  { to: "/about", label: "About" },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** The one action this site is built for. */
export function BookButton({ topic, label = "Book a free call", className = "" }: { topic?: string; label?: string; className?: string }) {
  return (
    <Link to={topic ? `/book?topic=${topic}` : "/book"} className={`btn-primary ${className}`}>
      {label}
    </Link>
  );
}

/** Small print under a booking button: removes the reasons not to click. */
export const Reassure = ({ className = "" }: { className?: string }) => (
  <p className={`text-small text-muted-foreground ${className}`}>Free · 30 minutes · No commitment</p>
);

/** The site mark: a square (structure) with its shipped corner in blue. Same language as the drawings. */
export const Mark = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
    <rect x="0.75" y="0.75" width="22.5" height="22.5" className="stroke-foreground" strokeWidth="1.5" />
    <path d="M10 23.25A13.25 13.25 0 0 1 23.25 10V23.25Z" className="fill-primary" />
  </svg>
);

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b bg-background ${scrolled || open ? "border-border" : "border-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-3 text-body font-medium tracking-tight" aria-label="Prashant Kumar Singh, home">
          <Mark />
          Prashant Kumar Singh
        </Link>
        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-10" aria-label="Main">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `text-eyebrow uppercase transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/book" className="btn-primary min-h-10 px-5">Book a call</Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/book" className="btn-primary min-h-10 px-4 text-xs">Book a call</Link>
          <button
            className="-mr-2 flex h-11 w-11 items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="wrap border-t pb-8 pt-2 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="row-link group">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

/** Closing band at the end of every page: one clear next step. */
export function Closing({ eyebrow = "Next step", heading, body, topic }: { eyebrow?: string; heading?: ReactNode; body?: string; topic?: string }) {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <div className="relative overflow-hidden border bg-[hsl(225_20%_98%)] px-6 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden="true" className="blueprint-grid opacity-70" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h-section mt-6">
              {heading ?? (
                <>
                  Tell me what you're building.
                  <br />
                  <span className="text-primary">I'll tell you how I'd ship it.</span>
                </>
              )}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-muted-foreground">
              {body ?? "Pick a time that suits you. You'll leave the call with a clear next step, whether we work together or not."}
            </p>
            <div className="mt-10 flex flex-col items-center">
              <BookButton topic={topic} />
              <Reassure className="mt-5" />
              <p className="mt-8 text-small text-muted-foreground">
                Prefer email? <a href={`mailto:${contact.email}`} className="select-all text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">{contact.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const col = "space-y-3 text-small";
  const a = "block text-muted-foreground transition-colors hover:text-foreground";
  return (
    <footer>
      <div className="wrap grid grid-cols-2 gap-x-8 gap-y-12 pb-16 pt-8 sm:grid-cols-3 lg:grid-cols-12 lg:gap-x-20 lg:pb-20 lg:pt-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-6">
          <p className="text-2xl font-light tracking-tight">Prashant Kumar Singh</p>
          <p className="mt-3 text-small text-muted-foreground">Product engineer & founder of FynoLabs · {contact.location}</p>
          <Link to="/book" className="text-link mt-8 text-primary">Book a free call</Link>
        </div>
        <div className={`${col} lg:col-span-2`}>
          <p className="eyebrow mb-5">Pages</p>
          <Link to="/work" className={a}>Work</Link>
          <Link to="/services" className={a}>Services</Link>
          <Link to="/ai-training" className={a}>AI Training</Link>
          <Link to="/about" className={a}>About</Link>
          <Link to="/gallery" className={a}>Gallery</Link>
        </div>
        <div className={`${col} lg:col-span-2`}>
          <p className="eyebrow mb-5">Elsewhere</p>
          <a href={contact.linkedin} {...ext} className={a}>LinkedIn</a>
          <a href={contact.x} {...ext} className={a}>X</a>
          <a href={contact.github} {...ext} className={a}>GitHub</a>
          <a href={contact.fynolabs} {...ext} className={a}>FynoLabs</a>
        </div>
        <div className={`${col} lg:col-span-2`}>
          <p className="eyebrow mb-5">Contact</p>
          <a href={`mailto:${contact.email}`} className={a}>Email</a>
          <a href={contact.phoneHref} className={a}>{contact.phone}</a>
          <a href={contact.cv} {...ext} className={a}>CV</a>
        </div>
      </div>
      <div className="wrap pb-24 lg:pb-8">
        <div className="flex flex-col justify-between gap-2 border-t pt-6 text-eyebrow uppercase text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Prashant Kumar Singh</span>
        <span>Designed and built by me</span>
        </div>
      </div>
    </footer>
  );
}

/** Phones: a booking bar that appears once the hero is out of view. */
function MobileBookBar() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 520);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (pathname.startsWith("/book")) return null;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <Link to="/book" className="btn-primary w-full">Book a free 30-min call</Link>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-2">
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="flex-1 motion-safe:animate-page-in">
        <Outlet />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}

/** Shared section head: eyebrow + heading on the left, a short aside on the right. */
export function SectionHead({ eyebrow, heading, aside }: { eyebrow: string; heading: ReactNode; aside?: ReactNode }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-20">
      <div className="lg:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-section mt-8">{heading}</h2>
      </div>
      {aside && <div className="max-w-md text-body-lg text-muted-foreground lg:col-span-5 lg:self-end">{aside}</div>}
    </div>
  );
}
