import { ComponentProps } from "react";
import type { IconType } from "react-icons";

// Styles.
import styles from "./Button.module.css";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  Icon?: IconType;
}

// Button.tsx
export function Button({ variant, Icon, children, ...props }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant || "primary"]}`} {...props}>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.text}>{children}</span>
    </button>
  );
}
