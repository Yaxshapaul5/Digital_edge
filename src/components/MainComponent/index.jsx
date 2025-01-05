import CreativeLayoutBuilder from "../CreativeLayoutBuilder";
import ContactInfoSelector from "../ContactInfoSelector";
import EmailInputSection from "../EmailInputSection";
import "./style.css";

function MainComponent({ contactInfoWidgets }) {
  return (
    <div className="main-content-container1">
      <div className="main-content-container">
        <div className="digital-creative-agency-section">
          <div className="flexbox-container-with-text">
            <span className="navigation-bar-title">Digital Edge</span>
            <div className="navigation-menu">
              <a href="#home" className="primary-nav-link" style={{ textDecoration: "none" }}>Home</a>
              <a href="#service" className="elegant-text" style={{ textDecoration: "none" }}>Services</a>
              <a href="#about-us" className="elegant-text" style={{ textDecoration: "none" }}>About Us</a>
              {/* <a href="#portfolio" className="portfolio-title" style={{ textDecoration: "none" }}>Portfolio</a>
              <a href="#testimonial" className="testimonial-heading1" style={{ textDecoration: "none" }}>Testimony</a> */}
              <a href="#contact" className="contact-link" style={{ textDecoration: "none" }}>Contact</a>
            </div>
          </div>
          <CreativeLayoutBuilder />
          <div className="contact-info-section1" id="contact">
            <span className="navigation-bar-title">Digital Edge</span>
            <div className="contact-section-widget">
              <p className="contact-section-title">Our Contact</p>
              <ContactInfoSelector contactInfoWidgets={contactInfoWidgets} />
            </div>
            <div className="contact-info-section">
              <p className="contact-section-title">About Us</p>
              <p className="content-block">
                Focused on user-centric experiences, we transform ideas into impactful realities, delivering excellence from strategy to execution.
              </p>
            </div>
            <div className="sidebar-widget-container">
              <p className="subscribe-heading-style">Subscribe</p>
              <EmailInputSection />
              <p className="subscribe-heading">Follow Us</p>
              <div className="content-wrapper">
                <img src="./src/assets/image_11fd801d.png" alt="" className="text-image-container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
