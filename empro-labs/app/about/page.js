import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import StatsBand from "./StatsBand";

export const metadata = {
  title: "About — Empro Labs",
  description:
    "Empro Labs is a software development agency for founders who need production-grade systems, not a demo.",
};

const team = [
  {
    slug: "umair-gujjar",
    photo: "/team/umair-gujjar.jpeg",
    name: "Umair Gujjar",
    role: "Senior — GHL, WordPress, Shopify, Etsy, ClickFunnels & n8n Automations",
  },
  {
    slug: "adnan-javed",
    photo: "/team/adnan-javed.png",
    name: "Adnan Javed",
    role: "GHL, SEO, WordPress & Shopify Expert",
  },
  { initials: "MR", name: "Maya R. Chen", role: "Product Design Lead" },
  { initials: "OT", name: "Owen Tran", role: "DevOps & Infrastructure" },
  { initials: "PD", name: "Priya Deshmukh", role: "Engagement Manager" },
];

const values = [
  {
    title: "Ship real systems, not demos",
    body: "Everything we build is architected to handle production traffic from day one, not just look good in a pitch.",
  },
  {
    title: "Say the true timeline",
    body: "If something will take six weeks, we say six weeks. Founders come back to us because the estimate holds.",
  },
  {
    title: "Stay on after launch",
    body: "We don't disappear after the handoff. Every engagement includes a real support plan, not a goodbye email.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="About Empro Labs"
        title="Engineers who stay past the handoff"
        lede="We started Empro Labs because too many good products were being built by agencies that disappeared the moment the invoice was paid. We wanted to build the kind of team we'd want to hire ourselves."
      />

      <StatsBand />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            What we believe
          </div>
          <h2>A few things we won't compromise on</h2>
          <p className="section-lede">
            These aren't values on a poster — they're the reasons clients come back for a second and third project.
          </p>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            The team
          </div>
          <h2>A small, senior team</h2>
          <p className="section-lede">
            No account managers relaying messages to engineers you'll never talk to. You work directly with the people building your product.
          </p>
          <div className="team-grid">
            {team.map((member) =>
              member.slug ? (
                <Link href={`/about/team/${member.slug}`} className="team-card team-card-link" key={member.name}>
                  <div className="team-avatar team-avatar-photo">
                    <img src={member.photo} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </Link>
              ) : (
                <div className="team-card" key={member.name}>
                  <div className="team-avatar">{member.initials}</div>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to work with us?"
        lede="Tell us what you're building. We'll tell you honestly whether we're the right fit."
      />

      <Footer />
    </>
  );
}
