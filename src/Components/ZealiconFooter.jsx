import { Link } from "react-router-dom";
import styles from "../styles/ZealiconFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper1}>
        <img src="/logo.svg" alt="" className={styles.logo}></img>
        <div>
          <h3 className={styles.addressHeading}>Address</h3>
          <p className={styles.addressContent}>
            JSS Academy of Technical Education,
            <br />
            Sector-62, Noida,
            <br />
            Uttar Pradesh,
            <br />
            India
            <br />
            Pincode - 201301
          </p>
        </div>
        <div>
          <h3 className={styles.addressHeading}>Get In Touch</h3>
          <div className={styles.gitContainer}>
            <Link
              className={styles.gitLink}
              to=""
              onClick={() =>
                (window.location = "mailto:quanta.jssaten@gmail.com")
              }
            >
              quanta.jssaten@gmail.com
            </Link>
            <img
              src="/arrow_up_right.svg"
              alt=""
              className={styles.gitArrow}
            ></img>
          </div>
        </div>

        <div>
          <h3 className={styles.addressHeading}>Socials</h3>
          <div className={styles.linksContainer}>
            <a
              href="https://www.instagram.com/jssquanta/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/quanta-jss/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://discord.com/channels/961519628872450058/961519628872450061"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wtfContainer}>
        <div>© 2023 JSS Quanta</div>

        <div
          className={styles.scrollDiv}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/arrow_up_left.svg"
            alt=""
            className={styles.gitArrow}
          ></img>
          <p>Get To Top</p>
        </div>
      </div>
    </footer>
  );
}
