// Utils.
import { getArticles } from "@/app/blog/utils";

// Styles.
import styles from "./ArticlePreview.module.css";
import { TransitionLink } from "../TransitionLink/TransitionLink";

// ArticlePreview.tsx
export function ArticlePreview() {
  const articles = getArticles(3);

  // Render.
  return (
    <section className={styles.latestExp}>
      <div className={styles.header}>
        <h2>Some thoughts</h2>
      </div>
      <div className={styles.card}>
        {articles.map((a) => (
          <TransitionLink href={`/blog/${a.slug}`} key={a.slug}>
            <h3>{a.title}</h3>
            <div>
              <div>{a.date}</div>
              <div>{a.catagory}</div>
            </div>
          </TransitionLink>
        ))}
      </div>
    </section>
  );
}
