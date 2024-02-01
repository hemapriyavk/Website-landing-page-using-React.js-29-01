// import logo from "../assets/images/Logo.svg";
import coconestLogo from "../assets/images/coconest.png";
import menuLine from "../assets/images/clarity_menu-line.svg";
import dropDown from "../assets/images/formkit_down.svg";

function Navbar() {
    return (
      <>
          <div className="navbar">
            <div className="nav">
                <div className="menu-line">
                    <img src={menuLine} alt=" "></img>
                </div>
                <div className="contact">
                    <p>Contact</p>
                </div>
                <div className="en">
                    <p>EN</p><img src={dropDown} alt=" "></img>
                </div>
            </div>

            <div className="logo">
                <img src={coconestLogo} alt="logo"></img>
                <p> Eco Resort</p> 
            </div>

            <div className="booking">
                <div className="book_now">
                    <button >BOOK NOW</button>
                </div>
            </div>

          </div>
        
      </>
    )
  }
  
  export default Navbar;
  