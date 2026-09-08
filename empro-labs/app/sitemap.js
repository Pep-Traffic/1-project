import { posts } from "./blog/data";

const BASE_URL = "https://www.emprolabs.com";

const routes = [
  "/",
  "/services",
  "/services/web-development",
  "/services/seo",
  "/services/ads-management",
  "/portfolio",
  "/about",
  "/about/team/umair-gujjar",
  "/about/team/adnan-javed",
  "/contact",
  "/blog",
  ...posts.map((post) => `/blog/${post.slug}`),
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
