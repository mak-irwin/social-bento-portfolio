// Externals.
import Image from "next/image";

// Styles.
import styles from "./CurrentRole.module.css";

// Assets.
import logo from "@/assets/td-logo.png";

// CurrentRole.tsx
export function CurrentRole() {
  return (
    <section className={styles.currentRole}>
      <h2 className={styles.header}>Current role</h2>
      <div className={styles.card}>
        <Image
          src={logo}
          width={42}
          height={42}
          alt="logo of TD Bank"
          className={styles.logo}
        />
        <div>
          <h3>Lead Software Engineer</h3>
          <h4>TD Securities</h4>
        </div>
        <p>
          Currently working on projects which enable the fulfillment and replenishment of
          precious metals across Canada.
        </p>
      </div>
    </section>
  );
}
