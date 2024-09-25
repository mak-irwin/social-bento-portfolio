// Components.
import { FiFile } from "react-icons/fi";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";

// Styles.
import styles from "./page.module.css";

// Experience Page.
export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.left}>
        <ProfileCard />
      </div>
      <div className={styles.right}>
        <div className={styles.experienceGrid}>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Lead Software Engineer</div>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Senior Software Engineer</div>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Fullstack Software Engineer</div>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Business Systems Analyst</div>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Fullstack Software Engineer</div>
          <div className={styles.avatar}>
            <FiFile />
          </div>
          <div className={styles.card}>Frontend Software Engineer</div>
        </div>
      </div>
    </div>
  );
}
