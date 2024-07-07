import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import signinimg1 from "../../assets/regphoto.png";
import signinimg2 from "../../assets/loginphoto.png";
import "../../pages/Signin/signin.css";
import "../../pages/Login/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message );
      }

      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        console.log(data);
        navigate("/Typeofcars");
      } else {
        setError(data.message );
      }
    } catch (e) {
      console.log( e.message);
      setError(e.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      phoneNumber: "",
      password: "",
    },
    // validate,
    onSubmit: handleSubmit,
});
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-container">
        <div className="form-side">
          <div className="login-heading">
            <h2>Log In</h2>
          </div>
          <div className="forms-holder">
            <div className="form-details">
              <label htmlFor="emailAddress">Email Address</label>
              <div className="input-div">
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress}
                />
              </div>
              {/* {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="input-div">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              </div>
              {/* {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="password">Password</label>
              <div className="input-div">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {/* {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null} */}
            </div>
            <button type="submit" className="submit">
              Submit
            </button>

            <div className="account">
              Don't have an account? <Link to ="/Signin">Sign up</Link>
            </div>
          </div>
          <p>{error}</p>
        </div>
        <div className="form-images-side">
          <div className="form-image-container">
            <div className="form-image-holder">
              <div className="image1">
                <img src={signinimg2} alt="Sign in image"></img>
              </div>
              <div className="image1">
                <img src={signinimg1} alt="Sign in image 2"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
