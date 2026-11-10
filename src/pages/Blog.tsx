import { Link } from "react-router-dom";
import { Closing } from "../components/Layout";
import { useTitle } from "../components/useTitle";
import { heroGif, heroStill, postPath, readingTime, sortedPosts, trackLabel, type BlogPost } from "../data/blog";

const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

function Card({ p, eager }: { p: BlogPost; eager?: boolean }) {
  return (
    <article>
      <Link to={postPath(p)} className="group block">
        <div className="shot aspect-video overflow-hidden">
          <img
            src={heroGif(p)}
            alt={p.heroAlt}
            width={1200}
            height={675}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroStill(p); }}
          />
        </div>
        <p className="eyebrow mt-6">{trackLabel[p.track]}</p>
        <h2 className="mt-3 text-2xl font-light tracking-tight group-hover:text-primary">{p.title}</h2>
        <p className="mt-3 text-body text-muted-foreground">{p.standfirst}</p>
        <p className="mt-4 text-small text-muted-foreground">
          <time dateTime={p.date}>{fmt(p.date)}</time> · {readingTime(p)} min read
        </p>
      </Link>
    </article>
  );
}

export default function Blog() {
  useTitle("Blog", "Short, sourced write-ups on building AI products and benchmark-grade AI training data. The full version of every post on X, Threads and Instagram.");
  const list = sortedPosts();
  return (
    <>
      <section className="pb-12 pt-20 md:pt-28">
        <div className="wrap">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-8">
              <p className="eyebrow">Blog</p>
              <h1 className="display mt-8">
                The full version <span className="text-primary">of every post.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end text-body-lg text-muted-foreground lg:col-span-4 lg:text-xl lg:leading-relaxed">
              One illustrated piece a day on building AI products and the data that trains them. Every number has a source. Every post ends with a free next step.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-8 md:pb-32">
        <div className="wrap">
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
            {list.map((p, i) => <Card key={p.slug} p={p} eager={i < 2} />)}
          </div>
        </div>
      </section>

      <Closing
        eyebrow="Free first step"
        heading={<>Read something useful?<br /><span className="text-primary">Send me the thing you're working on.</span></>}
        body="Founders get a one-page teardown. AI labs get a written review of one task within 48 hours. Both are free."
      />
    </>
  );
}
