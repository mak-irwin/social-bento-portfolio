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
        <Image src={logo} width={40} height={40} alt="logo of TD Bank" className={styles.logo} />
        <div>
          <h2>Lead Software Engineer</h2>
          <h3>TD Securities</h3>
        </div>
        <p>
          Currently working on projects which enable the fulfillment and replenishment of precious
          metals orders across Canada.
        </p>
      </div>
    </section>
  );
}
