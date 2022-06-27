const Hero = (props) => {
  return (
    <div
      className="hero-service mt-5"
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <h6
        className="text-center pt-2"
        style={{ fontSize: "30px", color: "lightgray" }}
      >
        {props.tagline}
      </h6>
      <h2
        className="text-center pb-5"
        style={{ fontSize: "50px", color: "white" }}
      >
        {props.title} <br /> The Charlie Chaplin Events
      </h2>
    </div>
  );
};

export default Hero;
