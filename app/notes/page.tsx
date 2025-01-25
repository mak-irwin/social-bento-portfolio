// Externals.
import { notFound } from "next/navigation";

// Components.
import { TransitionLink } from "@/components/TransitionLink/TransitionLink";

// Utils.
import { getArticles } from "./utils";

// Notes Page.
export default function Notes() {
  // Returning not found for now until this page is worth building.
  notFound();

  const articles = getArticles();

  // Render.
  return (
    <div>
      {articles.map((a) => (
        <TransitionLink href={`/blog/${a.slug}`} key={a.slug}>
          <h1>{a.title}</h1>
          <p>{a.desc}</p>
          <p>{a.date}</p>
        </TransitionLink>
      ))}
    </div>
  );
}
