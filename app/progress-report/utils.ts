import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const ARTICLE_DIR = path.join(process.cwd(), "content");

// Util for fetching the right post based on slug.
export const getArticleBySlug = (slug: string) => {
  const filePath = path.join(ARTICLE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
};
