import fs from "fs";

// Externals.
import Image from "next/image";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { highlight } from "sugar-high";

// Utils.
import { getArticleBySlug, ARTICLE_DIR } from "../utils";
import { baseUrl } from "@/app/sitemap";

// Assets.
import pfp from "@/assets/clean-profile.png";

// Components.
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { Button } from "@/components/Button/Button";

// Styles.
import styles from "./page.module.css";
import { CatagoryChip } from "@/components/CatagoryChip/CatagoryChip";
import { PiHandsClapping, PiHandsClappingLight } from "react-icons/pi";

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
      title: "Mak Irwin - Article not found.",
      description: "This article does not exist.",
    };
  }

  const { title, description, date, image, imageAlt } = article.data;

  return {
    title: `Mak Irwin - ${title}`,
    description: description,
    openGraph: {
      title: `Mak Irwin - ${title}`,
      description: description,
      url: `${baseUrl}/blog/${params.slug}`,
      type: "article",
      publishedTime: new Date(date).toISOString(),
      locale: "en_US",
      images: [
        {
          url: `${baseUrl}/${image}`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Mak Irwin - ${title}`,
      description: description,
      images: [`${baseUrl}/${image}`],
    },
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
    <section className={styles.grid}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.data.title,
            datePublished: article.data.date,
            dateModified: article.data.date,
            description: article.data.desc,
            image: `${baseUrl}/${article.data.image}`,
            url: `${baseUrl}/blog/${params.slug}`,
            author: {
              "@type": "Person",
              name: "Mak Irwin",
            },
          }),
        }}
      />
      <h1 className={styles.title}>{article.data.title}</h1>
      <div className={styles.author}>
        <Image
          src={pfp}
          width={60}
          height={60}
          alt="photo of mak"
          quality={100}
          className={styles.pfp}
        />
        <div className={styles.details}>
          <div>
            <p className={styles.name}>Mak Irwin</p>
            <div className={styles.meta}>
              <CatagoryChip catagory={article.data.catagory} />
              <p className={styles.date}>
                {dayjs(article.data.date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
          <div className={styles.claps}>
            <PiHandsClappingLight size={22} />
          </div>
        </div>
      </div>
      <article className={styles.article}>
        <MDXRemote source={article.content} components={{ ...components }} />
      </article>
      <ProfileCard fullWidth />
      <footer style={{ textAlign: "center" }}>
        <p>Designed and developed by Mak Irwin</p>
      </footer>
    </section>
  );
}
