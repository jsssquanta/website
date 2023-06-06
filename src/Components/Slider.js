// NOTE: Minimum 2 elements required for slider to work properly!

import { useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = ({ src, sliderTitle }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [move, setMove] = useState(10 + (src.length - 2) * 25);

  function handlePrevClick() {
    setCurrIndex((prev) => {
      if (prev === 0) return src.length - 1;
      else return prev - 1;
    });
    setMove((prev) => {
      if (currIndex === 0) return prev + (src.length - 1) * 25;
      else return prev - 25;
    });
  }
  function handleNextClick() {
    setCurrIndex((prev) => (prev + 1) % src.length);
    setMove((prev) => {
      if (currIndex === src.length - 1) return prev - (src.length - 1) * 25;
      else return prev + 25;
    });
  }

  return (
    <div className={styles.slider_container}>
      <h1 className={styles.title}>{sliderTitle}</h1>
      <div className={styles.slider_wrapper}>
        <div className={styles.overlay_left}>
          <div className={styles.desc}>
            <p>{src[currIndex].description}</p>
          </div>
        </div>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${move}%)`,
            transition: "all 0.5s ease-out 0s",
          }}
        >
          {src.map((item, index) => (
            <img
              className={styles.card}
              key={index}
              src={process.env.PUBLIC_URL + item.img}
              alt={`${item.subtext}`}
            />
          ))}
          {src.map((item, index) => (
            <img
              className={styles.card}
              key={index}
              src={process.env.PUBLIC_URL + item.img}
              alt={`${item.subtext}`}
            />
          ))}
          {src.map((item, index) => (
            <img
              className={styles.card}
              key={index}
              src={process.env.PUBLIC_URL + item.img}
              alt={`${item.subtext}`}
            />
          ))}
        </div>
        <div className={styles.overlay_right}>
          <div className={styles.details}>
            <div className={styles.name}>{src[currIndex].name}</div>
            <div className={styles.subtext}>{src[currIndex].subtext}</div>
            <div className={styles.socials}>
              {src[currIndex].linkedin && (
                <a
                  href={src[currIndex].linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/icons/linkedin.svg" alt="linkedin icon" />
                </a>
              )}
              {src[currIndex].github && (
                <a
                  href={src[currIndex].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/icons/github.svg" alt="github icon" />
                </a>
              )}
              {src[currIndex].instagram && (
                <a
                  href={src[currIndex].instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/icons/insta.svg" alt="insta icon" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider__btngrp}>
        <button className={styles.slider__btn} onClick={handlePrevClick}>
          &#8592;
        </button>
        <button className={styles.slider__btn} onClick={handleNextClick}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;
