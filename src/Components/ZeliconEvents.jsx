import styles from "../styles/zealicon.module.css";

export default function ZeliconEvents() {
  return (
    <div className={styles.section}>
    <h1 className={styles.heading}> Our events</h1>
    <div className={styles.events}>
      <img src="assets/zealicon/mighty.png" alt="poster1"/>
      <img src="assets/zealicon/Robo olympics.png" alt="poster2"/>
      <img src="assets/zealicon/Tommorow's tesla.png" alt="poster3"/>
    </div>
    </div>
  );
}
