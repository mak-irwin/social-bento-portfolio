// Components.
import { Button } from "@/components/Button/Button";

// Icons.
import { FiFileText, FiMail } from "react-icons/fi";

// Styles.
import styles from "./ProfileCard.module.css";

// ProfileCard.tsx
export function ProfileCard() {
  return (
    <div className={styles.card}>
      {/* Top Backgound Image */}
      <div className={styles.bg} />
      {/* Profile Icon */}
      <div></div>
      {/* Name */}
      <h1>Elijah Irwin</h1>
      {/* Summary */}
      <p>
        Software engineer with over 5 years experience developing fullstack enterprise web
        applications.
      </p>
      {/* Action Buttons */}
      <div>
        <Button Icon={FiMail}>Email Me</Button>
        <Button Icon={FiFileText} variant="secondary">
          View Resume
        </Button>
      </div>
    </div>
  );
}
