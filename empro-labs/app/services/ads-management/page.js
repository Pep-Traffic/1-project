import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import AdsDashboard from "./AdsDashboard";

export const metadata = {
  title: "Ads Management — Empro Labs",
  description: "Paid search and social ads management from Empro Labs.",
};

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
          <div className="eyebrow">
            <span className="line"></span>
            Live example
          </div>
          <h2>What a managed campaign looks like</h2>
          <p className="section-lede">
            A simulation of the kind of live campaign dashboard you'd get access to as a client.
          </p>
          <AdsDashboard />
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What's included
          </div>
          <h2>Everything from setup to reporting</h2>
          <div className="service-list">
            {services.map((s) => (
              <div className="service" key={s.title} style={{ display: "flex", gap: "20px", padding: "34px 0" }}>
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

      <CtaBanner
        title="Curious what your cost per lead should be?"
        lede="We'll benchmark your current spend against what we typically see for your industry — free of charge."
      />
      <Footer />
    </>
  );
}
