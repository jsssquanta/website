import styles from "./Projects.module.css";
import Hero from "../Components/Hero";
import Navbar from "../Components/Hero";
import Footer from "../Components/Footer";

const Projects = () => {
  const sendEmail = () => {
    window.open(
      "mailto:quanta.jssaten@gmail.com?subject=SendMail&body=Description"
    );
  };
  return (
    <div>
      <Navbar />
      <Hero
        bgImg={"assets/projects-hero-img.png"}
        bgPos={"75% 0%"}
        bgSize={"1000px"}
        heading={"What we have made..."}
      />
      <div className={styles.main}>
        {/* add projects beneath */}
        <div className={styles.projectContainer1}>
          <img
            src="/assets/lfr.jpeg"
            className={styles.projectImage}
            alt="<project-name> project demo"
          />
          <div className={styles.projectDetails}>
            <h3>Project 1</h3>
            <p>
              Line Follower Robot (LFR) is a simple autonomously guided robot
              that follows a line drawn on the ground to either detect a dark
              line on a white surface or a white line on a dark. The LFR is
              quite an interesting project to work on!
            </p>
          </div>
        </div>
        {/* <div className={styles.projectContainer2}>
          <img
            src="https://via.placeholder.com/150"
            className={styles.projectImage}
            alt="<project-name> project demo"
          />
          <div className={styles.projectDetails}>
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        <div className={styles.projectContainer1}>
          <img
            src="https://via.placeholder.com/150"
            className={styles.projectImage}
            alt="<project-name> project demo"
          />
          <div className={styles.projectDetails}>
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        <div className={styles.projectContainer2}>
          <img
            src="https://via.placeholder.com/150"
            className={styles.projectImage}
            alt="<project-name> project demo"
          />
          <div className={styles.projectDetails}>
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div> */}
        {/* add projects above */}

        <p className={styles.loaded}> To be Loaded Soon.....</p>
      </div>

      <div className={styles.contact}>
        <p>
          Want to connect with us and be part of <span>Quanta</span> family?
        </p>
        <button onClick={sendEmail}>Contact us</button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
