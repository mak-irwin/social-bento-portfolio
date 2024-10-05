// Components.
import { TransitionLink } from "@/components/TransitionLink/TransitionLink";

// Utils.
import { getArticles } from "./utils";

// Progress Report Page.
export default function Blog() {
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
