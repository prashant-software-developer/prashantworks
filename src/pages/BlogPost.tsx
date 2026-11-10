import { Link, useParams } from "react-router-dom";
import { Closing } from "../components/Layout";
import { Inline } from "../components/Inline";
import { useTitle } from "../components/useTitle";
import NotFound from "./NotFound";
import { heroGif, heroStill, postBySlug, postPath, readingTime, sortedPosts, trackLabel, type Block } from "../data/blog";

const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const prose = "text-body-lg leading-[1.75] text-muted-foreground";

function Body({ b }: { b: Block }) {
  switch (b.t) {
    case "h2":
      return <h2 className="mt-16 text-2xl font-light tracking-tight text-foreground md:text-3xl">{b.text}</h2>;
    case "p":
      return <p className={`mt-6 ${prose}`}><Inline text={b.text} /></p>;
    case "ul":
      return (
        <ul className={`mt-6 space-y-3 ${prose}`}>
          {b.items.map((x) => (
            <li key={x} className="flex gap-4">
              <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-primary" />
              <span><Inline text={x} /></span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className={`mt-6 space-y-3 ${prose}`}>
          {b.items.map((x, i) => (
            <li key={x} className="flex gap-4">
              <span className="w-6 shrink-0 text-small leading-[1.9] text-foreground">{i + 1}.</span>
              <span><Inline text={x} /></span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="relative mt-10 overflow-hidden border bg-[hsl(225_20%_98%)] p-7 md:p-9">
          <div aria-hidden="true" className="blueprint-grid opacity-60" />
          <div className="relative">
            <p className="text-title text-foreground">{b.title}</p>
            <p className="mt-3 text-body text-muted-foreground"><Inline text={b.text} /></p>
          </div>
        </aside>
      );
    case "table":
      return (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-body">
            <thead>
              <tr>{b.head.map((h) => <th key={h} className="border-b-2 border-foreground py-3 pr-6 font-medium text-foreground">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className={`border-b py-3 pr-6 align-top ${j === 0 ? "text-foreground" : "text-muted-foreground"}`}><Inline text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "gallery":
      return (
        <figure className="mt-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {b.items.map((it) => (
              <img key={it.src} src={it.src} alt={it.alt} width={1080} height={1350} loading="lazy" decoding="async" className="shot" />
            ))}
          </div>
          {b.caption && <figcaption className="mt-4 text-small text-muted-foreground">{b.caption}</figcaption>}
        </figure>
      );
  }
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const p = postBySlug(slug);
  useTitle(p?.title ?? "Blog", p?.standfirst);
  if (!p) return <NotFound />;

  const all = sortedPosts();
  const i = all.findIndex((x) => x.slug === p.slug);
  const newer = all[i - 1];
  const older = all[i + 1];

  return (
    <>
      <article className="pb-16 pt-10 md:pt-14">
        <div className="wrap">
          <div className="mx-auto max-w-[840px]">
            <nav aria-label="Breadcrumb" className="text-eyebrow uppercase text-muted-foreground">
              <Link to="/blog" className="hover:text-foreground">Blog</Link> <span aria-hidden="true">/</span> Day {p.day}
            </nav>

            {/* Illustration first */}
            <figure className="shot mt-8 aspect-video overflow-hidden">
              <img
                src={heroGif(p)}
                alt={p.heroAlt}
                width={1200}
                height={675}
                decoding="async"
                className="h-full w-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroStill(p); }}
              />
            </figure>

            <header className="mt-12">
              <p className="eyebrow">{trackLabel[p.track]}</p>
              <h1 className="mt-6 text-section md:text-[2.75rem] md:leading-[1.1]">{p.title}</h1>
              <p className="mt-6 max-w-[720px] text-body-lg text-muted-foreground lg:text-xl lg:leading-relaxed">{p.standfirst}</p>
              <p className="mt-6 text-small text-muted-foreground">
                Prashant Kumar Singh · <time dateTime={p.date}>{fmt(p.date)}</time> · {readingTime(p)} min read
              </p>
            </header>

            <div className="mt-6 max-w-[720px]">
              {p.body.map((b, k) => <Body key={k} b={b} />)}
            </div>

            {/* The mix: what this means for each reader */}
            <section className="mt-20 grid gap-10 border-t pt-12 md:grid-cols-2 md:gap-14">
              <div>
                <p className="eyebrow">If you're a founder</p>
                <p className="mt-4 text-body text-muted-foreground">{p.forFounders}</p>
              </div>
              <div>
                <p className="eyebrow">If you run an AI lab or data team</p>
                <p className="mt-4 text-body text-muted-foreground">{p.forLabs}</p>
              </div>
            </section>

            <section className="mt-16 border-t pt-10">
              <p className="eyebrow">Sources</p>
              <ol className="mt-5 space-y-2 text-small text-muted-foreground">
                {p.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground">{s.title}</a>
                  </li>
                ))}
              </ol>
            </section>

            <nav aria-label="More posts" className="mt-16 grid gap-6 border-t pt-10 sm:grid-cols-2">
              {older ? (
                <Link to={postPath(older)} className="group">
                  <p className="eyebrow">Previous</p>
                  <p className="mt-2 text-title group-hover:text-primary">{older.title}</p>
                </Link>
              ) : <span />}
              {newer && (
                <Link to={postPath(newer)} className="group sm:text-right">
                  <p className="eyebrow">Next</p>
                  <p className="mt-2 text-title group-hover:text-primary">{newer.title}</p>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </article>

      <Closing
        eyebrow="Free first step"
        heading={<>{p.cta.label}.<br /><span className="text-primary">No call needed, no commitment.</span></>}
        body={p.track === "Founders" ? "Send your product or idea. You get one page: what to fix, what to cut, what I'd build first." : p.track === "AI labs" ? "Send one task, rubric or test suite. NDA on request, or a sanitised sample. Written review within 48 hours." : "Founders get a one-page teardown. AI labs get a written review of one task within 48 hours."}
        topic={p.cta.topic}
      />
    </>
  );
}
