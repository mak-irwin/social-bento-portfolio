// Components.
import { CurrentRole } from "@/components/CurrentRole/CurrentRole";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { MyLocation } from "@/components/MyLocation/MyLocation";
import { LatestExp } from "@/components/LatestExp/LatestExp";

// Styles.
import styles from "./page.module.css";

// Home Page.
export default function Home() {
  return (
    <div className={styles.home}>
      {/* Left Column */}
      <div className={styles.left}>
        <ProfileCard />
      </div>
      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.top}>
          <CurrentRole />
          <MyLocation />
        </div>
        <LatestExp />
      </div>
    </div>
  );
}
