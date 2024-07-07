import { GiCarWheel } from "react-icons/gi";
import { FaOilCan } from "react-icons/fa";
import { PiEngineBold } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { TbWheel } from "react-icons/tb";
import { GiBouncingSpring } from "react-icons/gi";
const Services = () => {
  return (
    <section className="servicesection">
      <div className="service-container">
        <div className="service-textbox">
          <h2 className="service-maintitle">Services Offered</h2>
        </div>
      </div>
      <div className="servicestextbox">
        <p>
          At Evergreen Auto Rental, we provide top-notch services to keep our
          cars in excellent condition and roadworthy.
        </p>
      </div>
      <div className="services-container">
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Changing tires</p>
            </div>
            <div className="service-icon-holder">
              <GiCarWheel />
            </div>
            <div className="card-details">
              <p>
                We replace worn-out tires with high-quality ones to maintain
                optimal traction and performance.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Changing brakes</p>
            </div>
            <div className="service-icon-holder">
              <PiEngineBold />
            </div>
            <div className="card-details">
              <p>
                We replace brake pads and rotors to ensure top-notch braking
                performance and safety.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Changing of engine</p>
            </div>
            <div className="service-icon-holder">
              <PiEngineBold />
            </div>
            <div className="card-details">
              <p>
                We replaces old or faulty engines with new, high-performance
                ones, ensuring your rental is always road-ready and powerful.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Changing oil</p>
            </div>
            <div className="service-icon-holder">
              <FaOilCan />
            </div>
            <div className="card-details">
              <p>
                Keep your rental running efficiently with our regular oil change
                service. Fresh oil ensures the engine runs smoothly, improving
                fuel economy and extending engine life.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Electrical Repair</p>
            </div>
            <div className="service-icon-holder">
              <FaTools />
            </div>
            <div className="card-details">
              <p>
                We address and fix any electrical issues, from battery
                replacements to wiring repairs, ensuring all systems function
                perfectly.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Wheel Bearing</p>
            </div>
            <div className="service-icon-holder">
              <TbWheel />
            </div>
            <div className="card-details">
              <p>
                We inspect and replace worn-out wheel bearings, preventing noise
                and ensuring safe handling.
              </p>
            </div>
          </div>
        </div>
        <div className="card-service-holder">
          <div className="service-card">
            <div className="card-subheading">
              <p>Shock Absorbers inspection</p>
            </div>
            <div className="service-icon-holder">
              <GiBouncingSpring />
            </div>
            <div className="card-details">
              <p>
                We check and replace worn shock absorbers to maintain a smooth
                ride and improve vehicle handling and stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
