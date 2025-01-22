import { MetadataRoute } from "next";

// Utils.
import { getArticles } from "./blog/utils";

// Static routes.
export const baseUrl = "https://makirwin.com";
export const base_routes = ["", "experience"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = base_routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));

  const articles: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...articles];
}
