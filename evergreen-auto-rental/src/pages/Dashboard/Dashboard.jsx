import landingimg from "../../assets/landingpageJeep.png"
import audiimg from "../../assets/audilogo.png"
import jeepimg from "../../assets/jeeplogo.png"
import toyotaimg from "../../assets/toyotalogo.png"
import mercedesimg from "../../assets/Mercedeslogo.png"
import { Link } from "react-router-dom"
const Dashboard = () => {
    return (
      <section>
        <div className="container">
          <div className="textbox-side">
            <div className="intro-textbox">
              <p>Discover where quality effortlessly meets convenience!</p>
            </div>
            <div className="into-subtitle">
              <p>
                Rent with confident through <b>evergreen rental</b>, were you
                will find the best of the best ever
              </p>
            </div>
            <div className="buttons">
              <Link to="./Signin">
                <button className="signinbtn" type="submit">
                  Sign Up
                </button>
              </Link>
              <Link to="./Login">
                <button className="loginbtn" type="submit">
                  Log In
                </button>
              </Link>
            </div>
          </div>
          <div className="image-side">
            <div className="image-holder">
              <img src={landingimg} alt="landing page image"></img>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <p>Our Preminum Brands</p>
        </div>
        <div className="icon-container">
          <div className="icons-holder">
            <img src={audiimg} alt="audi-logo"></img>
          </div>
          <div className="icons-holder">
            <img src={jeepimg} alt="jeep-logo"></img>
          </div>
          <div className="icons-holder">
            <img src={toyotaimg} alt="toyota-logo"></img>
          </div>
          <div className="icons-holder">
            <img src={mercedesimg} alt="mercedes-logo"></img>
          </div>
          .
        </div>
      </section>
    );
}
export default Dashboard;