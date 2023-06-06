import Teamcard from "./Teamcard";
import styles from "../styles/Teamyear.module.css";

const Teamyear = ({ props, year }) => {
  return (
    <div className={styles.container}>
      <div className={styles.yearName}>
        <h1>{year} Year</h1>
        <div className={styles.deptFlexContainer}>
          <p>Technical</p>
          <p>Design</p>
          <p>Web</p>
        </div>
      </div>
      <div className={styles.teamSection}>
        {props.map((person) => (
          <Teamcard props={person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default Teamyear;
