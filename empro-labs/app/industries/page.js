import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { industries } from "./data";

export const metadata = {
  title: "Industries We Serve — GHL, WordPress & Shopify for Home Services — Empro Labs",
  description:
    "Empro Labs builds the website, SEO, and ads system for roofing, HVAC, plumbing, electrical, and remodeling companies — booked more jobs, not just more clicks.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Industries"
        title="Built for home service businesses"
        lede="The website, SEO, and ads system changes by trade — what a roofing company needs to book an estimate isn't what an HVAC company needs to book an emergency repair. Pick your industry below."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Pick your trade
          </div>
          <h2>Industries we build for</h2>
          <p className="section-lede">
            Every industry page below runs on the Empro Labs System — website, SEO, and ads, tuned to how that trade actually books work.
          </p>
          <div className="values-grid">
            {industries.map((ind) => (
              <Link href={`/industries/${ind.slug}`} className="value-card" key={ind.slug} style={{ display: "block" }}>
                <h3>{ind.name}</h3>
                <p>{ind.lede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't see your trade listed?"
        lede="We work with home service businesses beyond this list too — tell us what you do and we'll tell you honestly if we're a fit."
      />
      <Footer />
    </>
  );
}
