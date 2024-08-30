// Components.
import { CurrentRole } from "@/components/CurrentRole/CurrentRole";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { MyLocation } from "@/components/MyLocation/MyLocation";

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
        <CurrentRole />
        <MyLocation />
      </div>
    </div>
  );
}
