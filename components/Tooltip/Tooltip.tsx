"use client";

// Externals.
import { ReactNode, useState, cloneElement, isValidElement, ReactElement } from "react";

// Styles.
import styles from "./Tooltip.module.css";

// Props.
interface Props {
  children: ReactNode;
  content?: ReactNode;
  show?: boolean;
  color?: "green";
  yOffset?: number;
  className?: string;
}

// Tooltip.tsx
export const Tooltip = ({ children, content, show, yOffset, className }: Props) => {
  const [uncontrolledShow, setUncontrolledShow] = useState(false);

  // Ensure event handlers are applied directly to valid child element
  const childWithHandlers =
    isValidElement(children) && typeof children !== "string"
      ? cloneElement(children as ReactElement<any>, {
          onMouseEnter: () => setUncontrolledShow(true),
          onMouseLeave: () => setUncontrolledShow(false),
        })
      : children;

  const shouldShow = () => {
    if (show != undefined) return show;
    return uncontrolledShow;
  };

  // Render.
  return (
    <div className={styles.tooltip}>
      {childWithHandlers}
      <div
        className={`${styles.content} ${shouldShow() && styles.show} ${className}`}
        style={{ marginTop: `${yOffset || 0}px` }}
      >
        {content || "Placeholder.."}
      </div>
    </div>
  );
};
