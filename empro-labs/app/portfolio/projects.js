// Single source for every project shown on /portfolio (ring and grid).
// Descriptions state only what the live site observably is and the platform
// it runs on. No invented metrics, client quotes, or results.
export const PROJECTS = [
  {
    name: "Jeff Flowers Insurance",
    url: "https://jflowersinsurance.com",
    platform: "GoHighLevel",
    industry: "Insurance agency",
    location: "Murfreesboro, TN",
    summary:
      "Website for an independent insurance agency, built on GoHighLevel so every quote request lands straight in the CRM.",
    built: ["GoHighLevel website", "Online quote request form", "Leads routed into the CRM"],
  },
  {
    name: "PracForge",
    url: "https://pracforge.com",
    platform: "WordPress",
    industry: "Dental & medical services",
    summary:
      "WordPress site for a partner serving dental and medical practices, with the services laid out for a practice owner to scan quickly.",
    built: ["Custom WordPress build", "Service pages", "Contact and inquiry flow"],
  },
  {
    name: "Mangoholic",
    url: "https://mangoholicae.com",
    platform: "WooCommerce",
    industry: "Fresh fruit delivery",
    summary: "WooCommerce storefront for a fresh fruit delivery brand, with a product catalog and full checkout.",
    built: ["WooCommerce store", "Product catalog", "Cart and checkout"],
  },
  {
    name: "CorePower Peptide",
    url: "https://corepowerpeptide.com",
    platform: "Custom",
    industry: "Research products",
    summary: "Custom-built product catalog and content site, structured so each product has its own detail page.",
    built: ["Custom build", "Product catalog", "Content pages"],
  },
  {
    name: "What Are Peptides",
    url: "https://whatarepeptides.us",
    platform: "Custom",
    industry: "Educational content",
    summary: "Custom-built educational content site, organized around explainer articles and topic pages.",
    built: ["Custom build", "Article library", "Topic navigation"],
  },
  {
    name: "Motscbuy",
    url: "https://motscbuy.com",
    platform: "Custom",
    industry: "Research products",
    summary: "Custom-built single-product site, focused on one product with its specifications and ordering.",
    built: ["Custom build", "Single-product layout", "Ordering flow"],
  },
  {
    name: "AIMTN",
    url: "https://aimtn.org",
    platform: "Custom",
    industry: "Nonprofit",
    summary: "Custom-built website for a nonprofit organization, presenting its mission and programs.",
    built: ["Custom build", "Mission and program pages", "Contact flow"],
  },
];

export const PLATFORMS = ["All", "GoHighLevel", "WordPress", "WooCommerce", "Custom"];

export function domainOf(url) {
  return String(url).replace(/^https?:\/\//, "").replace(/\/$/, "");
}
