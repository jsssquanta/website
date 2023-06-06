import { Link } from "react-router-dom";
import styles from "../styles/zealicon.module.css"; 
export default function ZealiconNavbar() {
  return (
    <nav className={styles.nav}>
      <img src="/logo.svg" alt="" className= {styles.logo}></img>
      <Link className={styles.link} to="/">
        <p className={styles.site}>www.jssquanta.com</p>
        <img
          src="/arrow_up_right.svg"
          alt=""
          className={styles.arrow}
        ></img>
      </Link>
    </nav>
  );
}
