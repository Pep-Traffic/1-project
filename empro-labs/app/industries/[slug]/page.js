import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import Faq from "../../components/Faq";
import { industries, getIndustryBySlug } from "../data";
import { pieceIcon, painIcons } from "../icons";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }) {
  const ind = getIndustryBySlug(params.slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Website, SEO & Ads Agency — Empro Labs`,
    description: ind.lede,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

const BUILD_COLS = ["Scoped", "In build", "Live"];
const SIZES = ["One truck", "Three to five crews", "Multiple locations"];

export default function IndustryPage({ params }) {
  const ind = getIndustryBySlug(params.slug);
  if (!ind) return notFound();

  return (
    <>
      <Header />

      <PageHero title={ind.headline} lede={ind.lede} />

      <section className="services ind-leaks">
        <div className="wrap">
          <h2>Where {ind.shortName} jobs leak out</h2>
          <p className="section-lede">{ind.painLede}</p>
          <div className="leak-grid">
            {ind.pains.map((p, i) => (
              <div className="leak-card" key={p.title}>
                <div className="leak-icon">{painIcons[i]}</div>
                <h3 className="leak-title">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work band-alt">
        <div className="wrap">
          <h2>The intake, the text-back, and the pipeline we&apos;d ship for you</h2>
          <p className="section-lede">{ind.mechLede}</p>
          <div className="mech-grid">
            <div className="mech-card">
              <h3>Quote form fields</h3>
              <ul className="mech-fields">
                {ind.intake.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mech-card">
              <h3>Missed-call text-back</h3>
              <p className="mech-sms">{ind.sms}</p>
              <p className="mech-sms-meta">
                <i aria-hidden="true"></i>Automatic — fires when a call goes unanswered
              </p>
            </div>
            <div className="mech-card">
              <h3>Pipeline stages</h3>
              <ol className="mech-stages">
                {ind.stages.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mech-caption">
            This is the real configuration, not a screenshot of somebody else&apos;s dashboard. Every line of it gets
            rewritten with you before it goes live.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <h2>The four pieces, set up for {ind.shortName}</h2>
          <div className="service-list" style={{ marginTop: "40px" }}>
            {ind.pieces.map((p) => (
              <Link href={p.href} className="service" key={p.label}>
                <div className="icon">{pieceIcon[p.label]}</div>
                <div className="svc-body">
                  <h3>{p.label}</h3>
                  <p>{p.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process3">
        <div className="wrap">
          <h2>How the build runs</h2>
          <p className="section-lede">
            Three stages, and the six things that move across them on a {ind.shortName} build.
          </p>
          <div className="p3-board p3-board-stack">
            <div className="p3-cols">
              {BUILD_COLS.map((title, i) => (
                <div className="p3-col" key={title}>
                  <div className={`p3-numrow${i === 2 ? " p3-numrow-last" : ""}`}>
                    <span className="p3-num">{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{ind.buildCols[i]}</p>
                </div>
              ))}
            </div>
            <div className="p3-lanes">
              {ind.pills.map((t) => (
                <div className="p3-pill" key={t}>
                  <i></i>
                  <span className="p3-task">{t}</span>
                  <span className="p3-status" aria-hidden="true">
                    <em className="s1">Scoped</em>
                    <em className="s2">Building</em>
                    <em className="s3">
                      <svg viewBox="0 0 16 16" fill="none" width="11" height="11">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Live
                    </em>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services band-alt">
        <div className="wrap">
          <h2>What we&apos;d tell you at your size</h2>
          <p className="section-lede">
            The order changes depending on how many trucks you run. This is what we&apos;d say before you spent
            anything.
          </p>
          <div className="values-grid">
            {SIZES.map((t, i) => (
              <div className="value-card" key={t}>
                <h3>{t}</h3>
                <p>{ind.sizes[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        title={<>{ind.name} questions we get asked most</>}
        lede="The things people ask before the first call."
        items={ind.faqs}
      />

      <CtaBanner
        title={`Get a free quote for your ${ind.shortName} company`}
        lede="Tell us what's not working — your site, your rankings, or your ads. We'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
