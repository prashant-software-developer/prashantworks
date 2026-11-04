/**
 * Writes real HTML for every route after `vite build`, so search engines and link previews see full content,
 * titles, descriptions and structured data without running JavaScript.
 *   dist/index.html            → template
 *   dist-ssr/entry-server.js   → render(url), allMeta(), redirects
 * Output: dist/<route>/index.html, dist/404.html, dist/sitemap.xml, dist/_redirects, vercel redirects.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssr = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function head(m) {
  const url = `${ssr.ORIGIN}${m.path === "/" ? "/" : m.path}`;
  const ld = { "@context": "https://schema.org", "@graph": m.jsonLd };
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${m.path.startsWith("/work/") ? "article" : "website"}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${m.image}" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${m.image}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

function page(m, html) {
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(m))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

const metas = ssr.allMeta();
let count = 0;
for (const m of metas) {
  const html = await ssr.render(m.path);
  const file = m.path === "/" ? path.join(dist, "index.html") : path.join(dist, m.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const out = page(m, html);
  fs.writeFileSync(file, out);
  // Also /about.html etc., so hosts that map /about → about.html (Vercel cleanUrls, local preview) serve the right page.
  if (m.path !== "/") fs.writeFileSync(path.join(dist, `${m.path}.html`), out);
  count++;
}

// 404
const nf = { path: "/404", title: `Page not found · ${ssr.NAME}`, description: "This page moved. See the work or book a call.", image: `${ssr.ORIGIN}/og.jpg`, jsonLd: [] };
fs.writeFileSync(path.join(dist, "404.html"), page(nf, await ssr.render("/this-page-does-not-exist")).replace('content="index,follow,max-image-preview:large"', 'content="noindex"'));

// Sitemap, with images so case-study screens can show up in image search
const today = new Date().toISOString().slice(0, 10);
const loc = (m) => `${ssr.ORIGIN}${m.path === "/" ? "/" : m.path}`;
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  metas
    .map((m) => {
      const imgs = (m.images ?? []).map((u) => `<image:image><image:loc>${u}</image:loc></image:image>`).join("");
      return `  <url><loc>${loc(m)}</loc><lastmod>${today}</lastmod><priority>${m.priority}</priority>${imgs}</url>`;
    })
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// For AI assistants and answer engines (GEO): a short map of the site, and the full case studies as plain text
fs.writeFileSync(path.join(dist, "llms.txt"), ssr.llmsText(false));
fs.writeFileSync(path.join(dist, "llms-full.txt"), ssr.llmsText(true));

// Netlify redirects (Vercel reads vercel.json)
const lines = ssr.redirects.map((r) => `${r.from}  ${r.to}  301`);
lines.push("/*  /404.html  404");
fs.writeFileSync(path.join(dist, "_redirects"), lines.join("\n") + "\n");

console.log(`prerendered ${count} pages, sitemap with ${metas.length} urls, ${ssr.redirects.length} redirects`);
