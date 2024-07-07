import Hero from "./Hero";
import Hero2 from "./Hero2";
import About from "./About";
import About2 from "./About2";
import Testimonials from "./Testimonials";
import "./hero.css"
import "./hero2.css"
import "./about.css"
import "./about2.css"
import "./testimonials.css";
const Home = () => {
  return (
    <section className="home-section">
      <Hero />
      <Hero2 />
      <About2 />
      <About />
      <Testimonials/>
    </section>
  );
};
export default Home;
