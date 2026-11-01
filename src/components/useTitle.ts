import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NAME, ORIGIN, staticMeta } from "../seo-pages";

/** Keeps the browser title, description and canonical URL in step with the page (the pre-renderer writes the same values). */
export function useTitle(title: string, description?: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const m = staticMeta[clean];
    document.title = m?.title ?? (title ? `${title} · ${NAME}` : `${NAME} · Freelance AI Product Designer & Developer`);
    const desc = m?.description ?? description;
    if (desc) document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${ORIGIN}${clean}`);
  }, [pathname, title, description]);
}
