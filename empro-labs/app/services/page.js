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
  },
  {
    href: "/services/seo",
    title: "SEO",
    body: "Technical audits, on-page fixes, and content that actually targets what your customers search for.",
  },
  {
    href: "/services/ads-management",
    title: "Ads management",
    body: "Paid search and social campaigns managed by a team that reports the numbers that actually matter.",
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
                <div className="icon"></div>
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
