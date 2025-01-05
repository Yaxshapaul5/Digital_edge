import "./style.css";

function CreativeDesignSection() {
  return (
    <div className="flex-container-with-margin-top">
    <div className="feature-box">
      <div className="silver-box">
      <img 
      src="./src/assets/DND.jpg" 
      alt="Home" 
      className="home-image" 
      width="500" 
      height="600" 
    />
      </div>
    </div>
    <div className="feature-box1">
    <div className="solution-box">
  <p className="creative-heading-style">About Us</p>
  <p className="better-solution-styler">
    Design &amp; Develop
    <br />
    For Better Solution
  </p>
</div>
      <p className="paragraph-text-block">
      We are a team of visionaries, creators, and innovators dedicated to crafting solutions that empower and inspire. With a focus on design excellence and cutting-edge development, we transform ideas into impactful realities.
     
      Our mission is to build seamless, user-focused experiences that solve challenges and unlock new opportunities. From strategy to execution, we deliver with precision and purpose, ensuring every project exceeds expectations.
      </p>
      <p className="paragraph-text"><b>Join us on a journey to create something extraordinary.</b></p>
      
      
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button">Learn More</button>
    </div>
  </div>
  );
}

export default CreativeDesignSection;
