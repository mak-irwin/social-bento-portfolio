"use client";

// Externals.
import { useRef, useState } from "react";
import Image from "next/image";

// Components.
import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

// Icons.
import { FiFileText, FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Styles.
import styles from "./ProfileCard.module.css";

// Assets.
import pfp from "@/assets/clean-profile.png";

// ProfileCard.tsx
export function ProfileCard() {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const count = useRef<number>(0);

  const [content, setContent] = useState("Copied!");
  const [showTooltip, setShowTooltip] = useState(false);

  // Functions.
  function getToolTipText(clicks: number) {
    if (clicks === 1) return "Copied!";
    if (clicks === 2) return "Double Copied!";
    return "Suuuuuper Copied!";
  }

  function handleEmailClick() {
    count.current += 1;
    if (ref.current) clearTimeout(ref.current);

    setContent(getToolTipText(count.current));
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
    <section className={styles.card}>
      {/* Top Backgound Image */}
      <div className={styles.bg} />

      {/* Bottom Content */}
      <div className={styles.bottom}>
        {/* Profile Icon */}
        <Image
          src={pfp}
          width={110}
          height={110}
          alt="photo of mckenzie"
          quality={100}
          className={styles.pfp}
        />

        {/* Name */}
        <h1>Mckenzie Irwin</h1>

        {/* Summary */}
        <p>
          Software engineer with over 5 years experience developing fullstack enterprise
          web applications.
        </p>

        {/* Action Buttons */}
        <div className={styles.buttons}>
          <Tooltip
            content={content}
            show={showTooltip}
            yOffset={2}
            className={styles.tooltip}
          >
            <Button Icon={FiMail} onClick={handleEmailClick}>
              Email Me
            </Button>
          </Tooltip>
          <Button
            Icon={FiFileText}
            variant="secondary"
            onClick={() => window.open("/mckenzie-irwin-resume.pdf", "_blank")}
          >
            View Resume
          </Button>
        </div>

        {/* Socials */}
        <div className={styles.icons}>
          <div className={styles.gh}>
            <FaGithub size={22} />
          </div>
          <div className={styles.li}>
            <FaLinkedin size={22} />
          </div>
          <div className={styles.ig}>
            <FaInstagram size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}
