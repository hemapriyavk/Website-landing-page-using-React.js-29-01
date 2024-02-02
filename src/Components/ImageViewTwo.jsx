import imageView_bg_one from "../assets/images/imageView_bg_one.png";
import imageView_bg_two from "../assets/images/imageView_bg_two.png";

function ImageViewTwo() {
    return (
      <>
          <div className="imageView_two">
                <div className="imageView_two_content">
                    <div className="imageView_two_content_heading">
                        <div className="imageView_two_content_heading_one">Natural spa</div>
                        <div className="imageView_two_content_heading_two">Wellness SPA at Coconest</div>
                    </div>
                    <p className="imageView_two_content_para">Enjoy the range of wellness therapies at Coconest.  Ranging from 1-hour Rejuvenation therapy, we have Rejuvenation programs for upto 10 days.</p>
                    {/* <div className="imageView_two_button">
                        <div className="imageView_two_button_content">EXPLORE</div>
                    </div> */}
                </div>
                <div className="imageView_two_image_place">
                    <div className="imageView_two_image" />
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
  
  export default ImageViewTwo;