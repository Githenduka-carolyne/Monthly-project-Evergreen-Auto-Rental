import whyimg from "../../assets/why3.png"
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
const About = ()=>{
    return (
      <section className="aboutsection">
        <div className="about-heading">
          <h2>Why Choose Us</h2>
        </div>
        <div className="about-container">
          <div className="textbox1-side">
            <div className="textbox-details">
              <div className="numerical">
                <p className="number">01</p>
              </div>
              <p className="numberdetail">
                <b>Competitive Pricing:</b> We offer competitive rates with no
                hidden fees, providing transparent and affordable options for
                every budget.
              </p>
            </div>
            <div className="textbox-details">
              <div className="numerical">
                <p className="number">02</p>
              </div>
              <p className="numberdetail">
                <b>Wide Range of Vehicles:</b> Our extensive fleet includes
                various models from economy cars to luxury vehicles, ensuring
                you find the perfect car for any occasion.
              </p>
            </div>
            <div className="textbox-details">
              <div className="numerical">
                <p className="number">03</p>
              </div>
              <p className="numberdetail">
                <b>Excellent Customer Service:</b> Our dedicated customer
                service team is available 24/7 to assist with reservations,
                inquiries, and any issues that may arise during your rental
                period.
              </p>
            </div>
          </div>
          <div className="cards-holder">
            <div className="cards">
              <div className="card-icon-holder">
                <RiCustomerService2Fill />
              </div>
              <div className="card-subheading">
                <p>24/7 Customer Support</p>
              </div>
              <div className="card-details">
                <p>Call us from Anywhere Anytime.</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-icon-holder">
                <FaRegCalendarCheck />
              </div>
              <div className="card-subheading">
                <p>Reservation Anytime</p>
              </div>
              <div className="card-details">
                <p>24/7 Online Reservation</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-icon-holder">
                <GiMoneyStack />
              </div>
              <div className="card-subheading">
                <p>Transparent Pricing </p>
              </div>
              <div className="card-details">
                <p>Display comprehensive pricing details.</p>
              </div>
            </div>
          </div>
          <div className="image-side1">
            <div className="about-image-holder">
              <img src={whyimg} alt="About image"></img>
            </div>
          </div>
        </div>
      </section>
    );
}
export default About;