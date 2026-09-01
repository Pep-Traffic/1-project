import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import TrafficChart from "./TrafficChart";

export const metadata = {
  title: "SEO — Empro Labs",
  description: "Technical SEO audits, on-page fixes, and content strategy from Empro Labs.",
};

const steps = [
  { num: "01", title: "Technical audit", body: "We crawl the site and fix what's actually blocking rankings — speed, indexing, structure." },
  { num: "02", title: "On-page fixes", body: "Titles, headers, internal linking, and schema, tuned to what your customers actually search." },
  { num: "03", title: "Content that ranks", body: "Pages built around real search intent, not just keyword density." },
  { num: "04", title: "Track and report", body: "Monthly reporting on rankings, traffic, and — most importantly — leads." },
];

export default function SeoPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Service"
        title="SEO that targets leads, not just rankings"
        lede="We fix the technical issues holding your site back, then build content and links around the searches your actual customers are making."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Live example
          </div>
          <h2>Organic traffic, month over month</h2>
          <p className="section-lede">
            A simulation of the kind of growth curve a well-run SEO engagement produces over its first two quarters.
          </p>
          <TrafficChart />
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            How it works
          </div>
          <h2>Four steps, repeated monthly</h2>
          <div className="steps">
            <div className="step-dot four"></div>
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Curious what an audit would find?"
        lede="We'll run a free technical audit and show you exactly where your site is leaking rankings."
      />
      <Footer />
    </>
  );
}
