import "./typeofcars.css"
import datainfo from "../../pages/data"
import { useNavigate } from "react-router-dom";

import { IoMdSpeedometer } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
const Typeofcars = () => {
 const navigate = useNavigate();
 const addCarToDatabase = async (car) => {
   try {
     const response = await fetch("http://localhost:3000/api/cars/addCar", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         title: car.title,
         description: car.description,
         price: car.price, 
       }),
     });

     const data = await response.json();
     if (data.success) {
       console.log("Car added successfully:", data.data);
       navigate("/Contact");
     } else {
       console.log("Error adding car:", data.message);
     }
   } catch (e) {
     console.log("Error:", e.message);
   }
 };
  
  return (
    <section className="carssection">
      <div className="cars-container">
        <div className="cars-textbox">
          <h2 className="cars-maintitle">Available Cars</h2>
        </div>
      </div>
      <div className="allcars-container">
        <div className="group1-container">
          {datainfo.map((car, index) => (
            <div key={index} className="group-container">
              <div className="cars-cards">
                <div className="car-image-holder">
                  <img src={car.image} alt={car.title} />
                </div>
                <div className="cars-heading">
                  <p>{car.title}</p>
                </div>
                <div className="cars-subdetail">
                  <p>{car.description}</p>
                </div>
                <div className="cars-detail-cards">
                  <div className="detail-card">
                    <p className="caricons">
                      <IoMdSpeedometer />
                    </p>
                    <span>135mps</span>
                  </div>
                  <div className="detail-card">
                    <p className="caricons">
                      <FaGasPump />
                    </p>
                    <span>Petrol</span>
                  </div>
                  <div className="detail-card">
                    <p className="caricons">
                      <TbAutomaticGearbox />
                    </p>
                    <span>Automatic</span>
                  </div>
                </div>
                <div className="car-button">
                  <p>${car.price} per day</p>
                  <button
                    className="button"
                    onClick={() => addCarToDatabase(car)}
                  >
                    {car.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
    </section>
  );
};
export default Typeofcars;
