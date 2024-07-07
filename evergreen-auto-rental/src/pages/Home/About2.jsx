import about2img from "../../assets/about1.png"
const About2 = () =>{
    return (
      <section>
        <div className="main-heading">
          <h2 className="heading">About Us</h2>
        </div>
        <div className="About2-container">
          <div className="about2-image-side">
            <div className="about2img-holder">
              <img src={about2img} alt="about image"></img>
            </div>
          </div>
          <div className="about2-textbox-side">
            <div className="aboutus">
              <p className="heading1">About:</p>
              <p className="about2-details">
                At Evergreen Auto Rental, we specialize in providing
                <b> high-quality car rental services</b> tailored to meet your
                specific needs. Whether you're traveling for business or
                pleasure, our extensive fleet of vehicles offers something for
                every occasion and budget.
              </p>
            </div>
            <div className="mission">
              <p className="heading1">Mission:</p>
              <p className="about2-details">
                Our mission is to <b> provide reliable transportation solutions</b> that
                enhance your travel experience. Whether you're exploring a new
                city or navigating familiar roads, we're here to make your
                journey comfortable and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default About2;