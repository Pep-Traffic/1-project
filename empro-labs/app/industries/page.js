import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { industries } from "./data";
import { tradeIcon, plusIcon, pieceIcon, painIcons } from "./icons";
import { shotFor, initialsFor } from "../work-shots";

export const metadata = {
  title: "Contractor Marketing Agency — Websites, SEO & Ads",
  description:
    "A contractor marketing agency for roofing, HVAC, plumbing, electrical and remodeling. See the intake, follow-up and pipeline we ship for your trade.",
  alternates: { canonical: "/industries" },
};

const trades = [
  { name: "Roofing", icon: "<path d=\"M3 11l9-7 9 7\"/><path d=\"M5 10v10h14V10\"/>" },
  { name: "HVAC", icon: "<path d=\"M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9\"/>" },
  { name: "Plumbing", icon: "<path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z\"/>" },
  { name: "Electrical", icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7l1-8Z\"/>" },
  { name: "Landscaping", icon: "<path d=\"M5 19c0-8 5-14 15-14 0 10-6 15-14 15\"/><path d=\"M5 19l7-7\"/>" },
  { name: "Lawn Care", icon: "<path d=\"M12 21v-9\"/><path d=\"M12 12c0-4 3-6 7-6 0 4-3 6-7 6Z\"/><path d=\"M12 15c0-3-2-5-6-5 0 3 2 5 6 5Z\"/>" },
  { name: "Tree Service", icon: "<path d=\"M12 21v-6\"/><path d=\"M12 3l6 8h-3l4 6H5l4-6H6l6-8Z\"/>" },
  { name: "Windows", icon: "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"1.5\"/><path d=\"M12 3v18M4 12h16\"/>" },
  { name: "Fencing", icon: "<path d=\"M5 21V8l2-3 2 3v13M11 21V8l2-3 2 3v13M17 21V8l2-3 2 3v13\"/>" },
  { name: "Remodeling", icon: "<path d=\"M12.5 6.5L17 11M5 19l8-8\"/><path d=\"M14 4l6 6-3 3-6-6 3-3Z\"/>" },
  { name: "Pest Control", icon: "<rect x=\"8\" y=\"8\" width=\"8\" height=\"11\" rx=\"4\"/><path d=\"M12 8V5M4 12h4M16 12h4M5 18l3-2M19 18l-3-2M9 5l3-2 3 2\"/>" },
  { name: "Painting", icon: "<path d=\"M4 20c2 0 3-1 3-3l7-7 3 3-7 7c-2 0-4 1-6 0Z\"/><path d=\"M14 10l5-5 2 2-5 5\"/>" },
];

const leaks = [
  {
    num: "01",
    title: "The call goes to voicemail",
    body: "4:50pm on a Friday, the phone rings while you're up a ladder, and nothing texts them back. They call the next number on the map. You already paid for that lead.",
  },
  {
    num: "02",
    title: "Nobody follows up twice",
    body: "The quote goes out, the customer goes quiet, and that's where it ends. No second email, no text a week later, no call before the job goes to somebody else.",
  },
  {
    num: "03",
    title: "The site never asks for the job",
    body: "A hero photo, a phone number in the footer, and no way to request a quote without calling. Traffic with nowhere to go.",
  },
];

const pieces = [
  {
    label: "Website or funnel",
    icon: pieceIcon["Website"],
    href: "/services/web-development",
    body: "A GoHighLevel funnel, WordPress, or Shopify build, designed around one action: request a quote.",
  },
  {
    label: "CRM and instant response",
    icon: pieceIcon["CRM & automation"],
    href: "/services/gohighlevel",
    body: "Missed-call text-back, lead routing, follow-up sequences, review requests. Running in your account, not ours.",
  },
  {
    label: "Local SEO",
    icon: pieceIcon["Local SEO"],
    href: "/services/seo",
    body: "Service pages, city pages, Google Business Profile, schema. Built for the searches that end in a booking, not the ones that look good in a report.",
  },
  {
    label: "Google and Meta ads",
    icon: pieceIcon["Paid ads"],
    href: "/services/ads-management",
    body: "Search, Local Services Ads, and retargeting, measured against cost per booked job and reallocated month to month.",
  },
];

