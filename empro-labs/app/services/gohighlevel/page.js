import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import Faq from "../../components/Faq";

export const metadata = {
  title: "GoHighLevel Developer — GHL Funnels & CRM Setup",
  description:
    "Hire a GoHighLevel developer for snapshot setup, funnel and membership styling, webhook automation and CRM builds. Typically live in 2-4 weeks.",
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

      <Faq title={<>GoHighLevel questions we get asked most</>} items={faqs} />

      <CtaBanner
        title="Ready to hire a GoHighLevel developer who won't disappear mid-build?"
        lede="Tell us what's slow, broken, or missing — we'll reply with a scoped quote, not a sales deck."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
