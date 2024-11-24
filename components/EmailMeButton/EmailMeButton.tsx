"use client";

// Externals.
import { useRef, useState } from "react";

// Components.
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

// Icons.
import { FiMail } from "react-icons/fi";

// Styles.
import styles from "./EmailMeButton.module.css";

// EmailMeButton.tsx
export const EmailMeButton = () => {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const count = useRef<number>(0);

  const [content, setContent] = useState("Copied!");
  const [curStyle, setCurStyle] = useState(styles.one);
  const [showTooltip, setShowTooltip] = useState(false);

  // Functions.
  function getToolTipText(clicks: number) {
    if (clicks === 1) return "Email copied!";
    if (clicks === 2) return "Double copied!";
    return "Suuuuuper copied!";
  }

  function getToolTipStyle(clicks: number) {
    if (clicks === 1) return styles.one;
    if (clicks === 2) return styles.two;
    return styles.three;
  }

  function handleEmailClick() {
    count.current += 1;
    if (ref.current) clearTimeout(ref.current);

    setContent(getToolTipText(count.current));
    setCurStyle(getToolTipStyle(count.current));
    setShowTooltip(true);
    navigator.clipboard.writeText("irwinmck@gmail.com");

    ref.current = setTimeout(() => {
      setShowTooltip(false);
      count.current = 0;
      ref.current = null;
    }, 3000);
  }

  // Render.
  return (
    <Tooltip
      content={content}
      show={showTooltip}
      yOffset={2}
      className={`${styles.tooltip} ${curStyle}`}
    >
      <Button Icon={FiMail} onClick={handleEmailClick}>
        Email Me
      </Button>
    </Tooltip>
  );
};
