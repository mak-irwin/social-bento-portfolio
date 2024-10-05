// Externals.
import { Fragment } from "react";
import dayjs from "dayjs";

// Components.
import { TransitionLink } from "../TransitionLink/TransitionLink";

// Utils.
import { getArticles } from "@/app/blog/utils";

// Icons.
import { FiChevronRight } from "react-icons/fi";

// Styles.
import styles from "./ArticlePreview.module.css";

// ArticlePreview.tsx
export function ArticlePreview() {
  const articles = getArticles(3);

  function getChipStyles(catagory: string) {
    if (catagory === "Web Development") return styles.blue;
    if (catagory === "Virtual Reality") return styles.purple;
    if (catagory === "Progress Report") return styles.green;
    return styles.default;
  }

  // Render.
  return (
    <section className={styles.latestExp}>
      <div className={styles.header}>
        <h2>Some thoughts</h2>
      </div>
      <div className={styles.card}>
        {articles.map((a, i) => (
          <Fragment key={a.slug}>
            <TransitionLink href={`/blog/${a.slug}`} className={styles.article}>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                {/* <p className={styles.desc}>{a.desc}</p> */}
                <div className={styles.bottom}>
                  <div className={`${styles.chip} ${getChipStyles(a.catagory)}`}>
                    {a.catagory}
                  </div>
                  <div className={styles.date}>
                    {dayjs(a.date).format("MMM DD, YYYY")}
                  </div>
                </div>
              </div>
              <FiChevronRight className={styles.caret} />
            </TransitionLink>
            {i < articles.length - 1 && <div className={styles.hr} />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
