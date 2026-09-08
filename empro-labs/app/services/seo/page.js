import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import TrafficChart from "./TrafficChart";

export const metadata = {
  title: "SEO Agency for Small Businesses — Empro Labs",
  description:
    "Empro Labs is an SEO agency for small businesses running on GoHighLevel, WordPress, or Shopify. Technical audits, on-page fixes, and content strategy built on the Empro Lab System, tracked back to leads and booked jobs — not just rankings.",
  alternates: { canonical: "/services/seo" },
};

const faqs = [
  {
    q: "Do you do SEO for GoHighLevel, WordPress, and Shopify sites?",
    a: "Yes — all three, plus custom-built sites. Each platform has different technical constraints (GHL funnel structure, WordPress plugin bloat, Shopify theme liquid), so the audit and fixes are tailored to the platform your site actually runs on, not a one-size-fits-all checklist.",
  },
  {
    q: "Is this local SEO or national SEO?",
    a: "Most of our clients are local service businesses — roofers, HVAC companies, home services — so most engagements are local SEO: Google Business Profile, local landing pages, and citations, alongside the technical and content work. We scope national SEO the same way when that's the actual goal.",
  },
  {
    q: "What is the Empro Labs System, exactly?",
    a: "It's the repeatable process behind every SEO engagement we run: audit first, fix the technical blockers, build content around real search intent, then report on rankings and traffic monthly — always tied back to leads, not vanity metrics.",
  },
  {
    q: "How long until we see results?",
    a: "Technical fixes can move rankings within weeks. Content and authority-driven gains typically show up over one to two quarters — we set expectations up front during the audit, not after you've signed.",
  },
  {
    q: "Do you also build the website, or just do SEO?",
    a: "Both, if you need it. A lot of our SEO clients come to us with a site that's actively working against their rankings — slow, unindexable, or built on an outdated theme — so we often pair SEO with a WordPress, Shopify, or GHL rebuild.",
  },
];

const steps = [
  { num: "01", title: "Technical audit", body: "We crawl the site and fix what's actually blocking rankings — speed, indexing, structure." },
  { num: "02", title: "On-page fixes", body: "Titles, headers, internal linking, and schema, tuned to what your customers actually search." },
  { num: "03", title: "Content that ranks", body: "Pages built around real search intent, not just keyword density." },
  { num: "04", title: "Track and report", body: "Monthly reporting on rankings, traffic, and — most importantly — leads." },
];

export default function SeoPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service"
        title="SEO that targets leads, not just rankings"
        lede="We fix the technical issues holding your site back, then build content and links around the searches your actual customers are making."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Why small businesses hire us
          </div>
          <h2>An SEO agency built for GHL, WordPress &amp; Shopify sites</h2>
          <p className="section-lede">
            Most SEO agencies hand you a generic checklist and a monthly PDF. We run the Empro Labs System instead — an
            SEO process built specifically around the platforms small businesses actually use.
          </p>
          <p className="section-lede">
            If you're on GoHighLevel, we know which funnel and page settings quietly block indexing. If you're on
            WordPress, we know which plugins and themes are the usual cause of a slow, unranked site. If you're on
            Shopify, we know how to structure collections and product pages so they don't cannibalize each other in
            search. Whatever platform you're on, the audit and the fix are built around it, not around a template.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Live example
          </div>
          <h2>Organic traffic, month over month</h2>
          <p className="section-lede">
            A simulation of the kind of growth curve a well-run SEO engagement produces over its first two quarters.
          </p>
          <TrafficChart />
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            How it works
          </div>
          <h2>Four steps, repeated monthly</h2>
          <div className="steps">
            <div className="step-dot four"></div>
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Questions
          </div>
          <h2>SEO questions we get asked most</h2>
          <p className="section-lede">The things people usually ask before the first call.</p>
          <div className="service-list">
            {faqs.map((f) => (
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
        title="Curious what an audit would find?"
        lede="We'll run a free technical audit and show you exactly where your site is leaking rankings."
      />
      <Footer />
    </>
  );
}
