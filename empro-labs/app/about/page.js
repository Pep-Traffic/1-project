import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";

export const metadata = {
  title: "About — Empro Labs",
  description:
    "Empro Labs is founder-led. Adnan Javed scopes the work, builds it, and answers when something breaks — GoHighLevel, WordPress, Shopify, SEO and Google Ads.",
  alternates: { canonical: "/about" },
};

const inHouse = [
  "GoHighLevel funnels, pipelines and automations",
  "WordPress builds, including WooCommerce",
  "Shopify stores",
  "On-page and local SEO",
  "Google Ads setup and management",
  "Support, fixes and edits after launch",
];

const broughtIn = [
  "Long-form copywriting beyond the build",
  "Photography and video",
  "Print and packaging design",
  "Custom development your platform can't do natively",
];

const engagement = [
  {
    title: "You send the brief",
    body: "Your site URL, what you sell, and where your leads come from today. No call needed before you get a straight answer on scope.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
      </svg>
    ),
  },
  {
    title: "A written scope and a fixed price",
    body: "You see the scope and the number before anything starts. If the scope changes we requote, so you do not get a surprise invoice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v7l9 9 9-9-9-9z" />
        <circle cx="8" cy="8" r="1.4" />
      </svg>
    ),
  },
  {
    title: "You watch it get built",
    body: "A staging link from the first week, not a reveal at the end. Changes go in while they are still cheap to make.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6.5" cy="6.5" r=".8" />
      </svg>
    ),
  },
  {
    title: "Support after launch",
    body: "Edits, fixes, and monthly SEO or Google Ads work if you want it. If you don't, the site still works without us.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" />
      </svg>
    ),
  },
];

const accounts = [
  "Domain and DNS",
  "GoHighLevel sub-account",
  "WordPress or Shopify admin",
  "Google Ads account",
  "Google Analytics 4 and Search Console",
  "Google Business Profile",
  "Design files and source",
];

const sites = [
  { tag: "GoHighLevel website", name: "Jeff Flowers Insurance", url: "jflowersinsurance.com" },
  { tag: "WordPress build", name: "PracForge", url: "pracforge.com" },
  { tag: "WooCommerce build", name: "Mangoholic", url: "mangoholicae.com" },
  { tag: "Custom build", name: "CorePower Peptide", url: "corepowerpeptide.com" },
  { tag: "Custom build", name: "AIMTN", url: "aimtn.org" },
  { tag: "Custom build", name: "What Are Peptides", url: "whatarepeptides.us" },
];

