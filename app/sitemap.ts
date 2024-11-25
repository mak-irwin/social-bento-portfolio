import { MetadataRoute } from "next";

// Utils.
import { getArticles } from "./blog/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";
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
