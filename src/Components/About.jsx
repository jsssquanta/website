import "../styles/About.css";

function About() {
  return (
    <div className="about component_space">
      <div className="container">
        <div className="row">
          <img
            src={process.env.PUBLIC_URL + '/assets/homepage-about-us-img.png'}
            className="col__1"
            alt=""
          />
          <div className="col__2">
            <h1 className="about__heading">About Us</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                <span>Quanta</span> is a part of departmental association, the
                main motto of quanta is to develop a hands on technical
                knowledge that encourages a person to move on with logical
                aptitude and to have a good command over Robotics & Embedded
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
