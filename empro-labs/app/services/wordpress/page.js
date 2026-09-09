import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";

export const metadata = {
  title: "WordPress Developer & Website Design — Empro Labs",
  description:
    "Hire a WordPress developer for custom Elementor and Gutenberg builds, speed and security hardening, and WooCommerce rebuilds — small business website design that loads fast and actually ranks. Get a free quote.",
  alternates: { canonical: "/services/wordpress" },
};

const solutions = [
  {
    title: "Custom Elementor & Gutenberg development",
    body: "Lightweight, zero-bloat page builds — no stacking five plugins on top of each other to get a section to look right.",
  },
  {
    title: "Speed & security hardening",
    body: "Caching, database cleanup, and malware protection built in from the start, not bolted on after a site gets hacked or crawls to a stop.",
  },
  {
    title: "WooCommerce rebuilds",
    body: "Legacy WooCommerce stores rebuilt onto a clean, fast checkout flow without losing existing product data or SEO rankings.",
  },
  {
    title: "Custom plugin fixes & API integrations",
    body: "Connecting WordPress to your CRM, booking system, or GHL account via REST API — without a fragile stack of no-code plugins.",
  },
];

const faqs = [
  {
    q: "Do you rebuild existing WordPress sites, or only build new ones?",
    a: "Both — most of our WordPress work is actually rescuing an existing site: a slow theme, a plugin conflict, or a page builder nobody on your team can maintain.",
  },
  {
    q: "Can you speed up my WordPress site without a full rebuild?",
    a: "Often yes. A technical audit tells us whether it's a caching/hosting fix, a bloated theme, or something that genuinely needs a rebuild — we'll tell you honestly which one applies before quoting anything.",
  },
  {
    q: "Do you work with WooCommerce stores?",
    a: "Yes — WooCommerce rebuilds and ongoing maintenance are a regular part of our WordPress work, alongside standard business and service sites.",
  },
];

export default function WordPressPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service · WordPress"
        title="Hire a WordPress developer who treats speed as a requirement"
        lede="Custom Elementor and Gutenberg builds, WooCommerce rebuilds, and speed and security hardening for small businesses who need a site that actually loads fast and ranks — not just looks good in a demo."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What we build
          </div>
          <h2>WordPress website design built to be maintained, not just launched</h2>
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
          <h2>WordPress questions we get asked most</h2>
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
        title="Ready to hire a WordPress developer who won't disappear after launch?"
        lede="Tell us what's slow, broken, or missing — we'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
