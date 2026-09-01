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
  { title: "Campaign setup", body: "Search, social, and retargeting campaigns built around your actual sales funnel, not a generic template." },
  { title: "Creative & copy", body: "Ad creative and copy tested continuously, not written once and left to decay." },
  { title: "Spend optimization", body: "Weekly budget reallocation toward what's actually converting, not what looked good last quarter." },
  { title: "Transparent reporting", body: "You see cost per lead and cost per booked job — not just impressions and clicks." },
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
                <div className="icon"></div>
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
