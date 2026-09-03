import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CtaBanner from "../../../components/CtaBanner";

export const metadata = {
  title: "Umair Gujjar — Empro Labs",
  description:
    "Umair Gujjar is Empro Labs' senior team lead, specializing in GHL, WordPress, Shopify, Etsy, ClickFunnels, n8n workflows, and automations.",
};

const skills = [
  "GHL",
  "WordPress",
  "Shopify",
  "Etsy",
  "ClickFunnels",
  "n8n Workflows",
  "Automations",
];

export default function UmairGujjarProfilePage() {
  return (
    <>
      <Header />

      <section className="profile-hero">
        <div className="beam"></div>
        <div className="beam-2"></div>
        <div className="grain"></div>
        <div className="wrap profile-hero-inner">
          <div className="profile-photo">
            <img src="/team/umair-gujjar.jpeg" alt="Umair Gujjar" />
          </div>
          <div className="profile-info">
            <div className="eyebrow">
              <span className="line"></span>
              Team
            </div>
            <h1>Umair Gujjar</h1>
            <p className="lede">
              Senior team lead at Empro Labs — expert across GHL, WordPress, Shopify, Etsy,
              ClickFunnels, n8n workflows, and automations, with deep experience shaping the
              systems the rest of the team builds on.
            </p>
            <div className="skill-row">
              {skills.map((s) => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
            <div className="profile-contact-row">
              <a
                className="profile-contact-btn"
                href="mailto:umairgujjar7@gmail.com"
                aria-label="Email umairgujjar7@gmail.com"
                title="umairgujjar7@gmail.com"
              >
                <svg className="icon-draw" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" pathLength="1" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 6.5L12 13L20 6.5" pathLength="1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                className="profile-contact-btn"
                href="tel:+923226574425"
                aria-label="Call +92 322 6574425"
                title="+92 322 6574425"
              >
                <svg className="icon-draw" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 11.5L19 13V16C19 17.1 18.1 18 17 18C10.1 17.6 4.4 11.9 4 5C4 3.9 4.9 3 6 3L6.5 3.5Z"
                    pathLength="1"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="profile-contact-btn"
                href="https://wa.me/923226574425"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +92 322 6574425"
                title="WhatsApp +92 322 6574425"
              >
                <svg className="icon-draw" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C7.03 3 3 7.03 3 12C3 13.63 3.43 15.16 4.19 16.48L3 21L7.66 19.85C8.93 20.56 10.42 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                    pathLength="1"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 8.5C8.5 8 9 7.5 9.5 7.5C10 7.5 10.4 7.6 10.6 8.1C10.8 8.6 11.1 9.4 11.2 9.6C11.3 9.8 11.3 10 11.2 10.2C11.1 10.4 11 10.5 10.8 10.7C10.6 10.9 10.4 11.1 10.6 11.4C10.8 11.7 11.4 12.6 12.3 13.3C13.4 14.2 14.2 14.5 14.5 14.6C14.8 14.7 15 14.7 15.2 14.5C15.4 14.3 15.9 13.7 16.1 13.4C16.3 13.1 16.5 13.2 16.8 13.3C17.1 13.4 18.5 14.1 18.8 14.3C19.1 14.5 19.3 14.6 19.4 14.7C19.5 14.9 19.5 15.6 19.2 16.3C18.9 17 17.6 17.8 17 17.9C16.4 18 16 18.1 14.8 17.6C13.3 17 11.4 15.8 9.9 14.1C8.6 12.6 7.9 11.3 7.7 10.9C7.5 10.5 6.8 9.3 6.8 8.1C6.8 6.9 7.4 6.4 7.6 6.2C7.8 6 8 6 8.2 6C8.3 6 8.4 6 8.5 8.5Z"
                    pathLength="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Umair on your project?"
        lede="Tell us what you're building — GHL, WordPress, Shopify, Etsy, ClickFunnels, or automations — and we'll get you talking to the right person."
      />

      <Footer />
    </>
  );
}
