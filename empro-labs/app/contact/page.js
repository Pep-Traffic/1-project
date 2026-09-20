import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Faq from "../components/Faq";
import GHLContactForm from "../components/GHLContactForm";
import CopyOutline from "./CopyOutline";

export const metadata = {
  title: "Contact — Empro Labs",
  description:
    "Tell Empro Labs what you're building. A written reply within one business day — no sales call required first.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  {
    q: "Do I have to get on a call first?",
    a: "No. Most projects get scoped over email and only move to a call once there's something specific to talk through. If you'd rather never be on a call at all, say so and we'll work that way.",
  },
  {
    q: "Who actually reads this?",
    a: "Adnan Javed — GoHighLevel, SEO, WordPress and Shopify. There is no intake team and nobody qualifying you before he sees it. The person who scopes your project is the person who builds it and the person who answers when something breaks.",
  },
  {
    q: "What does a build cost?",
    a: "It depends on whether you need a new site, a CRM and follow-up system, or both, so we don't publish one number and pretend it fits everyone. You'll get a range in the first reply, before any call, and the range holds unless the scope changes.",
  },
  {
    q: "Will you take a small job?",
    a: "Yes. A broken quote form, a site that loads slowly, missed-call text-back on an existing number — those are real jobs. Tell us the one thing and we'll price the one thing.",
  },
  {
    q: "Will I get chased with sales emails?",
    a: "We reply about your project, and if you go quiet, we stop. No pitch sequence, no pressure.",
  },
  {
    q: "Do you need logins to reply?",
    a: "No. Just the URL. We don't ask for access to anything until there's a scope you've agreed to.",
  },
  {
    q: "I'm already with another agency. Is this awkward?",
    a: "No. Plenty of first conversations are “here's what we're paying for, is this normal?” We'll tell you honestly if what you have is fine. If it is, that's the answer.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Tell us what you're building"
        lede="Send the form and you'll get a real reply from Adnan within one business day — what we'd fix first, roughly what it costs, and how long it takes. No sales call required to get that."
      />

      <section className="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>Send this and we can actually quote it</h2>
              <p className="section-lede">
                None of this is required, one line about what&rsquo;s broken is enough to start. But the more of it
                you include, the more useful the first reply is.
              </p>

              <ul className="hub-points">
                <li>Your current site URL, or tell us there isn&rsquo;t one yet.</li>
                <li>Your trade, and the towns you actually drive to.</li>
                <li>Where your leads come from today: Google, Angi, referrals, door-knocking.</li>
                <li>
                  What&rsquo;s going wrong: calls going to voicemail, quotes never going out, phone dead in the
                  off-season.
                </li>
                <li>Rough timeline, and a budget range if you have one in mind.</li>
              </ul>

              <CopyOutline />

              <h3 className="contact-sub">Rather not fill in a form?</h3>
              <ul className="contact-info">
                <li>
                  <span>Email</span>
                  <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a>
                </li>
                <li>
                  <span>Reply time</span>
                  <span>Within 1 business day</span>
                </li>
              </ul>
            </div>

            <div className="dash-panel contact-form-panel">
              <div className="dash-head">
                <b>Project inquiry</b>
                <span>Runs on our own GoHighLevel</span>
              </div>
              <GHLContactForm />
              <p className="form-note">
                This is the same CRM we set up for clients, so your details land in a pipeline, not an inbox someone
                forgets to check. If the form doesn&rsquo;t load for you, email{" "}
                <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a> instead and we&rsquo;ll pick it up there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process3 contact-next">
        <div className="wrap">
          <h2>What happens after you hit send</h2>
          <p className="section-lede">Three things, in this order. Nothing else.</p>

          <div className="p3-board">
            <div className="p3-cols">
              <div className="p3-col">
                <div className="p3-numrow">
                  <span className="p3-num">1</span>
                </div>
                <h3>It lands in the pipeline</h3>
                <p>
                  It goes into our GoHighLevel pipeline, the same CRM we set up for clients, so it can&rsquo;t get
                  buried in an inbox behind everything else that arrived that morning.
                </p>
              </div>
              <div className="p3-col">
                <div className="p3-numrow">
                  <span className="p3-num">2</span>
                </div>
                <h3>Adnan reads it and replies</h3>
                <p>
                  Within one business day, after opening your site. You get what we&rsquo;d fix first, what it would
                  take, and a price range, in writing, so you can forward it to whoever else decides.
                </p>
              </div>
              <div className="p3-col">
                <div className="p3-numrow p3-numrow-last">
                  <span className="p3-num">3</span>
                </div>
                <h3>A 20-minute call, only if you want one</h3>
                <p>
                  Screen share, your site open, straight answers. No deck, no proposal theater. Say no and
                  we&rsquo;ll keep the whole thing in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq
        title="Before you send it"
        lede="The questions people email us instead of using the form."
        aside={
          <div className="faq-ask">
            <b>Rather just email?</b>
            <span>
              Send the same details to hello@emprolabs.dev. It reaches the same person and gets the same reply.
            </span>
            <a href="mailto:hello@emprolabs.dev" className="faq-ask-link">
              hello@emprolabs.dev
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                <path d="M3 8h9M8.5 4L12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        }
        items={contactFaqs}
      />

      <section className="work">
        <div className="wrap">
          <h2>Not ready to send anything yet?</h2>
          <p className="section-lede">Have a look around first. The form will still be here.</p>

          <div className="values-grid">
            <Link href="/portfolio" className="value-card">
              <h3>See the work</h3>
              <p>Seven live sites we built — insurance, WordPress, WooCommerce, peptide e-commerce.</p>
            </Link>
            <Link href="/industries" className="value-card">
              <h3>Find your trade</h3>
              <p>Roofing, HVAC, plumbing, electrical, remodeling — what the system looks like for each.</p>
            </Link>
            <Link href="/services" className="value-card">
              <h3>See what we build</h3>
              <p>Websites, GHL funnels and CRM, SEO, Google Ads, and ongoing support.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
