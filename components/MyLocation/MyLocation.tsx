// Externals.
import Image from "next/image";

// Styles.
import styles from "./MyLocation.module.css";

// Assets.
import pin from "@/assets/push-pin.png";

// MyLocation.tsx
export function MyLocation() {
  return (
    <section className={styles.myLocation}>
      <h2 className={styles.header}>My location</h2>
      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={pin} alt="push pin emoji" height={28} width={28} />
        </div>
        <h3>Guelph, ON</h3>
      </div>
    </section>
  );
}
