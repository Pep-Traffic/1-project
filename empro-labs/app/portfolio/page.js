import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioRing from "./PortfolioRing";
import FeatureShowcase from "../components/FeatureShowcase";

export const metadata = {
  title: "Web Design Portfolio — Live Sites We've Built",
  description:
    "Live websites built by Empro Labs on GoHighLevel, WordPress, WooCommerce and custom code — insurance, medical, e-commerce, education and nonprofit work you can open and inspect.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Seven live sites. Open any of them."
        lede="GoHighLevel, WordPress, WooCommerce and custom builds across insurance, dental and medical, e-commerce, education and nonprofit work. No mockups and no case-study PDFs — every link goes straight to the real site."
      />

      <PortfolioRing />

      <section className="work pgrid-section">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>

      <FeatureShowcase
        num="01"
        label="How our sites are built"
        title="Every site we ship is built to get the quote request."
        lede="When we build a site for a service business, this is the checklist: a clear offer, pages that load fast, and a form that reaches your CRM the moment someone submits it."
        points={["A clear offer above the fold", "Fast on mobile, tested before launch", "Forms that reach your CRM instantly", "Trust signals where visitors decide", "Built on GHL, WordPress, WooCommerce or custom code", "Tracked so you see what works"]}
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

      <CtaBanner
        title="Want your site in this list?"
        lede="Send the site you have now and what isn't working. You'll get an honest read on what we'd change first."
        ctaLabel="Get a free audit"
      />
      <Footer />
    </>
  );
}
