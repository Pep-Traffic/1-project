import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import Faq from "../../components/Faq";

export const metadata = {
  title: "PPC Management for Small Business — Google Ads & LSA",
  description:
    "PPC management for small businesses: Google Search, Local Services Ads and retargeting, managed against cost per booked job, not clicks. Get a free audit.",
  alternates: { canonical: "/services/ads-management" },
};

const faqs = [
  {
    q: "What platforms do you run ads on?",
    a: "Google Search, Google Local Services Ads, Meta (Facebook/Instagram), and retargeting across both — whichever mix actually reaches the customers who book with businesses like yours.",
  },
  {
    q: "Do you connect ads to my GHL, WordPress, or Shopify site?",
    a: "Yes. We wire conversion tracking directly into whatever your site or funnel is built on — a GHL pipeline, a WordPress form, or a Shopify checkout — so cost per lead and cost per booked job are measured against what actually happened, not just an ad-platform pixel guess.",
  },
  {
    q: "What is the Empro Labs System for ads?",
    a: "The same accountable process behind every engagement: set up campaigns around your real funnel, test creative continuously, reallocate spend weekly toward what's converting, and report the numbers that matter — cost per lead and cost per booked job, not impressions.",
  },
  {
    q: "How much should I be spending on ads?",
    a: "It depends on your industry, service area, and margins. We benchmark your current spend (or a target budget, if you're starting fresh) against what we typically see for similar small businesses — free, before you commit to anything.",
  },
  {
    q: "Can you manage ads without also doing our website or SEO?",
    a: "Yes, ads management stands on its own. That said, most of our ad clients also work with us on the website or SEO because a slow or unclear landing page is usually the biggest thing capping ad performance — we'll tell you honestly if that's what's happening.",
  },
];

const services = [
  {
    title: "Campaign setup",
    body: "Search, social, and retargeting campaigns built around your actual sales funnel, not a generic template.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Creative & copy",
    body: "Ad creative and copy tested continuously, not written once and left to decay.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 20L4.7 16.4L15.4 5.7C15.9 5.2 16.7 5.2 17.2 5.7L18.3 6.8C18.8 7.3 18.8 8.1 18.3 8.6L7.6 19.3L4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M13.5 7.5L16.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Spend optimization",
    body: "Weekly budget reallocation toward what's actually converting, not what looked good last quarter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 17L9.5 11.5L13.5 15.5L20 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 9H20V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent reporting",
    body: "You see cost per lead and cost per booked job — not just impressions and clicks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 19V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 19V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdsManagementPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service"
        title="Ads managed by outcome, not just spend"
        lede="We run paid search and social campaigns with one goal: lowering your real cost per booked job, not just your cost per click."
      />

      <section className="services">
        <div className="wrap">
          <h2>An ads management agency that ties spend to booked jobs</h2>
          <p className="section-lede">
            Every ad account we run follows the Empro Labs System — the same accountable process across search,
            social, and retargeting: set up around your real funnel, tested continuously, and reported on the
            numbers that actually matter.
          </p>
          <p className="section-lede">
            Most small businesses we meet are already spending on ads through a rotating cast of freelancers or
            a self-serve dashboard, with no one accountable for whether that spend turns into booked jobs. We take
            over the account, connect it to whatever your site runs on — GHL, WordPress, or Shopify — and report
            cost per lead and cost per booked job every month, not just impressions and clicks.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <h2>Everything from setup to reporting</h2>
          <div className="service-list">
            {services.map((s) => (
              <div className="service" key={s.title} style={{ display: "flex", gap: "20px" }}>
                <div className="icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq title={<>Ads management questions we get asked most</>} lede="The things people usually ask before the first call." items={faqs} />

      <CtaBanner
        title="Get a free quote from a PPC management agency that reports real numbers"
        lede="We'll benchmark your current spend against what we typically see for your industry, and give you a scoped quote — free of charge, no obligation."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
