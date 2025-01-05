import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function PortfolioSection() {
  return (
    <div className="creative-container">
      <div className="portfolio-section-container">
        <div className="portfolio-section">
          <p className="creative-heading-style">Portfolio</p>
          <p className="standout-heading">View Our Case Studies</p>
        </div>
        <div className="portfolio-card">
          <p className="content-text-block">Explore our diverse collection of projects where creativity, innovation, and expertise come together. From groundbreaking designs to powerful digital solutions, each project represents our commitment to delivering exceptional results.</p>
          <div className="primary-button-container">
            <p className="uppercase-heading">VIEw All</p>
            <SvgIcon1 className="svg-container" />
          </div>
        </div>
      </div>
      {/* <div className="portfolio-gallery-container">
        <img src="./src/assets/port1.jpeg" alt="s" className="image-container" />
        <img src="./src/assets/port2.jpeg" alt="s" className="image-container" />
        <img src="./src/assets/port3.jpeg" alt="s" className="image-container" />
      </div> */}
    </div>
  );
}

export default PortfolioSection;
