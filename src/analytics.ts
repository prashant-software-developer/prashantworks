/** Google Analytics 4. Runs only on the live site, so local testing isn't counted. */
const GA_ID = "G-N1JJK5RD84";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

const enabled = () => typeof window !== "undefined" && import.meta.env.PROD && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname);

export function initAnalytics() {
  if (!enabled() || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent by trackPageView on every route change.
  window.gtag("config", GA_ID, { send_page_view: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function trackPageView(path: string) {
  if (!enabled() || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path, page_location: location.href, page_title: document.title });
}
