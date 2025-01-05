import "./style.css";
import ContactInfoSelector from "../ContactInfoSelector";
import EmailInputSection from "../EmailInputSection";

function Footer({ contactInfoWidgets }) {
  return (
    <div className="contact-info-section1">
          <span className="navigation-bar-title">Digital Edge</span>
            <div className="contact-section-widget">
              <p className="contact-section-title">Our Contact</p>
              <ContactInfoSelector contactInfoWidgets={contactInfoWidgets} />
            </div>
            <div className="contact-info-section">
              <p className="contact-section-title">About Us</p>
              <p className="content-block"> Focused on user-centric experiences, we transform ideas into impactful realities, delivering excellence from strategy to execution.</p>
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
  );
}

export default Footer;
