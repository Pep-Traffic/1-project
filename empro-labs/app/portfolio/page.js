import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioRing from "./PortfolioRing";
import FeatureShowcase from "../components/FeatureShowcase";

export const metadata = {
  title: "Portfolio — Empro Labs",
  description:
    "Web development, GHL, WordPress, Shopify, SEO, and ads projects delivered by Empro Labs, all built on the Empro Lab System.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Selected work"
        title="Projects across the whole stack"
        lede="From custom web builds to GHL automations, WordPress rebuilds, Shopify storefronts, SEO campaigns, and paid ads — every project below ran on the Empro Labs System. Filter by category to see relevant work."
      />

      <PortfolioRing />

      <section className="work">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>

      <FeatureShowcase
        num="01"
        label="How our sites are built"
        title="Every site we ship is built to get the quote request."
        lede="The projects above share one blueprint: a clear offer, pages that load fast, and a form that reaches your CRM the moment someone submits it."
        points={["A clear offer above the fold", "Fast on mobile, tested before launch", "Forms that reach your CRM instantly", "Trust signals where visitors decide", "Built on GHL, WordPress, or Shopify", "Tracked so you see what works"]}
        cta={{ href: "/contact", label: "Get a free audit" }}
      />

      <FeatureShowcase
        num="02"
        label="What happens after launch"
        title="The site starts the conversation. Follow-up wins the job."
        lede="A quote request or missed call is only worth something if someone answers fast. We wire follow-up into every site we build so no lead goes cold."
        variant="followup"
        reverse
        points={["Missed calls answered by text at once", "New leads alerted to your phone", "Booking links sent automatically", "Reviews requested after each job", "Old quotes followed up on", "Everything visible in one CRM"]}
        cta={{ href: "/contact", label: "Start a project" }}
      />

      <CtaBanner />
      <Footer />
    </>
  );
}
