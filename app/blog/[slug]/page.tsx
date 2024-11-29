import fs from "fs";

// Externals.
// import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { highlight } from "sugar-high";

// Utils.
import { getArticleBySlug, ARTICLE_DIR } from "../utils";

// Components.
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
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
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Blog - Article not found.",
      description: "This article does not exist.",
    };
  }

  return {
    title: `Blog - ${article.data.title}`,
    description: article.data.desc,
  };
}

// Injected components to MDXRemote renderer.
const components = {
  Button: Button,
  code: (props: any) => (
    <code dangerouslySetInnerHTML={{ __html: highlight(props.children) }} />
  ),
};

// Article Page.
export default async function Post({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) notFound();

  // Render.
  return (
    <div className={styles.grid}>
      <article className={styles.article}>
        <MDXRemote source={article.content} components={{ ...components }} />
      </article>
      <aside>
        <ProfileCard />
      </aside>
    </div>
  );
}
