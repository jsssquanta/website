const Hero = ({ bgImg, bgPos, bgSize, heading, subHeading }) => {
  // Find styles for this component in the index.css file.
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: bgSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgPos,
      }}
    >
      <p className="hero__heading">{heading}</p>
      <p className="hero__subheading">{subHeading}</p>
    </div>
  );
};

export default Hero;
