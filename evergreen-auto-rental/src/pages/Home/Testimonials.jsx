import { IoStarSharp } from "react-icons/io5";
import John from "../../assets/John.jpeg";
import emily from "../../assets/emily.jpeg";
import sarah from "../../assets/sarah.jpeg";
const TestimonialPart = () => {
  return (
    <section className="testmonies-section">
      <div className="testimonial">
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-description">
          Our customers share their experience, reflecting on how the company
          has come through for them.
        </p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={emily}></img>
          </div>
          <div className="persona-info">
            <p class="title">Emily R. - Frequent Renter</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "I recently rented a car from Evergreen Auto Rental for a
                business trip, and I couldn't be happier with the service. The
                booking process was seamless, the staff was incredibly helpful,
                and the car was in excellent condition. I highly recommend them
                to anyone in need of a reliable rental car."
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={John}></img>
          </div>
          <div className="persona-info">
            <p class="title">John D. -Business Traveller</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "Our family vacation was made even better thanks to Evergreen
                Auto Rental. We rented a spacious SUV that fit all our luggage.
                The customer service was outstanding, and the prices were very
                reasonable. We'll definitely use their services again!"
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={sarah}></img>
          </div>
          <div className="persona-info">
            <p class="title">Sarah K. - Family Vacation</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "I rent cars frequently for work, and Evergreen Auto Rental is
                my go-to choice. Their wide selection of vehicles ensures I
                always get the perfect car for my needs. They truly go above and
                beyond to make sure their customers are satisfied all the time."
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialPart;
