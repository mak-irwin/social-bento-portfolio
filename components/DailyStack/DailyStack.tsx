import Image from "next/image";

// Components.
import { Tooltip } from "@/components/Tooltip/Tooltip";

// Styles.
import styles from "./DailyStack.module.css";

// Images.
import react from "@/assets/react-logo.svg";
import node from "@/assets/node-logo.png";
import express from "@/assets/express-logo.png";
import mantine from "@/assets/mantine-logo.svg";
import mongo from "@/assets/mongo-logo.svg";
import interop from "@/assets/interop-logo.svg";
import query from "@/assets/react-query-logo.svg";
import spring from "@/assets/spring-logo.png";
import typescript from "@/assets/typescript-logo.png";
import vite from "@/assets/vite-logo.png";

// DailyStack.tsx
export function DailyStack() {
  return (
    <section>
      <h2 className={styles.header}>Daily stack</h2>
      <p className={styles.text}>What I&apos;m using day-to-day in my current role.</p>
      <div className={styles.skills}>
        <Tooltip content="React">
          <div className={styles.circle}>
            <Image
              src={react}
              width={38}
              height={38}
              alt="react logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="React Query">
          <div className={styles.circle}>
            <Image
              src={query}
              width={36}
              height={36}
              alt="react query logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Mantine">
          <div className={styles.circle}>
            <Image
              src={mantine}
              width={36}
              height={36}
              alt="mantine logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Interop.io">
          <div className={styles.circle}>
            <Image
              src={interop}
              width={32}
              height={32}
              alt="interop io logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Vite">
          <div className={styles.circle}>
            <Image
              src={vite}
              width={32}
              height={32}
              alt="vite logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Node">
          <div className={styles.circle}>
            <Image
              src={node}
              width={32}
              height={32}
              alt="node js logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Express">
          <div className={styles.circle}>
            <Image
              src={express}
              width={34}
              height={34}
              alt="express js logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="TypeScript">
          <div className={styles.circle}>
            <Image
              src={typescript}
              width={30}
              height={30}
              alt="typescript logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="MongoDB">
          <div className={styles.circle}>
            <Image
              src={mongo}
              width={40}
              height={40}
              alt="mongo db logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
        <Tooltip content="Spring Boot">
          <div className={styles.circle}>
            <Image
              src={spring}
              width={34}
              height={30}
              alt="spring boot logo"
              className={styles.image}
            />
          </div>
        </Tooltip>
      </div>
    </section>
  );
}
