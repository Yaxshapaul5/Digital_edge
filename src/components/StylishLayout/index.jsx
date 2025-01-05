import "./style.css";
import homeImage from "./../../assets/home.jpeg"; // Import the image

function StylishLayout() {
  return (
    <div className="hierarchical-container">
      <div className="card-container">
        <img 
          src={homeImage} 
          alt="Home" 
          className="home-image" 
          width="400" 
          height="600" 
        />
      </div>
      {/* <div className="card-container2">
        <img src={homeImage2} alt="Home" className="home-image" />
      </div> */}
    </div>
  );
}

export default StylishLayout;
