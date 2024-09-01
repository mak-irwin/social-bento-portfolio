// Icons.
import { FiChevronRight } from "react-icons/fi";

// Styles.
import styles from "./SomeProjects.module.css";

// SomeProjects.tsx
export function SomeProjects() {
  return (
    <section>
      <h2 className={styles.header}>Some projects</h2>
      <div className={styles.card}>
        <div className={styles.project}>
          {/* Placeholder div, will be Image eventually. */}
          <div className={styles.icon} style={{ backgroundColor: "#FFC5C5" }} />
          {/* Middle Text Section */}
          <div className={styles.middle}>
            <h3>Walkie</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lacus lorem sed vel sodales non. Elementum sed
              et et in sit leo orci dolor imperdiet.
            </p>
          </div>
          <FiChevronRight className={styles.caret} />
        </div>
        <div className={styles.hr} />
        <div className={styles.project}>
          {/* Placeholder div, will be Image eventually. */}
          <div className={styles.icon} style={{ backgroundColor: "#C5FFEA" }} />
          {/* Middle Text Section */}
          <div className={styles.middle}>
            <h3>Web XR Game</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lacus lorem sed vel sodales non. Elementum sed
              et et in sit leo orci dolor imperdiet.
            </p>
          </div>
          <FiChevronRight className={styles.caret} />
        </div>
      </div>
    </section>
  );
}
