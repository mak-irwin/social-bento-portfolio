"use client";

// Externals.
import { ReactNode, useState, cloneElement, isValidElement, ReactElement } from "react";

// Styles.
import styles from "./Tooltip.module.css";

// Props.
interface Props {
  children: ReactNode;
  content?: ReactNode;
}

// Tooltip.tsx
export const Tooltip = ({ children, content }: Props) => {
  const [show, setShow] = useState(false);

  // Ensure event handlers are applied directly to valid child element
  const childWithHandlers =
    isValidElement(children) && typeof children !== "string"
      ? cloneElement(children as ReactElement<any>, {
          onMouseEnter: () => setShow(true),
          onMouseLeave: () => setShow(false),
        })
      : children;

  // Render.
  return (
    <div className={styles.tooltip}>
      {childWithHandlers}
      <div className={`${styles.content} ${show && styles.show}`}>
        {content || "Placeholder.."}
      </div>
    </div>
  );
};
