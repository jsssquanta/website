import React from "react";
import "../styles/Department.css";
import img1 from "../images/Vector 1.png";
import img2 from "../images/Vector 2.png";
import img3 from "../images/Vector 3.png";

function Department() {
  return (
    <div className="our">
      <div className="tech">
        <img className="img1" alt="" src={img1} />
        <h1 className="tecnical">Technical</h1>
      </div>

      <div className="our_1">
        <img className="img2" alt="" src={img2} />
        <h2 className="design">Design</h2>
        <h2 className="our_department">Our Departments</h2>
      </div>
      <div className="our_2">
        <img className="img3" alt="" src={img3} />
        <h1 className="wed_development">web Development</h1>
        <h3 className="about_text">
          Here at <span className="quan">Quanta</span> we have three{" "}
          departments namely Technical, Design and
          Web Development where we work, learn together and
          work on some awesome
          projects.
        </h3>
      </div>
    </div>
  );
}
export default Department;
