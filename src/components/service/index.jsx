import "./style.css";

// Import all images
import designImage from "./../../assets/image_ecb644d0.png";
import developmentImage from "./../../assets/image_e4872550.png";
import marketingImage from "./../../assets/image_7e77e022.png";

function Services() {
  return (
    <>
      <div className="service-sections-container">
        <div className="hierarchical-card">
          <img src={designImage} alt="Design" className="design-card" />
          <div className="vertical-flex-container">
            <p className="heading-text">Design</p>
            <p className="text-block-style">
              We believe in creating designs that inspire and connect. From concept to execution, every detail is crafted with purpose and precision.
            </p>
          </div>
        </div>
        <div className="hierarchical-card">
          <div className="orange-box-with-text">
            <img src={developmentImage} alt="Development" className="flex-box-image-container" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Development</p>
            <p className="text-block-style">
              From innovative solutions to seamless experiences, our development process ensures performance, scalability, and reliability.
            </p>
          </div>
        </div>
        <div className="hierarchical-card">
          <div className="blue-box-with-text">
            <img src={marketingImage} alt="Digital Marketing" className="image-container6" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Digital Marketing</p>
            <p className="text-block-style">
              We craft impactful strategies to amplify your online presence, drive engagement, and deliver measurable results.
            </p>
          </div>
        </div>
      </div>

      <div className="service-sections-container">
        <div className="hierarchical-card">
          <div className="orange-box-with-text">
            <img src={developmentImage} alt="Branding" className="flex-box-image-container" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Branding</p>
            <p className="text-block-style">
              Your brand is more than just a logo—it’s the story, vision, and values that connect with your audience.
            </p>
          </div>
        </div>
        <div className="hierarchical-card">
          <div className="blue-box-with-text">
            <img src={marketingImage} alt="Package Designing" className="image-container6" />
          </div>
          <div className="vertical-flex-container">
            <p className="heading-text">Package Designing</p>
            <p className="text-block-style">
              We design eye-catching, functional packaging that reflects your brand’s identity and captures your audience's attention at first glance.
            </p>
          </div>
        </div>
        <div className="hierarchical-card">
          <img src={designImage} alt="Graphic Design" className="design-card" />
          <div className="vertical-flex-container">
            <p className="heading-text">Graphic Design</p>
            <p className="text-block-style">
              We believe in creating designs that inspire and connect. From concept to execution, every detail is crafted with purpose and precision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
