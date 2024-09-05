"use client";

import Image from "next/image";
import { useState } from "react";

// Styles.
import styles from "./AboutMe.module.css";

import camera from "@/assets/camera.png";
import bg1 from "@/assets/bg-1.jpg";
import bg2 from "@/assets/bg-2.jpg";
import bg3 from "@/assets/bg-3.jpg";

const IMAGES = [bg1, bg2, bg3];

// AboutMe.tsx
export function AboutMe() {
  const [imageIdx, setImageIdx] = useState(1);

  return (
    <section>
      <h2 className={styles.header}>About me</h2>
      <div className={styles.row}>
        <div className={styles.card + " " + styles.about}>
          <div className={styles.icon}>
            <Image src={camera} alt="camera emoji" height={19} width={25} />
          </div>
          <p>
            Currently working on projects which enable the fulfillment and replenishment
            of precious metals orders across Canada.
          </p>
        </div>
        <div className={styles.card + " " + styles.imageCard}>
          <div className={styles.pics}>
            {IMAGES.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="push pin emoji"
                className={styles.image}
                style={{ translate: `${-100 * imageIdx}%` }}
              />
            ))}
          </div>
          <div className={styles.buttons}>
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setImageIdx(i)}
                className={`${styles.btn} ${i == imageIdx ? styles.active : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
