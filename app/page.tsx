import Image from "next/image";
import styles from "./page.module.css";

import bg from '@/assets/loft-bg.jpg'


export default function Home() {
  return (
    <div>
      {/* Widget Card */}
      <div className={styles.card}>
        {/* Top Backgound Image */}
        <div className={styles.bg} />
        {/* Profile Icon */}
        <div>

        </div>
        {/* Name */}
        <h1>Elijah Irwin</h1>
        {/* Summary */}
        <p>Software engineer with over 5 years experience developing fullstack enterprise web applications.</p>
        {/* Action Buttons */}
        <div>
          <button>Email Me</button>
          <button>View Resume</button>
        </div>
      </div>
    </div>
  )
}
