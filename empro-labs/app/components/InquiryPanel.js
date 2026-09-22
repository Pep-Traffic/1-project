import Link from "next/link";

// Stands in the form slot on the homepage and the contact page until the new
// lead form is built. Swap the body of this component for the new form and
// both pages pick it up. The old GoHighLevel form now lives on /onboarding only.
export default function InquiryPanel({ showOnboarding = false }) {
  return (
    <div className="dash-panel contact-form-panel inquiry-panel">
      <div className="dash-head">
        <b>Project inquiry</b>
        <span>Reply within 1 business day</span>
      </div>

      <p className="inquiry-text">
        Email Adnan what you&rsquo;re working on, even if it&rsquo;s one line about what&rsquo;s broken. You&rsquo;ll get a
        written reply: what we&rsquo;d fix first, roughly what it costs, and how long it takes.
      </p>

      <a className="btn btn-primary inquiry-mail" href="mailto:hello@emprolabs.dev?subject=Project%20inquiry">
        Email hello@emprolabs.dev
      </a>

      {showOnboarding ? (
        <div className="inquiry-onboard">
          <b>Already starting a project with us?</b>
          <span>Send your contact and business details through the onboarding form.</span>
          <Link href="/onboarding" className="inquiry-link">
            Onboarding form
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4L12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
