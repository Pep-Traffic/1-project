import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";

export const metadata = {
  title: "Shopify Developer & Website Design — Empro Labs",
  description:
    "Hire a Shopify developer for custom theme design, speed optimization, and app integration — small business Shopify stores built to convert, not just look good in a demo. Get a free quote.",
  alternates: { canonical: "/services/shopify" },
};

const solutions = [
  {
    title: "Custom theme design & Liquid development",
    body: "Custom sections and theme tweaks built around what you're actually selling, not a generic template with your logo dropped in.",
  },
  {
    title: "Speed optimization",
    body: "Page load audits and fixes targeting real Core Web Vitals scores — most Shopify slowdowns come from app scripts stacking up, not the theme itself.",
  },
  {
    title: "App integration & checkout flow",
    body: "Connecting your store to the apps and tools you actually use, without seven scripts fighting each other on every page load.",
  },
  {
    title: "Conversion-focused audits",
    body: "A straight look at where visitors are dropping off before checkout, and what to fix first.",
  },
];

const faqs = [
  {
    q: "Can you speed up my Shopify store without removing my apps?",
    a: "Usually yes. Most slowdowns come from how scripts load, not the apps themselves — we audit which ones are actually costing you load time before recommending removing anything.",
  },
  {
    q: "Do you build new Shopify stores or just fix existing ones?",
    a: "Both. A lot of our Shopify work is fixing a store a previous freelancer or theme-builder left half-finished, alongside new builds.",
  },
  {
    q: "Can you help migrate from WooCommerce or another platform to Shopify?",
    a: "Yes — migrations are scoped to preserve your existing product data and SEO rankings, not just move the storefront.",
  },
];

export default function ShopifyPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service · Shopify"
        title="Hire a Shopify developer who builds for conversions, not just launch day"
        lede="Custom theme design, speed optimization, and app integration for small business Shopify stores that load fast and actually sell — not just look good in a screenshot."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What we build
          </div>
          <h2>Shopify website design built to convert</h2>
          <div className="values-grid">
            {solutions.map((s) => (
              <div className="value-card" key={s.title}>
                <h3>{s.title}</h3>
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
          <h2>Shopify questions we get asked most</h2>
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
        title="Ready to hire a Shopify developer who reports real numbers?"
        lede="Tell us what's slow, broken, or missing — we'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
