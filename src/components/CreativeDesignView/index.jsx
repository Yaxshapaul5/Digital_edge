import CreativeMindView from "../CreativeMindView";
import StylishLayout from "../StylishLayout";
import "./style.css";

function CreativeDesignView() {
  return (
    <div className="creative-container">
      <div className="creative-layout-container1">
        <div className="creative-section">
          <CreativeMindView />
          <p className="creative-text-styles">Innovation fuels our passion. We craft exceptional digital experiences that leave a lasting impression.</p>
          <button className="call-to-action-btn">Get in Touch</button>
        </div>
        <StylishLayout />
      </div>
      {/* <div className="service-sections-container">
        <div className="hierarchical-card">
          <img src="./src/assets/image_ecb644d0.png" alt="" className="design-card" />
          <div className="vertical-flex-container">
            <p className="heading-text">Design</p>
            <p className="text-block-style">We believe in creating designs that inspire and connect. From concept to execution, every detail is crafted with purpose and precision.</p>
          </div>
        </div>
        <div className="hierarchical-card">
          <div className="orange-box-with-text">
            <img src="./src/assets/image_e4872550.png" alt="" className="flex-box-image-container" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Development</p>
            <p className="text-block-style">From innovative solutions to seamless experiences, our development process ensures performance, scalability, and reliability.</p>
          </div>
        </div>
        <div className="hierarchical-card">
          <div className="blue-box-with-text">
            <img src="./src/assets/image_7e77e022.png" alt="" className="image-container6" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Digital Marketing</p>
            <p className="text-block-style">We craft impactful strategies to amplify your online presence, drive engagement, and deliver measurable results.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CreativeDesignView;
