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

// ProfileCard.tsx
export function ProfileCard() {
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
          web applications in the fintech industry.
        </p>

        {/* Action Buttons */}
        <div className={styles.buttons}>
          <EmailMeButton />
          <ResumeButton />
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
