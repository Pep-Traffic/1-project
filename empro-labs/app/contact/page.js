import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Empro Labs",
  description: "Tell Empro Labs what you're building. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Get in touch"
        title="Tell us what you're building"
        lede="Fill in the form below and we'll reply within one business day with next steps — no sales call required first."
      />

      <section className="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">
                <span className="line"></span>
                Direct lines
              </div>
              <h2>Skip the contact form queue</h2>
              <p className="section-lede">
                Prefer email or a specific department? Reach us directly using the details below.
              </p>
              <ul className="contact-info">
                <li>
                  <span>Email</span>
                  <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a>
                </li>
                <li>
                  <span>Response time</span>
                  <a href="#">Within 1 business day</a>
                </li>
              </ul>

              <div className="office-grid" style={{ marginTop: "50px", gridTemplateColumns: "1fr" }}>
                <div className="office-card">
                  <h4>New engagements</h4>
                  <p>Tell us about the project — timeline, budget range, and what "done" looks like to you.</p>
                </div>
                <div className="office-card">
                  <h4>Existing clients</h4>
                  <p>Already working with us? Message your engagement manager directly, or use this form and flag it as urgent.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
