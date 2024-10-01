import fs from "fs";

// Externals.
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Utils.
import { getPostBySlug, POSTS_DIR } from "../blog.utils";

// Components.
import { Button } from "@/components/Button/Button";

// Statically generate pages at build time based off file slugs.
export async function generateStaticParams() {
  const files = fs.readdirSync(POSTS_DIR);
  return files.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

// Generate the meta-data for the posts.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: post.data.title,
    description: post.data.description,
  };
}

const components = {
  Button: Button,
};

// Specific Blog Post.
export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  // Render.
  return (
    <article>
      <MDXRemote source={post.content} components={{ ...components }} />
    </article>
  );
}
