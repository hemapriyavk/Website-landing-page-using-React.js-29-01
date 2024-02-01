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
            {/* <div className="home_cover_text">
                <p className="font_small">Welcome to</p>
                <p className="font_big">COCONEST</p>
                <p className="font_small">EXPERIENCE OF LIVING IN VILLAGE</p>
            </div> */}
        </div>
        
        
      </>
    )
  }
  
  export default Cover;