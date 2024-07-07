import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="herosection">
      <div className="hero-textbox">
        <h2 className="hero-maintitle">Welcome to Evergreen Auto Rental</h2>
        <p className="hero-subtitle">Rent. Explore. Thrive.</p>
        <div className="button-holder">
          
          <Link to = "/Services">
            <button className="button">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
