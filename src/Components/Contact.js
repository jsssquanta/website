import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {

  const sendEmail = () => {
    window.open("mailto:quanta.jssaten@gmail.com?subject=SendMail&body=Description");
  }
  return (
    <>
    <div className={styles.container}>
      <h1>Want to know more about us and our work?</h1>
      <button type="button" onClick={sendEmail}>Contact us</button>
    </div>
    </>
  );
};

export default Contact;
