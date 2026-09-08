import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import PlatformShowcase from "./PlatformShowcase";

export const metadata = {
  title: "GoHighLevel, WordPress & Shopify Website Design — Empro Labs",
  description:
    "GoHighLevel (GHL) website design, WordPress website development, and Shopify agency services from Empro Labs — the custom website developer and custom software consultancy small businesses hire to build funnels, rebuild sites, and ship stores that convert.",
  alternates: { canonical: "/services/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service"
        title="GoHighLevel, WordPress & Shopify website design"
        lede="Whether you need GoHighLevel website design and funnel builds, a WordPress website development rebuild, or a Shopify website design agency to launch or migrate your store, we build it on the Empro Labs System — our advanced website development process — and hand it off with documentation your team can actually use."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Platforms we build on
          </div>
          <h2>See work by platform</h2>
          <p className="section-lede">
            Switch between platforms to see the kind of projects we've delivered on each.
          </p>
          <PlatformShowcase />
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Platform expertise
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>GoHighLevel (GHL) website design</h3>
              <p>
                Need a GoHighLevel expert? We build GHL websites, funnels, pipelines, and automations
                for agencies, coaches, and service businesses that want every lead answered within
                seconds — not a template with your logo dropped in.
              </p>
            </div>
            <div className="value-card">
              <h3>WordPress website development</h3>
              <p>
                Hire a WordPress developer who treats speed and SEO structure as requirements, not
                afterthoughts. We rebuild legacy WordPress sites and WooCommerce stores onto a CMS
                your team can actually manage.
              </p>
            </div>
            <div className="value-card">
              <h3>Shopify website design agency</h3>
              <p>
                Looking to hire a Shopify developer? We design and migrate Shopify storefronts —
                custom themes, Shopify Functions, and checkout flows built to convert, not just
                look good in a demo.
              </p>
            </div>
            <div className="value-card">
              <h3>Custom website development &amp; software consultancy</h3>
              <p>
                Outgrown GHL, WordPress, or Shopify? As a custom website developer and custom
                software consultancy, we build bespoke sites and internal tools for businesses
                whose workflow doesn't fit a template — as your dedicated custom website makers,
                not a generic dev shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to hire a GHL, WordPress, or Shopify developer?"
        lede="Tell us whether you're thinking GoHighLevel website design, a WordPress rebuild, a Shopify storefront, or a custom build — we'll tell you honestly which fits."
      />
      <Footer />
    </>
  );
}
