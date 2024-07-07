import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section>
      <div className="header-section">
        <div className="navigation">
          <div className="header-container">
            {/* <div className="logo-holder">
              <img src={logo} alt="logo of the company"></img>
            </div> */}
            <div className="header-title">
              <h1>Evergreen Auto Rental</h1>
            </div>
            <div className="navigation">
              <div className="navigation-wrapper">
                <ol className="navigation-list">
                  <li className="navigation-item">
                    {" "}
                    <Link to="">Dashboard</Link>
                  </li>
                  <li className="navigation-item">
                    {" "}
                    <Link to="/Home">Home</Link>
                  </li>
                  <li className="navigation-item">
                    {" "}
                    <Link to="/Services">Services</Link>
                  </li>
                  {/* <li className="navigation-item">
                    <Link to="/Typeofcars">Type of cars</Link>
                  </li> */}
                  <li className="navigation-item">
                    <Link to="/Contact">Contacts</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
