import React from "react";
import { useFormik } from "formik";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../../pages/Login/login.css";

import "./contact.css";


const Contact = () => {
 
const handleSubmit = async (formValues) => {
  try {

    if (response.ok) {
      alert(
        `Your order has been placed successfully!`
      );
      formik.resetForm();
    } else {

      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(`Your order has been placed successfully!`);
  }
};

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      date: "",
    },
    // validate,
    onSubmit: handleSubmit,
  });
  return (
    <section className="cont-section">
      <div className="contacts-container">
        <div className="contacts-textbox">
          <h2 className="contacts-maintitle">Contact Us</h2>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-textbox">
          <h4>Get In Touch With Evergreen Auto Rental</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            odio!.
          </p>
        </div>
      </div>
      <div className="contact-cards-container">
        <div className="contact-card">
          <div className="icon-holder">
            <FaLocationDot />
          </div>
          <div className="card-details">
            <p className="title">Location</p>
            <p> Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <FaPhoneVolume />
          </div>
          <div className="card-details">
            <p className="title">Phone Number</p>
            <p> +245723456789</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <IoMail />
          </div>
          <div className="card-details">
            <p className="title">Email Us</p>
            <p> Evergreen@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <IoMdClock />
          </div>
          <div className="card-details">
            <p className="title">Working Hours</p>
            <p>Mon-Sat 8:00AM-7:00PM </p>
          </div>
        </div>
      </div>
      <div className="form-map">
        <div className="map-side">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.012317845742!2d37.158912!3d-0.7202532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717959865419!5m2!1sen!2ske"
            width="400"
            height="240"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-side">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-container1">
              <div className="login-heading">
                <h2>Make Your Booking</h2>
              </div>
              <div className="forms-holder">
                <div className="form-details">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-div">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {/* {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null} */}
                </div>

                <div className="form-details">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <div className="input-div">
                    <input
                      id="phonenumber"
                      name="phonenumber"
                      type="tel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phonenumber}
                    />
                  </div>
                  {/* {formik.touched.phonenumber && formik.errors.phonenumber ? (
                    <div>{formik.errors.phonenumber}</div>
                  ) : null} */}
                </div>

                <div className="form-details">
                  <label htmlFor="date">Pick up Date</label>
                  <div className="input-div">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                    />
                  </div>
                  {/* {formik.touched.date && formik.errors.date ? (
                    <div>{formik.errors.date}</div>
                  ) : null} */}
                </div>
                <div className="form-details">
                  <label htmlFor="date">Return Date</label>
                  <div className="input-div">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                    />
                  </div>
                  {/* {formik.touched.date && formik.errors.date ? (
                    <div>{formik.errors.date}</div>
                  ) : null} */}
                </div>

                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="social-account-container">
        <div className="social-handles-container">
          <div className="social-handles">
            <h4>Reach to us</h4>
            <div className="social-holder">
              <p className="icon">
                <GiRotaryPhone />
              </p>
              <p>+245723456789</p>
            </div>
          </div>
          <div className="social-handles">
            <h4>Email Us</h4>
            <div className="social-holder">
              <p className="icon">
                <IoMail />
              </p>
              <p>Evergreen@gmail.com</p>
            </div>
          </div>
          <div className="social-handles">
            <h4>Follow Us</h4>
            <p className="icon">
              <FaFacebook /> <FaInstagramSquare /> <FaSquareXTwitter />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
