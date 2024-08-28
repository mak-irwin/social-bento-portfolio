// Externals.
import Image from "next/image";

// Components.
import { Button } from "@/components/Button/Button";

// Icons.
import { FiFileText, FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Styles.
import styles from "./ProfileCard.module.css";

// Assets.
import pfp from "@/assets/clean-profile.png";

// ProfileCard.tsx
export function ProfileCard() {
  return (
    <div className={styles.card}>
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
          Software engineer with over 5 years experience developing fullstack enterprise web
          applications.
        </p>

        {/* Action Buttons */}
        <div className={styles.buttons}>
          <Button Icon={FiMail}>Email Me</Button>
          <Button Icon={FiFileText} variant="secondary">
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
    </div>
  );
}
