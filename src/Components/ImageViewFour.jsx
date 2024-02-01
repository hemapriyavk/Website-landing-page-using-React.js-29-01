import imageView_bg_one from "../assets/images/imageView_bg_one.png";
import imageView_bg_two from "../assets/images/imageView_bg_two.png";

function ImageViewFour() {
    return (
      <>
          <div className="imageView_two">
                <div className="imageView_two_content">
                    <div className="imageView_two_content_heading">
                        <div className="imageView_two_content_heading_one">Event Spaces</div>
                        <div className="imageView_two_content_heading_two">Celebrations at Coconest</div>
                    </div>
                    <p className="imageView_two_content_para">Pressenting you the out of the box event spaces at Coconest.  Inspire your audience with our exclusivve event venues inside Coconest. </p>
                    <div className="imageView_two_button">
                        <div className="imageView_two_button_content">EXPLORE</div>
                    </div>
                </div>
                <div className="imageView_two_image_place">
                    <div className="imageView_four_image" />
                </div>
                <div className="imageView_two_bg">
                    <div className="imageView_two_bg_image">
                        <img className="imageView_two_bg_one" alt="Image" src={imageView_bg_one} />
                        <img className="imageView_two_bg_two" alt="Image" src={imageView_bg_two} />
                    </div>
                </div>
            </div>
        
      </>
    )
  }
  
  export default ImageViewFour;