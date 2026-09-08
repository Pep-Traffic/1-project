import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CtaBanner from "../../components/CtaBanner";
import { posts, getPostBySlug } from "../data";
import ShopifyGoHighLevelIntegrationGuide from "../content/shopify-gohighlevel-integration-guide";

const CONTENT_MAP = {
  "shopify-gohighlevel-integration-guide": ShopifyGoHighLevelIntegrationGuide,
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Empro Labs`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const Content = CONTENT_MAP[params.slug];
  if (!post || !Content) return notFound();

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="beam"></div>
        <div className="beam-2"></div>
        <div className="grain"></div>
        <div className="wrap">
          <div className="eyebrow">
            <span className="line"></span>
            {post.category} · {post.readTime}
          </div>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
        </div>
      </section>

      <section className="services">
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <Content />
        </div>
      </section>

      <CtaBanner
        title="Want this built for your store, not just explained?"
        lede="We build exactly this kind of pipeline for GHL, WordPress, and Shopify clients every week."
      />
      <Footer />
    </>
  );
}
