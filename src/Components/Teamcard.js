import styles from "../styles/Teamcard.module.css";

export default function Teamcard({ props }) {
  return (
    <div className={styles.container}>
      <a
        href={props.insta}
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/insta.svg" alt="insta icon" />
      </a>
      <a
        href={props.github}
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/github.svg" alt="github icon" />
      </a>
      <a
        href={props.linkedin}
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/linkedin.svg" alt="linkedin icon" />
      </a>

      <img
        className={styles.cardImage}
        src={props.img}
        alt={`${props.title}`}
      ></img>
      <div className={styles.cardBodyContainer}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardDesc}>{props.description}</p>
      </div>
    </div>
  );
}
