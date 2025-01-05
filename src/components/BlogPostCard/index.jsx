import "./style.css";

function BlogPostCard() {
  return (
    <div className="article-card">
      <div className="parent-flex-container">
        <p className="date-info-text-style">09 April,2022</p>
        <p className="admin-info-text-style">by Admin</p>
      </div>
      <p className="article-snippet">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </p>
      <p className="blue-link-text">Read More</p>
    </div>
  );
}

export default BlogPostCard;
