import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";

export const metadata = {
  title: "Contractor Website Design, SEO & Ads Services — Empro Labs",
  description:
    "Six services for contractors and home-service businesses: websites on GoHighLevel, WordPress or Shopify, local SEO, and Google Ads. See what each includes.",
  alternates: { canonical: "/services" },
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

const routes = [
  {
    href: "/services/seo",
    quote: "“Nobody finds us at all.”",
    body: "Start with SEO. Technical audit first, then the fixes worth paying for, then the local pages for the towns you actually serve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 20L15.2 15.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/web-development",
    quote: "“People find us, then nothing happens.”",
    body: "Start with the build. Ads and SEO both dump into the same site, so fixing that site makes every dollar after it work harder.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/ads-management",
    quote: "“We need calls this month.”",
    body: "Start with ads. Paid search is the only lever that moves on a short timeline, and we wire conversion tracking before we spend anything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 10V14C4 14.55 4.45 15 5 15H7L10 19V5L7 9H5C4.45 9 4 9.45 4 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 9C15 9.8 15.6 10.85 15.6 12C15.6 13.15 15 14.2 14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stages = [
  { num: "01", title: "Build", body: "A site on GoHighLevel, WordPress, or Shopify that loads fast and has one job: get people to call you." },
  { num: "02", title: "Get found", body: "Technical SEO, Google Business Profile, and service-area pages, so you show up when someone searches your trade plus your town." },
  { num: "03", title: "Get leads", body: "Google Search, Local Services Ads, Meta, and retargeting, with conversion tracking wired into the form or the pipeline." },
  { num: "04", title: "Follow up", body: "GoHighLevel CRM, automations, and review requests, so leads don't rot in an inbox while you're on a roof." },
  { num: "05", title: "Support", body: "Monthly changes, updates, and fixes. Nobody hands you a login and disappears." },
];

const buildServices = [
  {
    href: "/services/gohighlevel",
    title: "GoHighLevel",
    body: "Funnels, CRM, and automation in one account.",
    facts: [
      "Snapshot setup and sub-account onboarding",
      "Custom funnel, membership, and calendar styling",
      "Webhook and API automation, including n8n and your ad accounts",
      "White-label support if you resell GHL",
    ],
    time: "Typically live in 2–4 weeks",
    pills: ["Funnels", "CRM", "Automation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18l-7 8.2V20l-4-2.2v-4.6L3 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/wordpress",
    title: "WordPress",
    body: "Custom builds, and rescues for sites that got slow.",
    facts: [
      "Custom Elementor and Gutenberg development",
      "Speed and security hardening: caching, database cleanup, malware protection",
      "WooCommerce rebuilds that keep product data and existing URLs",
      "Plugin fixes and REST API connections to CRM, booking, or GHL",
    ],
    time: "Typically live in 2–4 weeks",
    pills: ["Elementor", "WooCommerce", "Speed"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.5 9.2l1.9 6 2.6-7 2.6 7 1.9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/shopify",
    title: "Shopify",
    body: "Stores that convert the traffic they already get.",
    facts: [
      "Custom theme design and Liquid development",
      "Core Web Vitals work, including app-script cleanup",
      "App integration and checkout flow fixes",
      "Conversion audit with a prioritized fix list",
    ],
    time: "Scoped after a store audit",
    pills: ["Liquid", "Checkout", "Speed"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.2 8V6.2a2.8 2.8 0 0 1 5.6 0V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/web-development",
    title: "Not sure which platform?",
    body: "Compare all three side by side, plus custom builds.",
    facts: [
      "Platform recommendation based on what you actually sell",
      "Custom development when none of the three fit",
      "Migration off a platform you've outgrown, URLs preserved",
      "A fixed quote before anything starts",
    ],
    time: "Audit inside a week",
    pills: ["GHL", "WordPress", "Shopify", "Custom"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 6L3 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const growServices = [
  {
    href: "/services/seo",
    title: "SEO",
    body: "Rankings that turn into calls, not screenshots.",
    facts: [
      "Technical audit and indexing fixes for your exact platform",
      "On-page: titles, headers, internal linking, schema",
      "Local: Google Business Profile, service-area pages, citations",
      "Monthly reporting on rankings, traffic, and leads",
    ],
    time: "Technical fixes in weeks, authority in one to two quarters",
    pills: ["Local", "Technical", "Content"],
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
    body: "Managed by cost per booked job, not by spend.",
    facts: [
      "Campaign setup on Google Search and Local Services Ads",
      "Creative and copy, tested continuously",
      "Weekly budget reallocation toward what converts",
      "Conversion tracking into your CRM, your form, or your checkout",
    ],
    time: "Typically live in 2–4 weeks",
    pills: ["Google", "LSA", "Meta", "Retargeting"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 10V14C4 14.55 4.45 15 5 15H7L10 19V5L7 9H5C4.45 9 4 9.45 4 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 9C15 9.8 15.6 10.85 15.6 12C15.6 13.15 15 14.2 14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16.5 6.5C18.2 7.9 19.2 9.85 19.2 12C19.2 14.15 18.2 16.1 16.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const terms = [
  {
    title: "In every engagement",
    items: [
      "A fixed quote, scoped and approved before work starts",
      "Month to month on anything ongoing, no multi-year lock-in",
      "Direct access to the people building it, not a ticket queue",
      "A reply within one business day",
    ],
  },
  {
    title: "You own all of it",
    items: [
      "The domain and hosting stay in your name",
      "The GoHighLevel sub-account is yours",
      "The Google Ads, Analytics, and Business Profile accounts are yours",
      "You can leave and keep everything, including the build",
    ],
  },
  {
    title: "Not a fit if",
    no: true,
    items: [
      "You want a $500 template site",
      "You need it live this week",
      "You won't give access to your Google Business Profile or ad accounts",
      "You want a guaranteed ranking by a date — nobody can sell that honestly",
    ],
  },
];

const work = [
  { url: "jflowersinsurance.com", name: "Jeff Flowers Insurance", tag: "GoHighLevel", initials: "JF", body: "Insurance agency in Murfreesboro, TN. Funnels and CRM on GHL." },
  { url: "pracforge.com", name: "PracForge", tag: "WordPress", initials: "PF", body: "Dental and medical practice site." },
  { url: "mangoholicae.com", name: "Mangoholic", tag: "WooCommerce", initials: "MH", body: "Fruit delivery store with a full product catalog and checkout." },
  { url: "corepowerpeptide.com", name: "Core Power Peptide", tag: "Custom build", initials: "CP", body: "Product catalog and content site." },
  { url: "aimtn.org", name: "AIMTN", tag: "Custom build", initials: "AI", body: "Nonprofit site." },
  { url: "motscbuy.com", name: "MOTSC Buy", tag: "Custom build", initials: "MB", body: "Product site." },
];

const faqs = [
  {
    q: "Which platform should I be on?",
    a: "If you want funnels, a CRM, and automated follow-up in one place, GoHighLevel. If you need content, blogging, and full control, WordPress. If you sell and ship products, Shopify or WooCommerce. Tell us what you sell and how leads reach you now, and we'll recommend one and explain why before any quote — including when the answer is “stay where you are.”",
  },
  {
    q: "Can I buy just one service?",
    a: "Yes. SEO and ads run perfectly well on a site we didn't build, and plenty of people start with the build alone. The five stages work in isolation, they just work better stacked.",
  },
  {
    q: "What does it cost?",
    a: "Every project gets a fixed quote after a scoping call, and ongoing work is month to month. We don't publish a rate card because a four-page trade site and a WooCommerce rebuild aren't the same job. You'll have a written number before you commit to anything, and it doesn't move mid-project.",
  },
  {
    q: "How fast can it go live?",
    a: "We audit inside a week, and a typical site or campaign goes live in two to four weeks once we have your content and access. SEO is the slow one: technical fixes land in weeks, ranking and authority take one to two quarters.",
  },
  {
    q: "Do you work with roofers, HVAC, plumbers, and electricians?",
    a: (
      <>
        Yes, that&apos;s who this is built for, and there&apos;s a page for each trade. Being straight with you: the live
        sites above are insurance, dental, e-commerce, and nonprofit, not roofing. The work is the same, funnels,
        speed, local SEO, call tracking, and we&apos;d rather say that than invent a case study.{" "}
        <Link href="/industries">See the industry pages.</Link>
      </>
    ),
  },
  {
    q: "What happens after launch?",
    a: "Ongoing support: changes, updates, fixes, and reporting, month to month. You keep every account and can stop whenever you want.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Empro Labs services",
  itemListElement: [
    ["GoHighLevel funnels and CRM", "https://www.emprolabs.com/services/gohighlevel"],
    ["WordPress website development", "https://www.emprolabs.com/services/wordpress"],
    ["Shopify store development", "https://www.emprolabs.com/services/shopify"],
    ["Web development and custom builds", "https://www.emprolabs.com/services/web-development"],
    ["SEO", "https://www.emprolabs.com/services/seo"],
    ["Google and Meta ads management", "https://www.emprolabs.com/services/ads-management"],
  ].map(([name, url], i) => ({ "@type": "ListItem", position: i + 1, name, url })),
};

function ServiceCard({ s }) {
  return (
    <Link href={s.href} className="service">
      <div className="icon">{s.icon}</div>
      <div className="svc-body">
        <h3>{s.title}</h3>
        <p>{s.body}</p>
        <ul className="service-facts">
          {s.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="service-meta">
          <span className="svc-time">{s.time}</span>
          {s.pills.map((p) => (
            <span className="skill-pill" key={p}>{p}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        title="Websites, SEO, and ads for home-service businesses"
        lede="Six services across five stages. Most people start with one piece and add the rest once it's paying. Every card below says what's included, how long it takes, and what you keep if you walk away."
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

      <section className="services svc-router">
        <div className="wrap">
          <h2>Start where you&apos;re stuck</h2>
          <p className="section-lede">Three sentences we hear constantly. Pick the one that sounds like your month, and start there.</p>
          <div className="leak-grid">
            {routes.map((r) => (
              <Link href={r.href} className="leak-card" key={r.href}>
                <div className="leak-icon">{r.icon}</div>
                <h3 className="leak-title">{r.quote}</h3>
                <p>{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <h2>Five stages. You don&apos;t need all five on day one.</h2>
          <p className="section-lede">This is the order the work actually happens in. Every service below sits on one of these stages, and each one works on its own.</p>
          <div className="steps">
            <div className="step-dot" aria-hidden="true"></div>
            {stages.map((s) => (
              <div className="step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services band-alt">
        <div className="wrap">
          <h2>The six services</h2>
          <p className="section-lede">Four ways to build it, two ways to bring in the work. Every engagement is scoped and quoted in writing before anything starts.</p>

          <div className="svc-band-group">
            <h3 className="svc-band">Build it</h3>
            <p className="svc-band-lede">Pick the platform, or let us pick it with you.</p>
            <div className="service-list">
              {buildServices.map((s) => (
                <ServiceCard key={s.href} s={s} />
              ))}
            </div>
          </div>

          <div className="svc-band-group">
            <h3 className="svc-band">Bring in the work</h3>
            <p className="svc-band-lede">Runs on whatever you already have. You don&apos;t need us to have built it.</p>
            <div className="service-list">
              {growServices.map((s) => (
                <ServiceCard key={s.href} s={s} />
              ))}
            </div>
          </div>

          <p className="svc-note">
            Work in roofing, HVAC, plumbing, electrical, or remodeling? <Link href="/industries">See how we set each one up.</Link>
          </p>
        </div>
      </section>

      <section className="work">
        <div className="wrap">
          <h2>Before you ask what it costs</h2>
          <p className="section-lede">Most of the bad agency stories start with something nobody wrote down. So here it is, in advance.</p>
          <div className="values-grid">
            {terms.map((t) => (
              <div className="value-card" key={t.title}>
                <h3>{t.title}</h3>
                <ul className={`hub-points${t.no ? " hub-points-no" : ""}`}>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work band-alt">
        <div className="wrap">
          <h2>Sites you can open right now</h2>
          <p className="section-lede">No case-study PDFs and no logos we can&apos;t back up. These are live URLs. Click them.</p>
          <div className="portfolio-grid">
            {work.map((w) => (
              <a className="portfolio-card show" key={w.url} href={`https://${w.url}`} target="_blank" rel="noopener noreferrer">
                <div className="portfolio-thumb">{w.initials}</div>
                <div className="portfolio-body">
                  <span className="portfolio-tag">{w.tag}</span>
                  <h3>{w.name}</h3>
                  <p>{w.body}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="svc-note">
            More, including whatarepeptides.us, on the <Link href="/portfolio">portfolio</Link>.
          </p>
        </div>
      </section>

      <Faq title="Questions before you pick one" lede="The things people ask on the first call." items={faqs} />

      <CtaBanner
        title="Tell us which stage you're stuck on"
        lede="Send the site you have now and what isn't working. You'll get an honest read on whether you need a build, SEO, ads, or none of it yet."
        ctaLabel="Get a fixed quote"
      />
      <Footer />
    </>
  );
}
