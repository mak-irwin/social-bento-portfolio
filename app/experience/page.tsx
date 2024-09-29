// Externals.
import Image from "next/image";

// Components.
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";

// Assets.
import coin from "@/assets/coin.png";
import mage from "@/assets/mage.png";
import tools from "@/assets/tools.png";
import clipboard from "@/assets/clipboard.png";
import bank from "@/assets/bank.png";
import euro from "@/assets/euro.png";
import school from "@/assets/school.png";

// Styles.
import styles from "./page.module.css";

// Experience Page.
export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.left}>
        <ProfileCard />
      </div>
      <div className={styles.right}>
        <div className={styles.experienceGrid}>
          <div className={styles.avatar}>
            <Image src={coin} height={35} width={35} alt="silver coin emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Lead Software Engineer</h3>
              <span>2023 - Pres.</span>
            </div>
            <h4>TD Securities - App Engineering & Design</h4>
            <div className={styles.article}>
              <p>Currently leading the development of Wholesale UI development.</p>
              <p>Coordinating the migration from current cloud offering to GCP.</p>
              <p>
                Lead a team of 5 developers to rebuild legacy UI for booking precious
                metal trades.
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={mage} height={32} width={32} alt="senior mage emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Senior Software Engineer</h3>
              <span>2021</span>
            </div>
            <h4>TD Securities - Precious Metal Automation</h4>
            <div className={styles.article}>
              <p>Architect Metro Auctions Platform</p>
              <p>
                Improved trader efficiency by enabling concurrent deal bookings and
                automating aspects of the deal process like credit checking and info
                entry.
              </p>
              <p>
                Leveraged MongoDB change streaming to connect disparate systems and create
                an event based architecture.
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={tools} height={27} width={27} alt="tools emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Fullstack Software Engineer</h3>
              <span>2020</span>
            </div>
            <h4>TD Securities - Internal Tooling Development</h4>
            <div className={styles.article}>
              <p>Workspace</p>
              <p>App Starter</p>
              <p>Internal Components Library</p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={clipboard} height={26} width={26} alt="clipboard emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Business Systems Analyst</h3>
              <span>2020</span>
            </div>
            <h4>TD Bank - Mainframe</h4>
            <div className={styles.article}>
              <p>
                Had the opportunity to try out an analysis role and figured it
                couldn&apos;t hurt. Quickly realized I enjoyed development more but I
                think seeing the perspective from the other side of the business was
                valuable.
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={bank} height={26} width={26} alt="bank emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Fullstack Software Engineer</h3>
              <span>2019</span>
            </div>
            <h4>TD Bank - Business Banking</h4>
            <div className={styles.article}>
              <p>
                This role was primarily focused on development of an Angular application
                for data collection intended to replace a legacy process for onboarding
                business clients.
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={euro} height={28} width={28} alt="euro bank note emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Frontend Software Engineer</h3>
              <span>2019</span>
            </div>
            <h4>TD Securities - FX Trading</h4>
            <div className={styles.article}>
              <p>
                My first job in tech! Spent most of this time learning but was able to
                deliver some realtime charting views utilizing React and WebSockets.
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={school} height={24} width={28} alt="school emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Undergraduate</h3>
              <span>2015 - 2018</span>
            </div>
            <h4>Ryerson University - B.Sc. Computer Science (Honours) </h4>
          </div>
        </div>
        <footer className={styles.footer}>
          <div />
          <p>
            Copyright {new Date().getFullYear()} - Designed and Developed by Mckenzie
            Irwin
          </p>
        </footer>
      </div>
    </div>
  );
}
