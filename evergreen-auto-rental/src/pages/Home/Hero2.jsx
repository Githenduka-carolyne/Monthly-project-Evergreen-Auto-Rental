import "./hero2.css"
const Hero2 = ()=>{
    return (
      <div className="hero2-container">
        <div className="card1-holder">
          <div className="cards">
            <div className="card-subheading">
              <p>Choose a car</p>
            </div>
            <div className="card-details">
              <p>
                We have different cars from different brands visit the cars
                section to view them and choose the one your prefer.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-subheading">
              <p>Choose Pickup Date</p>
            </div>
            <div className="card-details">
              <p>
                Choose the day you purpose to come pick up the car from the show
                room.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-subheading">
              <p>Choose return Date</p>
            </div>
            <div className="card-details">
              <p>Chose the date you wish to return the car.</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Hero2;