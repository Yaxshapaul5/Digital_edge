import CreativeDesignView from "../CreativeDesignView";
import CreativeDesignSection from "../CreativeDesignSection";
import PortfolioSection from "../PortfolioSection";
import TestimonialSection from "../TestimonialSection";
import BlogPostSection from "../BlogPostSection";
import ProjectStartSection from "../ProjectStartSection";
import Service from "../service";
import "./style.css";

function CreativeLayoutBuilder() {
  return (
    <div className="creative-layout-container">
      <div id="home">
        <CreativeDesignView />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="about-us">
        <CreativeDesignSection />
      </div>
      
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonial">
        {/* <TestimonialSection /> */}
      </div>
      <div id="blog-posts">
        {/* <BlogPostSection /> */}
      </div>
      <div id="project-start">
        <ProjectStartSection />
      </div>
    </div>
  );
}

export default CreativeLayoutBuilder;
