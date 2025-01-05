import ImageGalleryWidget1 from "../ImageGalleryWidget1";
import ImageContentBlock from "../ImageContentBlock";
import ImageGalleryWidget from "../ImageGalleryWidget";
import "./style.css";

function TestimonialSection() {
  return (
    <div className="testimonial-container1">
      <div className="testimonial-section1">
        <div className="testimonial-container2">
          <div className="testimonial-container">
            <p className="testimonial-heading">Testimony</p>
            <p className="testimonial-heading2">What Do Our Clients Says About Us</p>
          </div>
        </div>
        <div className="testimonial-section">
          <ImageGalleryWidget1 />
          <div className="profile-card">
            <ImageContentBlock />
            <div className="consultant-info-container">
              <div className="consultant-card">
                <div className="vertical-centered-text-container">
                  <p className="uppercase-heading1">James Jokovic</p>
                  <p className="uppercase-text-styler">IT Consultant</p>
                </div>
                <div className="profile-image-container">
                  <img src="./src/assets/image_3cfef89b.png" alt="" className="text-block-container" />
                </div>
              </div>
            </div>
          </div>
          <ImageGalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
