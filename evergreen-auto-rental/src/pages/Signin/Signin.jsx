import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import signinimg1 from "../../assets/regphoto.png";
import signinimg2 from "../../assets/loginphoto.png";
import "../../pages/Signin/signin.css"
import { Link, useNavigate } from "react-router-dom";


const Signin = () => {
  const [error,setError]=useState("");
  const navigate= useNavigate();
//   const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "must have 15 letters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "required";
//   } else if (values.lastName.length > 15) {
//     errors.lastName = "must have 15 letters or less";
//   }

//   if (!values.emailAddress) {
//     errors.emailAddress = "required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
//     errors.emailAddress = "Invalid Email Address";
//   }

//   if (!values.password) {
//     errors.password = "required";
//   } else if (!/[A-Z0-9._%+-]/.test(values.password)) {
//     errors.password = "Invalid password";
//   }
//   return errors;
// }; 

const handleSubmit = async (formValues) => {
  try {
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
     
    });

    const data = await response.json();
    console.log(data);

    if (data.success === true) {
      setError("User created successfully");
      navigate("/Login");
    } else {
      console.log("Error from server:", data.message);
      setError(data.message);
    }
  } catch (e) {
    console.log(e.message);
    setError(e.message); 
  }
};



    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
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
        <div className="form1-side">
          <div className="signin-heading">
            <h2>Sign Up</h2>
          </div>
          <div className="forms-holder">
            <div className="form-details">
              <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              {/* {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="lastName">Last Name</label>
              
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              
              {/* {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="emailAddress">Email Address</label>
              
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="emailAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress}
                />
              
              {/* {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <div>{formik.errors.emailAddress}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="phoneNumber">Phone Number</label>
              
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              
              {/* {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null} */}
            </div>

            <div className="form-details">
              <label htmlFor="password">Password</label>
              
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
             
              {/* {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null} */}
            </div>
            <button type="submit" className="submit">
              Log In
            </button>
            <div className="account">
              Have an account? <Link to="/Login">Log in</Link>
            </div>
            <p>{error}</p>
          </div>
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
}

export default Signin;