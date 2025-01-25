// Externals.
import { Fragment } from "react";
import dayjs from "dayjs";

// Components.
import { TransitionLink } from "../TransitionLink/TransitionLink";
import { CatagoryChip } from "../CatagoryChip/CatagoryChip";

// Utils.
import { getArticles } from "@/app/notes/utils";

// Icons.
import { FiChevronRight } from "react-icons/fi";

// Styles.
import styles from "./ArticlePreview.module.css";

// ArticlePreview.tsx
export function ArticlePreview() {
  const articles = getArticles(3);

  // Render.
  return (
    <section className={styles.latestExp}>
      <div className={styles.header}>
        <h2>Some notes</h2>
      </div>
      <div className={styles.card}>
        {articles.map((a, i) => (
          <Fragment key={a.slug}>
            <TransitionLink
              href={`/notes/${a.slug}`}
              className={styles.article}
              playSound={false}
            >
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <div className={styles.bottom}>
                  <CatagoryChip catagory={a.catagory} />
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
