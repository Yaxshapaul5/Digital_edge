import BlogPostCard from "../BlogPostCard";
import "./style.css";

function BlogPostSection() {
  return (
    <div className="blog-post-card1">
      <div className="blog-post-card">
        <div className="blog-post-container">
          <p className="blog-title-text-style">Blog</p>
          <p className="blog-title-text-style1">Read OurNews</p>
        </div>
      </div>
      <div className="blog-post-card2">
        <div className="vertical-card-container">
          <div className="card-container1" />
          <BlogPostCard />
        </div>
        <div className="vertical-card-container">
          <div className="card-container1" />
          <BlogPostCard />
        </div>
        <div className="vertical-card-container">
          <div className="card-container1" />
          <BlogPostCard />
        </div>
      </div>
    </div>
  );
}

export default BlogPostSection;
