import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";

export const metadata = {
  title: "GoHighLevel Developer & CRM Setup — Empro Labs",
  description:
    "Hire a GoHighLevel (GHL) developer for custom snapshot setup, funnel styling, and webhook automation — GHL builds for small businesses and the agencies that resell it. Get a free quote.",
  alternates: { canonical: "/services/gohighlevel" },
};

const solutions = [
  {
    title: "Custom snapshot setup & sub-account onboarding",
    body: "A snapshot built around how your business actually books work, not a generic template you have to rewire yourself.",
  },
  {
    title: "Custom funnel & membership styling",
    body: "Custom CSS on funnels, membership portals, and calendars so your GHL pages don't look like every other GHL page.",
  },
  {
    title: "Webhook automation & API integrations",
    body: "Connecting GHL to your website, ad accounts, or other tools via webhooks and n8n — so a lead doesn't have to be manually re-entered anywhere.",
  },
  {
    title: "Technical support for agencies reselling GHL",
    body: "If you're an agency running GHL for your own clients, we handle the technical build work behind the scenes so you can stay focused on the account relationship.",
  },
];

const faqs = [
  {
    q: "Do you build GHL snapshots from scratch, or customize existing ones?",
    a: "Both — we'll build a new snapshot around your actual workflow, or take an existing one (yours or a purchased template) and fix what isn't working.",
  },
  {
    q: "Can you connect GHL to my website or other tools?",
    a: "Yes — webhook and API integrations between GHL and your website, ad accounts, or other software are a regular part of our GHL work.",
  },
  {
    q: "Do you set up calls, texts, and reviews inside GHL's Lead Connector CRM?",
    a: "Yes — Lead Connector is the calling, texting, and review layer built into every GHL account, and getting it configured correctly (numbers, templates, review requests) is part of a proper GHL setup, not an afterthought.",
  },
  {
    q: "We're an agency reselling GHL to our own clients — can you work behind the scenes?",
    a: "Yes, we handle the technical build and support work directly so you can stay the face of the account with your client.",
  },
];

export default function GoHighLevelPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service · GoHighLevel"
        title="Your GHL funnel isn't converting. Here's why."
        lede="Most GHL funnels underperform because of the build, not the platform — a snapshot nobody customized, styling nobody fixed, or automations that silently drop leads. We fix the build."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What we build
          </div>
          <h2>GoHighLevel work built around how you actually book jobs</h2>
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
            Real result
          </div>
          <h2>Bayview Heating</h2>
          <p className="section-lede">
            Built a multi-step GHL funnel with missed-call text-back automation, so an emergency
            heating call at 8pm gets a reply in seconds instead of going to voicemail.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <h3 style={{ color: "var(--amber)", fontSize: "1.8rem" }}>3x</h3>
              <p>lead response speed</p>
            </div>
            <div className="value-card">
              <h3 style={{ color: "var(--amber)", fontSize: "1.8rem" }}>28s</h3>
              <p>avg. first reply, via Rapid Comfort Co's GHL automation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Questions
          </div>
          <h2>GoHighLevel questions we get asked most</h2>
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
        title="Ready to hire a GoHighLevel developer who won't disappear mid-build?"
        lede="Tell us what's slow, broken, or missing — we'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
