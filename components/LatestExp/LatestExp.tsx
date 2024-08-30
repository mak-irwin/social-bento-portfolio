// Externals.
import Image from "next/image";

// Styles.
import styles from "./LatestExp.module.css";

// Assets.
import coin from "@/assets/coin.png";
import mage from "@/assets/mage.png";
import tools from "@/assets/tools.png";

// LatestExp.tsx
export function LatestExp() {
  return (
    <section className={styles.latestExp}>
      <h2 className={styles.header}>Latest experience</h2>
      <div className={styles.card}>
        <div className={styles.role}>
          <div className={styles.emoji}>
            <Image src={coin} height={43} width={43} alt="silver coin emoji" />
          </div>
          <div>
            <h3>Lead Software Engineer</h3>
            <h4>TD Securities - Precious Metal Automation</h4>
          </div>
          <p>2023 - Pres.</p>
        </div>
        <div className={styles.hr} />
        <div className={styles.role}>
          <div className={styles.emoji}>
            <Image src={mage} height={45} width={45} alt="old wizard emoji" />
          </div>
          <div>
            <h3>Senior Software Engineer</h3>
            <h4>TD Securities - App Engineering & Design</h4>
          </div>
          <p>2021 - 2023</p>
        </div>
        <div className={styles.hr} />
        <div className={styles.role}>
          <div className={styles.emoji}>
            <Image src={tools} height={38} width={38} alt="tools emoji" />
          </div>
          <div>
            <h3>Software Engineer</h3>
            <h4>TD Securities - Internal Tooling Development</h4>
          </div>
          <p>2020 - 2021</p>
        </div>
      </div>
    </section>
  );
}
