import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";

export const metadata = {
  title: "Services — Empro Labs",
  description: "Web development, SEO, and ads management services from Empro Labs.",
};

const services = [
  {
    href: "/services/web-development",
    title: "Web development",
    body: "Custom builds, GHL funnels, WordPress rebuilds, and Shopify storefronts — architected to handle real traffic, not just a demo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 6L3 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/seo",
    title: "SEO",
    body: "Technical audits, on-page fixes, and content that actually targets what your customers search for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 20L15.2 15.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/ads-management",
    title: "Ads management",
    body: "Paid search and social campaigns managed by a team that reports the numbers that actually matter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 10V14C4 14.55 4.45 15 5 15H7L10 19V5L7 9H5C4.45 9 4 9.45 4 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 9C15 9.8 15.6 10.85 15.6 12C15.6 13.15 15 14.2 14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16.5 6.5C18.2 7.9 19.2 9.85 19.2 12C19.2 14.15 18.2 16.1 16.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="What we do"
        title="Three services, one accountable team"
        lede="Pick a service below to see exactly how we work, what's included, and the kind of results past clients have seen."
      />

      <section className="services">
        <div className="wrap">
          <div className="service-list">
            {services.map((s) => (
              <Link href={s.href} className="service" key={s.href}>
                <div className="icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
