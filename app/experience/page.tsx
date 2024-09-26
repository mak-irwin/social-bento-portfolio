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
            <h4>TD Securities - Precious Metal Automation</h4>
            <div className={styles.article}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
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
            <h4>TD Securities - App Engineering & Design</h4>
            <div className={styles.article}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
              </p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, praesentium
                quibusdam dolorum necessitatibus adipisci iusto at, optio molestiae
                distinctio quas fuga eligendi nesciunt numquam est in voluptates et
                officiis consequatur!
              </p>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={school} height={24} width={28} alt="school emoji" />
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <h3>Student</h3>
              <span>2015 - 2018</span>
            </div>
            <h4>Ryerson University - Computer Science</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
