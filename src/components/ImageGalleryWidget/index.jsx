import "./style.css";

function ImageGalleryWidget() {
  return (
    <div className="parent-flex-container">
      <img src="./src/assets/image_82ab6587.png" alt="" className="image-container5" />
      <div className="vertical-image-container1">
        <img src="./src/assets/image_82ab6587.png" alt="" className="image-container3" />
        <div className="vertical-spacer">
          <img src="./src/assets/image_1c31d187.png" alt="" className="image-container2" />
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryWidget;
