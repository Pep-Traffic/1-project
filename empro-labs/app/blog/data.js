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
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
