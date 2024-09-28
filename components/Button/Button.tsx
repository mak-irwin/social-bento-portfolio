"use client";

import { ComponentProps, MouseEvent } from "react";
import type { IconType } from "react-icons";

// Styles.
import styles from "./Button.module.css";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  playSound?: boolean;
  Icon?: IconType;
}

// Button.tsx
export function Button({
  variant,
  Icon,
  children,
  onClick,
  playSound = true,
  ...rest
}: Props) {
  const sound = typeof Audio !== "undefined" ? new Audio("/click.mp3") : null;

  // Functions.
  function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
    if (playSound) sound?.play();
    if (onClick) onClick(e);
  }

  // Render.
  return (
    <button
      onClick={handleOnClick}
      className={`${styles.button} ${styles[variant || "primary"]}`}
      {...rest}
    >
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.text}>{children}</span>
    </button>
  );
}
