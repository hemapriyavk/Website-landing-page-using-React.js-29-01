// import video from "../assets/videos/-5dd9-44ee-8e47-714e46d60286.mp4"

function Cover() {
    return (
      <>
        <div className="home_cover">
            <div className="home_container">
                <div className="video_page">
                    <iframe src="https://cdn.illusiview.com/Arch4Foundation/index.htm" className="video" allow="fullscreen"></iframe>
                    {/* <video autoPlay muted loop className="video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="gradient"></div> */}
                </div>
            </div>
            <div className="mask_page">
                <div className="home_cover_text_page">
                    <div className="home_cover_text">
                        <p className="font_small">Exclusive 360&deg; farm view experience</p>
                        {/* <p className="font_small"></p> */}
                    </div>
                    <button className="home_cover_text_button"><a href="https://cdn.illusiview.com/Arch4Foundation/index.htm" target="_blank" rel="noreferrer">Explore</a></button>
                </div>
            </div>
        </div>
        
        
      </>
    )
  }
  
  export default Cover;