// Externals.
import type { Metadata } from "next";

// Components.
import { CurrentRole } from "@/components/CurrentRole/CurrentRole";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { MyLocation } from "@/components/MyLocation/MyLocation";
import { LatestExp } from "@/components/LatestExp/LatestExp";
import { SomeProjects } from "@/components/SomeProjects/SomeProjects";
import { DailyStack } from "@/components/DailyStack/DailyStack";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ArticlePreview } from "@/components/ArticlePreview/ArticlePreview";

// Styles.
import styles from "./page.module.css";

// Metadata.
export const metadata: Metadata = {
  title: "Intro - Mckenzie Irwin",
  description:
    "Mckenzie Irwin's personal portfolio showcasing experience, projects, and writings.",
};

// Home Page.
export default function Home() {
  return (
    <div className={styles.home}>
      {/* Left Side */}
      <div className={styles.left}>
        <ProfileCard />
      </div>
      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.top}>
          <CurrentRole />
          <MyLocation />
        </div>
        <DailyStack />
        <AboutMe />
        <LatestExp />
        <SomeProjects />
        <ArticlePreview />
        <footer style={{ textAlign: "center" }}>
          <p>Designed and developed by Mckenzie Irwin</p>
        </footer>
      </div>
    </div>
  );
}
