import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Path to article directory.
export const ARTICLE_DIR = path.join(process.cwd(), "content");

// Util for fetching the right post based on slug.
export const getArticleBySlug = (slug: string) => {
  const filePath = path.join(ARTICLE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
};

// Returns the article metadata in most recent order.
export const getArticles = (count?: number) => {
  const files = fs.readdirSync(ARTICLE_DIR);

  const data = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(ARTICLE_DIR, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: slug,
      title: data.title,
      desc: data.desc,
      catagory: data.catagory,
      date: data.date,
    };
  });

  data.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);

    if (date1 < date2) return 1;
    if (date1 > date2) return -1;
    return 0;
  });

  if (count) return data.slice(0, count);
  return data;
};
