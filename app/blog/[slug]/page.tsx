import fs from "fs";

// Externals.
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { highlight } from "sugar-high";

// Utils.
import { getArticleBySlug, ARTICLE_DIR } from "../utils";

// Components.
import { Button } from "@/components/Button/Button";

// Styles.
import styles from "./page.module.css";

// Statically generate pages at build time based off file slugs.
export async function generateStaticParams() {
  const files = fs.readdirSync(ARTICLE_DIR);
  return files.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

// Generate the meta-data for the posts.
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "This article does not exist.",
    };
  }

  return {
    title: article.data.title,
    description: article.data.desc,
  };
}

const components = {
  Button: Button,
  code: (props: any) => (
    <code dangerouslySetInnerHTML={{ __html: highlight(props.children) }} />
  ),
};

// Article Page.
export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);

  if (!article) notFound();

  // Render.
  return (
    <article className={styles.article}>
      <MDXRemote source={article.content} components={{ ...components }} />
    </article>
  );
}
