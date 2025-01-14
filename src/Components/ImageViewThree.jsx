import imageView_bg_one from "../assets/images/imageView_bg_one.png";
import imageView_bg_two from "../assets/images/imageView_bg_two.png";


function ImageViewThree() {
    return (
      <>
        <div className="imageView_one">
            <div className="imageView_one_bg">
                <div className="imageView_one_bg_image">
                    <img className="imageView_one_bg_one" alt="Image" src={imageView_bg_one} />
                    <img className="imageView_one_bg_two" alt="Image" src={imageView_bg_two} />
                </div>
            </div>
            <div className="imageView_one_image_place">
                <div className="imageView_three_image" />
            </div>
            <div className="imageView_one_content">
                <div className="imageView_one_content_heading">
                    <div className="imageView_one_content_heading_one">Exciting Adventures</div>
                    <div className="imageView_one_content_heading_two">Adventure games at Coconest</div>
                </div>
                <p className="imageView_one_content_para"> Escape into a timeless oasis at Coconest, where the tranquility of adventures games to give you a memory of lifetime.</p>
                {/* <div className="imageView_one_button">
                    <div className="imageView_one_button_content">EXPLORE</div>
                </div> */}
            </div>                
        </div>
        
      </>
    )
  }
  
  export default ImageViewThree;