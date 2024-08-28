// Components.
import { CurrentRoleCard } from "@/components/CurrentRoleCard/CurrentRoleCard";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";

// Styles.
import styles from "./page.module.css";

// Home Page.
export default function Home() {
  return (
    <div className={styles.home}>
      {/* Left Column */}
      <div>
        <ProfileCard />
      </div>
      {/* Right Side */}
      <div>
        <CurrentRoleCard />
      </div>
    </div>
  );
}
