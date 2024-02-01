// import HyphenIcon from "../assets/images/-.svg";
import leftArrow from "../assets/images/leftArrow.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import lineOne from "../assets/images/lineOne.svg";
import lineTwo from "../assets/images/lineTwo.svg";
// import { Carousel } from 'react-elastic-carousel';

function ImageSliderPage() {
    return (
      <>
        <div className="image_slider_page">
            <div className="upper_text">
                <p className="line_one">The idea</p>
                <p className="line_two">
                  {/* <img src={HyphenIcon} alt=" "></img> */}
                  The Reflection of our Tradition</p>
            </div>
            <div className="image_slider">
                <div className="leftArrow">
                  <img src={leftArrow} alt=" "></img>
                </div>
                <div className="rightArrow">
                  <img src={rightArrow} alt=" "></img>
                </div>
            </div>
            <div className="imageSlider_indicators">
              <img className="thickLine" src={lineOne} alt=" "></img>
              <img className="thinLine" src={lineTwo} alt=" "></img>
              <img className="thinLine" src={lineTwo} alt=" "></img>
            </div>           
        </div>
        
      </>
    )
  }
  
  export default ImageSliderPage;