import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { posts } from "./data";

export const metadata = {
  title: "Blog — GHL, WordPress & Shopify Guides — Empro Labs",
  description:
    "Technical guides on GoHighLevel, WordPress, and Shopify from the team running the Empro Labs System — built for people who actually implement this stuff, not skim it.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Blog"
        title="Technical guides for GHL, WordPress & Shopify"
        lede="Deep, implementation-level write-ups from the team running the Empro Labs System — no filler, no generic advice recycled from 2022."
      />

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            Latest
          </div>
          <h2>All articles</h2>
          <p className="section-lede">
            Filed under GoHighLevel, WordPress, Shopify, SEO, and Ads — the platforms and channels we work in every day.
          </p>
          <div className="values-grid">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="value-card" key={post.slug} style={{ display: "block" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12.5px",
                    color: "var(--amber)",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span style={{ display: "block", marginTop: "14px", fontSize: "12.5px", color: "var(--ink-faint)" }}>
                  {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need this built, not just explained?"
        lede="We implement everything on this blog for clients every week. Tell us what you're building."
      />
      <Footer />
    </>
  );
}
