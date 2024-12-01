// Externals.
import Image from "next/image";
import type { Metadata } from "next";

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

// Metadata.
export const metadata: Metadata = {
  title: "Experience - Mckenzie Irwin",
  description: "Mckenzie Irwin's work history and experience with additional detail.",
};

// Experience Page.
export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.left}>
        <ProfileCard />
      </div>
      <div className={styles.right}>
        <h2 className={styles.header}>Experience</h2>
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
            <span className={styles.smSpan}>2023 - Pres.</span>
            <div className={styles.article}>
              <ul>
                <li>
                  Leading the modernization of a legacy retail & wholesale precious metal
                  management platform used to trade and fufill metal orders across Canada.
                </li>
                <li>
                  Coordinating a CI/CD migration from legacy cloud and on-prem to a modern
                  pure cloud based solution for our entire application suite.
                </li>
              </ul>
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
            <span className={styles.smSpan}>2021</span>
            <div className={styles.article}>
              <ul>
                <li>
                  Architected and developed a new real-time precious metal auction
                  platform.
                </li>
                <li>
                  Focus on improving trader efficiency by supporting concurrent deal
                  booking and automating parts of the process such as credit checking and
                  info entry.
                </li>
                <li>
                  Leveraged MongoDB change streaming to support an event based
                  architecture and connect all the disparate supporting services.
                </li>
              </ul>
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
            <span className={styles.smSpan}>2020</span>
            <div className={styles.article}>
              <ul>
                <li>
                  Developed an application portal (think app store) to catalogue all
                  internal apps and to enable client-side interop with{" "}
                  <a href="https://interop.io/" target="_blank" rel="noopener noreferrer">
                    Interop.io
                  </a>
                  .
                </li>
                <li>
                  Created a standarized application starter which integrated with all the
                  disparate internal systems, reducing time to production for new apps
                  from weeks to days.
                </li>
              </ul>
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
            <span className={styles.smSpan}>2020</span>
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
            <span className={styles.smSpan}>2019</span>
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
            <span className={styles.smSpan}>2019</span>
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
            <span className={styles.smSpan}>2015 - 2018</span>
          </div>
        </div>
        <footer className={styles.footer}>
          <div />

          <p>Designed and developed by Mckenzie Irwin</p>
        </footer>
      </div>
    </div>
  );
}
