"use client";

// Externals.
import { ComponentProps } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

// Styles.
import styles from "./TransitionLink.module.css";

// Props.
interface Props extends LinkProps, ComponentProps<"a"> {
  href: string;
  playSound?: boolean;
  children: ReactNode;
}

// TransitionLink.tsx
export const TransitionLink = ({ href, playSound = true, children, ...props }: Props) => {
  const router = useRouter();
  const sound = typeof Audio !== "undefined" ? new Audio("/click.mp3") : null;

  const handleClick = async (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (playSound) sound?.play();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(250);
    router.push(href);
    await sleep(250);
    body?.classList.remove("page-transition");
  };

  // Render.
  return (
    <Link href={href} onClick={handleClick} className={styles.link} {...props}>
      {children}
    </Link>
  );
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
