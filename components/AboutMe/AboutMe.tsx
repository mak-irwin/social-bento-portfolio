"use client";

// Externals.
import { useState, useRef } from "react";
import Image from "next/image";

// Styles.
import styles from "./AboutMe.module.css";

// Assets.
import wave from "@/assets/wave.png";
import bg1 from "@/assets/forum.jpg";
import bg2 from "@/assets/rock.jpeg";
import bg3 from "@/assets/ocean.jpg";

const IMAGES = [bg1, bg2, bg3];

// AboutMe.tsx
export function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const [imageIdx, setImageIdx] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;

    // Check bounds: Prevent dragging beyond the first or last image.
    if (
      (imageIdx === 0 && offset > 0) ||
      (imageIdx === IMAGES.length - 1 && offset < 0)
    ) {
      return; // Ignore drag movements beyond boundaries.
    }

    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (dragStart === null) return;
    const threshold = ref.current?.offsetWidth || 0;

    if (dragOffset > threshold / 4 && imageIdx > 0) {
      setImageIdx((prev) => prev - 1);
    } else if (dragOffset < -threshold / 4 && imageIdx < IMAGES.length - 1) {
      setImageIdx((prev) => prev + 1);
    }

    setDragStart(null);
    setDragOffset(0);
  };

  // Render.
  return (
    <section>
      <h2 className={styles.header}>About me</h2>
      <div className={styles.row}>
        <div className={styles.card + " " + styles.about}>
          <div className={styles.icon}>
            <Image src={wave} alt="camera emoji" height={25} width={25} />
          </div>
          <p>
            Captivated by technology ever since getting RollerCoaster Tycoon from a cereal
            box.
          </p>
          <p>
            Outside of work you&apos;ll find me rock climbing, discussing stocks, and
            spending time with friends, family, and pets!
          </p>
        </div>
        <div className={styles.card + " " + styles.imageCard}>
          <div
            className={styles.pics}
            ref={ref}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {IMAGES.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="push pin emoji"
                className={styles.image}
                draggable={false}
                style={{
                  objectFit: "cover",
                  translate: `calc(${-100 * imageIdx}% + ${dragOffset}px)`,
                  transition: dragStart ? "none" : "translate 0.3s ease",
                  cursor: dragStart ? "grabbing" : "grab",
                }}
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
