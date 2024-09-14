"use client";
import { Suspense } from "react";

// Externals.
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// Components.
import { Globe } from "@/components/Globe/Globe";

// Styles.
import styles from "./MyLocation.module.css";

// Assets.
import pin from "@/assets/push-pin.png";

// MyLocation.tsx
export function MyLocation() {
  // Render.
  return (
    <section className={styles.myLocation}>
      <h2 className={styles.header}>My location</h2>
      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={pin} alt="push pin emoji" height={28} width={28} />
        </div>
        <h3>Guelph, ON</h3>
        <div className={styles.globe}>
          <Canvas camera={{ position: [0, 0, 17] }}>
            <Suspense fallback={null}>
              <Globe position={[5, 0, 0]} rotation={[0.1, 2, 0.1]} />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
