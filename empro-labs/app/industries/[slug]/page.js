import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import { industries, getIndustryBySlug } from "../data";

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

export default function IndustryPage({ params }) {
  const ind = getIndustryBySlug(params.slug);
  if (!ind) return notFound();

  return (
    <>
      <Header />

      <PageHero
        eyebrow={`${ind.name} · Done-for-you growth system`}
        title={ind.headline}
        lede={ind.lede}
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What's included
          </div>
          <h2>Everything your {ind.name.toLowerCase()} business needs, run by one team</h2>
          <div className="values-grid">
            {ind.bullets.map((b) => (
              <div className="value-card" key={b}>
                <p style={{ margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {ind.caseStudy && (
        <section className="services">
          <div className="wrap">
            <div className="eyebrow">
              <span className="line"></span>
              Real result
            </div>
            <h2>{ind.caseStudy.name}</h2>
            <p className="section-lede">{ind.caseStudy.note}</p>
            <div className="value-card" style={{ maxWidth: "320px" }}>
              <h3 style={{ color: "var(--amber)", fontSize: "1.8rem" }}>{ind.caseStudy.stat}</h3>
              <p>{ind.caseStudy.statLabel}</p>
            </div>
          </div>
        </section>
      )}

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Questions
          </div>
          <h2>{ind.name} questions we get asked most</h2>
          <div className="service-list">
            {ind.faqs.map((f) => (
              <details className="service" key={f.q}>
                <summary>
                  <div><h3>{f.q}</h3></div>
                  <span className="chev">＋</span>
                </summary>
                <div className="service-more">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to book more ${ind.name.toLowerCase()} jobs?`}
        lede="Tell us what's not working — your site, your rankings, or your ads. We'll reply with a scoped plan, not a sales deck."
      />
      <Footer />
    </>
  );
}