const work = [
  { name: "Jeff Flowers Insurance", tag: "GoHighLevel website", url: "https://jflowersinsurance.com" },
  { name: "PracForge", tag: "WordPress build", url: "https://pracforge.com" },
  { name: "Mangoholic", tag: "WooCommerce build", url: "https://mangoholicae.com" },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Built for home service businesses"
        lede="Roofing, HVAC, plumbing, electrical, remodeling. The same stack underneath — different intake questions, different seasons, different objections. Pick your trade and see how it gets set up."
      />

      <section className="trade-strip" aria-label="Trades we build websites and marketing for">
        <div className="trade-track">
          {[0, 1].map((copy) => (
            <div className="trade-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
              {trades.map((t) => (
                <span className="trade-item" key={t.name}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: t.icon }} />
                  {t.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="services band-alt ind-leaks">
        <div className="wrap">
          <h2>Three things break in every trade</h2>
          <p className="section-lede">They are the same three everywhere. The wording on your page changes; these don&apos;t.</p>
          <div className="leak-grid">
            {leaks.map((l, i) => (
              <div className="leak-card" key={l.num}>
                <span className="leak-num">{l.num}</span>
                <div className="leak-icon">{painIcons[i]}</div>
                <h3 className="leak-title">{l.title}</h3>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <h2>Pick your trade</h2>
          <p className="section-lede">
            Each page shows the intake questions, the follow-up message, and the pipeline we&apos;d actually ship for
            that trade — not a description of one.
          </p>
          <div className="service-list">
            {industries.map((ind) => (
              <Link href={`/industries/${ind.slug}`} className="service" key={ind.slug}>
                <div className="icon">{tradeIcon[ind.slug]}</div>
                <div className="svc-body">
                  <h3>{ind.name}</h3>
                  <p>{ind.edge}</p>
                </div>
              </Link>
            ))}
            <Link href="/contact" className="service">
              <div className="icon">{plusIcon}</div>
              <div className="svc-body">
                <h3>Your trade isn&apos;t listed</h3>
                <p>
                  Landscaping, fencing, pest control, pool, painting, windows: same stack, different intake questions.
                  Tell us the trade and we&apos;ll scope it.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="work band-alt">
        <div className="wrap">
          <h2>Live work you can open</h2>
          <p className="section-lede">
            None of these three are home-service trades. It&apos;s the same build — GoHighLevel, WordPress,
            WooCommerce — done for other industries. Open them and judge the work, not a case study we wrote about
            ourselves.
          </p>
          <div className="portfolio-grid">
            {work.map((p) => (
              <a className="portfolio-card show" key={p.url} href={p.url} target="_blank" rel="noopener noreferrer">
                <div className={`portfolio-thumb${shotFor(p.url) ? " portfolio-thumb-shot" : ""}`}>
                  {shotFor(p.url) ? (
                    <img src={shotFor(p.url)} alt={`${p.name} live screenshot`} width="828" height="466" loading="lazy" />
                  ) : (
                    initialsFor(p.name)
                  )}
                </div>
                <div className="portfolio-body">
                  <span className="portfolio-tag">{p.tag}</span>
                  <h3>{p.name}</h3>
                </div>
              </a>
            ))}
          </div>
          <p className="svc-note">
            More, including corepowerpeptide.com and whatarepeptides.us, on the <Link href="/portfolio">portfolio</Link>.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <h2>The same four pieces, whatever the trade</h2>
          <p className="section-lede">You can buy these from four different vendors. We&apos;d rather they talked to each other.</p>
          <div className="service-list">
            {pieces.map((p) => (
              <Link href={p.href} className="service" key={p.label}>
                <div className="icon">{p.icon}</div>
                <div className="svc-body">
                  <h3>{p.label}</h3>
                  <p>{p.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't see your trade listed? Get a free quote anyway"
        lede="We work with home service businesses beyond this list too — tell us what you do and we'll tell you honestly if we're a fit."
        ctaLabel="Get a Free Quote"
      />
      <Footer />
    </>
  );
}
