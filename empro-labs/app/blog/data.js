export const posts = [
  {
    slug: "shopify-gohighlevel-integration-guide",
    title: "The Definitive 2026 Guide to Integrating Shopify with GoHighLevel for Enterprise Automation",
    excerpt:
      "A native webhook approach to syncing Shopify orders into GoHighLevel — no Zapier, with real payloads, error handling, and GHL's 2026 AI workflow builder.",
    category: "GoHighLevel",
    date: "2026-09-08",
    readTime: "14 min read",
  },
  {
    slug: "what-is-lead-connector-crm",
    title: "What Is Lead Connector CRM? GoHighLevel's Built-In Calling, Texting & Review Layer, Explained",
    excerpt:
      "Lead Connector is the calling, texting, and review-request system built into every GoHighLevel account — here's what it actually does and how to set it up correctly.",
    category: "GoHighLevel",
    date: "2026-09-10",
    readTime: "8 min read",
  },
  {
    slug: "website-builder-vs-hiring-a-web-design-agency",
    title: "Website Builder vs. Hiring a Web Design Agency: Which Is Right for Your Small Business?",
    excerpt:
      "A small business website builder gets you online fast and cheap — until it can't do what you actually need. Here's exactly where DIY builders stop working and what a professional build fixes.",
    category: "Web Development",
    date: "2026-09-12",
    readTime: "9 min read",
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
