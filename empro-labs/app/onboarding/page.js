import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import OnboardingForm from "./OnboardingForm";

export const metadata = {
  title: "Onboarding Form — Empro Labs",
  description:
    "Starting a project with Empro Labs? Send your contact and business details once, through the onboarding form.",
  alternates: { canonical: "/onboarding" },
  // Reached from the contact page. It is a form for people already starting a project, not a page to rank.
  robots: { index: false, follow: true },
};

export default function OnboardingPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Onboarding form"
        lede="Starting a project with us? Fill this in once, so your contact and business details are in one place before the work begins."
      />

      <section className="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>What to have ready</h2>
              <p className="section-lede">
                It takes a few minutes. Fields marked with an asterisk in the form are required.
              </p>

              <ul className="hub-points">
                <li>About you: full name, email, phone and WhatsApp number. Job position is optional.</li>
                <li>
                  About the business: business name, business email and official business name. Business type and
                  current website are optional.
                </li>
                <li>Registration: whether the business is registered. The EIN is optional.</li>
                <li>Anything else we should know before we start goes in the message box, which is optional.</li>
              </ul>

              <h3 className="contact-sub">Not starting a project yet?</h3>
              <p className="onboard-alt">
                If you&rsquo;re still deciding, or just want a price first, go to the{" "}
                <Link href="/contact">contact page</Link> instead. You can also email{" "}
                <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a>.
              </p>
            </div>

            <div className="dash-panel contact-form-panel">
              <div className="dash-head">
                <b>Onboarding form</b>
                <span>Runs on our own GoHighLevel</span>
              </div>
              <OnboardingForm />
              <p className="form-note">
                Your details go into the same GoHighLevel CRM we set up for clients. If the form doesn&rsquo;t load for
                you, email <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a> instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
