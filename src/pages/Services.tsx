import { Link } from "react-router-dom";
import { Blueprint, ChatArt, DataArt, ProductArt, StackArt, IllustratedSteps } from "../components/Art";
import { Closing, SectionHead } from "../components/Layout";
import { useTitle } from "../components/useTitle";
import { pricing, process, services } from "../data/site";

const ART = { product: ProductArt, chat: ChatArt, stack: StackArt, data: DataArt };
const pad2 = (n: number) => String(n).padStart(2, "0");

export default function Services() {
  useTitle("Services", "Product design, MVP builds, AI features, technical support and AI training data. Plans from $25 an hour.");
  return (
    <>
      <section className="pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">Services</p>
            <h1 className="display mt-8">
              From idea
              <br />
              <span>to <span className="text-primary">scale.</span></span>
            </h1>
          </div>
          <div className="flex max-w-xl flex-col justify-end lg:col-span-4">
            <p className="text-body-lg text-muted-foreground lg:text-xl lg:leading-relaxed">Design, engineering and AI under one roof, so nothing gets lost between handoffs.</p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap border-t">
          {services.map((s, i) => {
            const Drawing = ART[s.art];
            const inner = (
              <div className="grid gap-10 border-b py-12 md:grid-cols-12 md:items-center md:gap-x-10 md:py-16 lg:gap-x-20">
                <Blueprint className="h-56 border px-6 md:col-span-5 md:h-64 lg:col-span-5">
                  <Drawing className="h-full max-h-56 w-full max-w-[22rem]" />
                </Blueprint>
                <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
                  <p className="eyebrow">{pad2(i + 1)}</p>
                  <h2 className="mt-5 text-3xl font-light tracking-tight md:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl text-muted-foreground lg:text-body-lg">{s.text}</p>
                  <p className="mt-6 text-small text-muted-foreground">{s.items.join(" · ")}</p>
                  {"link" in s && <span className="text-link mt-8 text-primary">AI training</span>}
                </div>
              </div>
            );
            return "link" in s ? <Link key={s.title} to={s.link} className="group block">{inner}</Link> : <div key={s.title}>{inner}</div>;
          })}
        </div>
      </section>

      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="How we work" heading={<>Three steps, <span className="text-primary">no surprises</span></>} />
          <div className="mt-20 md:mt-28">
            <IllustratedSteps steps={process} />
          </div>
        </div>
      </section>

      <section id="pricing" className="section-y scroll-mt-20 border-t">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" heading={<>Simple <span className="text-primary">plans</span></>} aside="Need something different? I'll put together a custom fit." />
          <div className="mt-20 grid gap-8 md:mt-28 lg:mt-32 lg:grid-cols-3 lg:gap-10">
            {pricing.map((p) => (
              <div key={p.name} className={`flex flex-col border p-8 md:p-12 ${p.featured ? "border-primary" : ""}`}>
                <p className="eyebrow">{p.name}</p>
                <p className="mt-8">
                  <span className="text-5xl font-light tracking-tight">{p.price}</span> <span className="text-small text-muted-foreground">{p.unit}</span>
                </p>
                <p className="mt-4 text-muted-foreground">{p.text}</p>
                <ul className="mt-8 flex-1 space-y-4 border-t pt-8 text-small">
                  {p.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.5em] h-1.5 w-1.5 shrink-0 bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/book?topic=product" className={`mt-10 ${p.featured ? "btn-primary" : "btn-ghost"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Closing topic="product" />
    </>
  );
}
