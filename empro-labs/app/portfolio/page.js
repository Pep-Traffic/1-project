import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import PortfolioGrid from "./PortfolioGrid";

export const metadata = {
  title: "Portfolio — Empro Labs",
  description: "Web development, GHL, WordPress, Shopify, SEO, and ads projects delivered by Empro Labs.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Selected work"
        title="Projects across the whole stack"
        lede="From custom web builds to GHL automations, WordPress rebuilds, Shopify storefronts, SEO campaigns, and paid ads — filter by category to see relevant work."
      />

      <section className="work">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
