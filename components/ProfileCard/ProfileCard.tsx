// Externals.
import Image from "next/image";

// Components.
import { EmailMeButton } from "@/components/EmailMeButton/EmailMeButton";
import { ResumeButton } from "@/components/ResumeButton/ResumeButton";

// Icons.
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Styles.
import styles from "./ProfileCard.module.css";

// Assets.
import pfp from "@/assets/clean-profile.png";

interface Props {
  fullWidth?: boolean;
}

// ProfileCard.tsx
export function ProfileCard({ fullWidth = false }: Props) {
  // Render.
  return (
    <section className={`${styles.card} ${fullWidth ? styles.fullWidth : ""}`}>
      {/* Top Backgound Image */}
      <div className={styles.bg} />

      {/* Bottom Content */}
      <div className={styles.bottom}>
        {/* Profile Icon */}
        <Image
          src={pfp}
          width={110}
          height={110}
          alt="photo of mak"
          quality={100}
          className={styles.pfp}
        />

        {/* Name */}
        <h1>Mak Irwin</h1>

        {/* Summary */}
        <p>
          Software engineer with 5+ years experience developing fullstack enterprise web
          applications in the finance industry.
        </p>

        {/* Action Buttons */}
        <div className={styles.buttons}>
          <EmailMeButton />
          <ResumeButton />
        </div>

        {/* Socials */}
        <div className={styles.icons}>
          <a
            className={styles.gh}
            href="https://github.com/elijah-irwin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            className={styles.li}
            href="https://www.linkedin.com/in/irwinmck/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            className={styles.ig}
            href="https://www.instagram.com/mak_irwin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
