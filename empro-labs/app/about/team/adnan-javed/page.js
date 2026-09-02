import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CtaBanner from "../../../components/CtaBanner";

export const metadata = {
  title: "Adnan Javed — Empro Labs",
  description:
    "Adnan Javed is Empro Labs' GHL, SEO, WordPress, and Shopify expert.",
};

const skills = ["GHL", "SEO", "WordPress", "Shopify"];

export default function AdnanJavedProfilePage() {
  return (
    <>
      <Header />

      <section className="profile-hero">
        <div className="beam"></div>
        <div className="beam-2"></div>
        <div className="grain"></div>
        <div className="wrap profile-hero-inner">
          <div className="profile-photo">
            <img src="/team/adnan-javed.svg" alt="Adnan Javed" />
          </div>
          <div className="profile-info">
            <div className="eyebrow">
              <span className="line"></span>
              Team
            </div>
            <h1>Adnan Javed</h1>
            <p className="lede">
              GHL, SEO, WordPress, and Shopify expert at Empro Labs — building funnels,
              rebuilding sites, and driving organic growth for clients who need results,
              not just deliverables.
            </p>
            <div className="skill-row">
              {skills.map((s) => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Get in touch
          </div>
          <h2>Contact Adnan directly</h2>
          <div className="contact-info-grid">
            <a className="contact-info-card" href="mailto:aj9599995@gmail.com">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <p>aj9599995@gmail.com</p>
              </div>
            </a>
            <a className="contact-info-card" href="tel:03260332830">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 11.5L19 13V16C19 17.1 18.1 18 17 18C10.1 17.6 4.4 11.9 4 5C4 3.9 4.9 3 6 3L6.5 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <p>0326 0332830</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Adnan on your project?"
        lede="Tell us what you're building — GHL, SEO, WordPress, or Shopify — and we'll get you talking to the right person."
      />

      <Footer />
    </>
  );
}
