import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import Faq from "../../components/Faq";

export const metadata = {
  title: "Shopify Development Agency — Themes, Liquid & Speed",
  description:
    "A Shopify development agency for custom themes, Liquid development, checkout fixes and Core Web Vitals work. Scoped after a store audit. Get a quote.",
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
        title="Your store gets traffic. It's not converting."
        lede="Most underperforming Shopify stores aren't a traffic problem — they're a slow theme, an app-script pileup, or a checkout flow nobody's audited. We fix what's actually costing you sales."
      />

      <section className="services">
        <div className="wrap">
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
          <h2>Shopify results coming soon</h2>
          <p className="section-lede">
            We're building out our Shopify portfolio and will publish real client numbers here as
            soon as we have them — not placeholder projects. In the meantime, see what we've shipped
            on <a href="/services/wordpress" style={{ color: "var(--amber)" }}>WordPress</a> and{" "}
            <a href="/services/gohighlevel" style={{ color: "var(--amber)" }}>GoHighLevel</a>.
          </p>
        </div>
      </section>

      <Faq title={<>Shopify questions we get asked most</>} items={faqs} />

      <CtaBanner
        title="Ready to hire a Shopify developer who reports real numbers?"
        lede="Tell us what's slow, broken, or missing — we'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
