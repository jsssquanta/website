import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <span>
          <img alt="" src="/assets/icons/copyright.svg" />
        </span>
        <span>2022 Jss Quanta Society, Noida</span>
      </div>
      <div className={styles.second}>
        Jss Academy of Technical Education, Sector-62, Noida, U.P. , India -
        201301
      </div>
      <div className={styles.third}>
        <span>
          <a rel="noreferrer" href="https://www.linkedin.com/company/quanta-jss/mycompany/" target="_blank">
            <img src="/assets/icons/linkedin.svg" alt="linkedin icon" />
          </a>
        </span>
        <span>
          <a rel="noreferrer" href="https://www.instagram.com/jssquanta/" target="_blank">
            <img src="/assets/icons/insta.svg" alt="insta icon" />
          </a>
        </span>
        <span>
          <a rel="noreferrer" href="https://www.facebook.com/JSSQuanta" target="_blank">
            <img src="/assets/icons/facebook.svg" alt="facebook icon" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