const principles = [
  {
    title: "Ship systems, not demos",
    body: "A site that looks good in a screenshot and drops leads is a failure. Everything we build has to survive a real week of phone calls, form fills and follow-ups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "Say the true timeline",
    body: "If it is six weeks, we say six weeks. We would rather lose the job at the quote than explain a slipped date in week five.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 1.8" />
      </svg>
    ),
  },
  {
    title: "Speed to lead beats ad spend",
    body: "Most trades do not need more leads. They need the ones they already get answered before the next contractor answers them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L5 13.5h6L10.5 21 19 10.5h-6L13 3z" />
      </svg>
    ),
  },
  {
    title: "Measure it or it isn't finished",
    body: "Call tracking, form tracking, Analytics and Search Console go in before launch, not as an afterthought. You should never have to guess where a job came from.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3.5-4 3 2.5L20 8" />
      </svg>
    ),
  },
  {
    title: "Stay on after launch",
    body: "Every build ends with a support plan, not a goodbye email. Launch day is the middle of the job, not the end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7.5 3v6c0 4.2-3 7.6-7.5 9-4.5-1.4-7.5-4.8-7.5-9V6L12 3z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </svg>
    ),
  },
  {
    title: "Only work that helps a real business",
    body: "Local operators and small businesses trying to grow. That is the work we are good at, and it is the work we say yes to.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5l3-3 3.5 1 2.5-1 2.5 1 3.5-1 3 3" />
        <path d="M6.5 14l3 3 2.5-1.5L14.5 17l3-3" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "It's one person. What happens if you're sick or slammed?",
    a: "Every account is in your name, so nothing is locked behind us — another developer could pick it up tomorrow. On bigger builds we bring in a specialist and tell you who. If a date is at risk you hear it that week, not at the deadline.",
  },
  {
    q: "Why not hire a bigger agency?",
    a: "Because here you talk to the person doing the work instead of someone relaying messages. The honest trade-off is capacity: we take fewer projects at a time, so a start date matters more here than it would elsewhere.",
  },
  {
    q: "How many projects do you take at once?",
    a: "A small number, deliberately. If the calendar is full you get a real start date rather than a maybe, and you can decide whether it is worth waiting for.",
  },
  {
    q: "Do you actually build in GoHighLevel, or just resell it?",
    a: "We build in it — funnels, pipelines, automations, missed-call text-back and follow-up sequences. jflowersinsurance.com is a GoHighLevel site we built end to end.",
  },
  {
    q: "Do you work with businesses outside the trades?",
    a: "Yes. Home-service trades are where most of the work is, but the same stack runs for insurance, e-commerce and content sites — the portfolio above is the range.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on scope and we will not pretend otherwise. Send the brief and you get a written number before anything starts, not a range that moves later.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        title="One person builds it. The same person picks up the phone."
        lede="Empro Labs is Adnan Javed. The person who scopes your project is the person who builds it, launches it, and answers when something breaks. Specialists get pulled in when a job needs them, and you're told who. There is no account manager in between, because there is no one to put in between."
      />

      <section className="contact">
        <div className="wrap">
          <h2>Who you&apos;re actually hiring</h2>
          <p className="section-lede">
            Most agencies put a team photo here and then hand you a project manager. Here is the whole picture instead.
          </p>

          <div className="contact-grid">
            <div>
              <div className="profile-photo">
                <img src="/team/adnan-javed.png" alt="Adnan Javed" />
              </div>
              <h3 className="about-name">Adnan Javed</h3>
              <span className="about-role">Founder — GoHighLevel, SEO, WordPress &amp; Shopify</span>
              <p className="about-body">
                He does the build. The GoHighLevel funnels and CRM pipelines, the WordPress and Shopify front ends,
                and the SEO and Google Ads work after launch. If you email Empro Labs, he reads it, and he replies,
                usually inside one business day.
              </p>
              <p className="svc-note">
                <Link href="/about/team/adnan-javed" className="btn btn-ghost">Adnan&apos;s full profile</Link>
              </p>
            </div>

            <div className="cap-stack">
              <div>
                <h4>Built in-house</h4>
                <ul className="hub-points">
                  {inHouse.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Brought in when a job needs it</h4>
                <ul className="hub-points">
                  {broughtIn.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <p className="svc-note" style={{ marginTop: 0 }}>
                When someone outside Empro Labs touches your project, you are told before they start, and you still
                deal with Adnan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services band-alt">
        <div className="wrap">
          <h2>How an engagement runs</h2>
          <p className="section-lede">Same sequence every time, whether it is a one-page funnel or a full store.</p>
          <div className="service-list">
            {engagement.map((s) => (
              <div className="service" key={s.title}>
                <div className="icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work">
        <div className="wrap">
          <div className="hub-layout">
            <div className="hub-text">
              <h2>Everything is in your name</h2>
              <p className="section-lede">
                The most expensive thing an agency can do to you is own your accounts. Here is what is yours from the
                first day, and what is handed over, logins included, on the last one.
              </p>
              <p className="about-body">
                We set these up in your name, not ours. Nothing has to be migrated off us later, because none of it
                was ever on us.
              </p>
            </div>

            <div className="hub-visual">
              <div className="dash-panel">
                <div className="dash-head"><b>Accounts in your name</b></div>
                <ul className="own-list">
                  {accounts.map((a, i) => (
                    <li className="own-row" key={a} style={{ "--i": i }}>
                      <span className="own-check" aria-hidden="true">
                        <svg viewBox="0 0 16 16" fill="none">
                          <path d="M3.5 8.4L6.4 11.3L12.5 5" pathLength="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="own-note">If you leave, you keep all of it. No exit fee, no hostage logins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work band-alt">
        <div className="wrap">
          <h2>Six sites that are live right now</h2>
          <p className="section-lede">No case-study PDFs. Open them.</p>
          <div className="portfolio-grid">
            {sites.map((p) => (
              <div className="portfolio-card show" key={p.url}>
                <a className="portfolio-thumb portfolio-thumb-shot" href={`https://${p.url}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(`https://${p.url}`)}?w=800`}
                    alt={`${p.name} live screenshot`}
                    loading="lazy"
                  />
                </a>
                <div className="portfolio-body">
                  <span className="portfolio-tag">{p.tag}</span>
                  <h3>{p.name}</h3>
                  <p>{p.url}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="svc-note">
            <Link href="/portfolio" className="btn btn-ghost">See the full portfolio</Link>
          </p>
        </div>
      </section>

      <section className="services about-leaks">
        <div className="wrap">
          <h2>Six things that don&apos;t move</h2>
          <p className="section-lede">These decide which jobs we take and how they run.</p>
          <div className="leak-grid">
            {principles.map((p, i) => (
              <div className="leak-card" key={p.title}>
                <span className="leak-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="leak-icon">{p.icon}</div>
                <h3 className="leak-title">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq title="Questions people ask before hiring a one-person shop" lede="The awkward ones included." items={faqs} />

      <CtaBanner
        title="Want to know if we're a fit?"
        lede={`Send the brief. You'll get a straight answer, including "no", usually inside one business day.`}
        ctaLabel="Send the brief"
      />

      <Footer />
    </>
  );
}
