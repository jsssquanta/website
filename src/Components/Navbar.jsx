import { useState } from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

function Navbar() {
  const sendEmail = () => {
    window.open(
      "mailto:quanta.jssaten@gmail.com?subject=SendMail&body=Description"
    );
  };
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  const handleToggle = () => {
    setnav(!nav);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? `${styles.nav} ${styles.active}` : styles.nav}>
      <a href="/">
        <img src={logo} alt="Quanta logo" className={styles.logo_img} />
      </a>
      <ul className={styles.menu}>
        <li>
          <Link to="/" className={styles.menu_links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/resources" className={styles.menu_links}>
            Resources
          </Link>
        </li>
        <li>
          <Link to="/team" className={styles.menu_links}>
            Team
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.menu_links}>
            Projects
          </Link>
        </li>
        <li>
          {/* <button onClick={sendEmail} className={`${styles.menu_links} ${styles.active}`}>
            Contact us
          </button> */}
          <button>
          <Link to="/zealicon" className={styles.menu_links}>
            Zealicon 2023
          </Link>
          </button>
        </li>
      </ul>
      <div className="toggle-icon" onClick={handleToggle}>
        {nav ? (
          <Icon icon={x} className="iconx" size="28" />
        ) : (
          <Icon icon={menu} size="28" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
