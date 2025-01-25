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
import { Footer } from "@/components/Footer/Footer";

// Utils.
import { baseUrl } from "./sitemap";

// Styles.
import styles from "./page.module.css";

// Metadata.
export const metadata: Metadata = {
  title: "Mak Irwin - Home",
  description: "Personal portfolio highlighting experience, projects, and some notes.",
  openGraph: {
    title: `Mak Irwin - Home`,
    description: "Personal portfolio highlighting experience, projects, and some notes.",
    url: baseUrl,
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/images/home-og.png`,
        alt: "Mak Irwin - Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mak Irwin - Home`,
    description: "Personal portfolio highlighting experience, projects, and some notes.",
    images: [`${baseUrl}/images/home-og.png`],
  },
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
        <Footer />
      </div>
    </div>
  );
}
