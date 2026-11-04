import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { allMeta, redirects, ORIGIN, NAME, llmsText } from "./seo";

const tree = (url: string) => (
  <StrictMode>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </StrictMode>
);

/** Renders one route to HTML. The first pass starts loading lazy pages; the second renders them in full. */
export async function render(url: string) {
  renderToString(tree(url));
  await import("./pages/CaseStudy");
  await new Promise((r) => setTimeout(r, 0));
  return renderToString(tree(url));
}
