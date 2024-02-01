import ImageViewFour from "./ImageViewFour";
import ImageViewOne from "./ImageViewOne";
import ImageViewThree from "./ImageViewThree";
import ImageViewTwo from "./ImageViewTwo";

function ImageView() {
    return (
      <>
      <div className="imageView">
           <ImageViewOne />
           <ImageViewTwo />
           <ImageViewThree />
           <ImageViewFour />
        </div>

      </>
    )
  }
  
  export default ImageView;