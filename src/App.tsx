import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
/* Case studies carry most of the site's text, so they load as their own chunk. */
export const CaseStudy = lazy(() => import("./pages/CaseStudy"));
import Gallery from "./pages/Gallery";
import AiTraining from "./pages/AiTraining";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Book from "./pages/Book";
import { projects } from "./data/projects";
import { trackPageView } from "./analytics";
import { Analytics } from "@vercel/analytics/react";

const onVercel = () => import.meta.env.PROD && typeof window !== "undefined" && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Reports each page change to Google Analytics, after the page has set its title. */
function PageViews() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const t = setTimeout(() => trackPageView(pathname + search), 0);
    return () => clearTimeout(t);
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageViews />
      {/* Vercel Analytics only exists on the Vercel deployment; skip it locally so previews have no 404s. */}
      {onVercel() && <Analytics />}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><CaseStudy /></Suspense>} />
          {projects.flatMap((p) => [p.slug === "ringover" ? "ringover" : "", ...(p.legacy ?? [])].filter(Boolean).map((old) => (
            <Route key={old} path={old} element={<Navigate to={`/work/${p.slug}`} replace />} />
          )))}
          <Route path="gallery" element={<Gallery />} />
          <Route path="ai-training" element={<AiTraining />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<Book />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
