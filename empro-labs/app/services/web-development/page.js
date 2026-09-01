import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import PlatformShowcase from "./PlatformShowcase";

export const metadata = {
  title: "Web Development — Empro Labs",
  description: "Custom builds, GHL funnels, WordPress rebuilds, and Shopify storefronts from Empro Labs.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service"
        title="Web development, across every platform"
        lede="Whether it's a custom-coded application, a GHL funnel, a WordPress rebuild, or a Shopify storefront, we build it to handle real traffic and hand it off with documentation your team can actually use."
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

      <CtaBanner
        title="Have a platform in mind?"
        lede="Tell us whether you're thinking GHL, WordPress, Shopify, or a custom build — we'll tell you honestly which fits."
      />
      <Footer />
    </>
  );
}
