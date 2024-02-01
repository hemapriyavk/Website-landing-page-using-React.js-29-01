// import footerLogo from "../assets/images/footerLogo.svg";
import coconestLogo from "../assets/images/coconest.png";
import facebookLogo from "../assets/images/facebook.svg";
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg";

function Footer() {
    return (
      <>
          <div className="footer">
            <img className="footer_logo" src={coconestLogo} />
            <div className="footer_card">
                <div className="footer_card_one">
                    <div className="footer_card_one_content">
                        <p className="footer_card_one_heading">Coconest Eco Resort</p>
                        <p className="footer_card_one_paragraph">we wanted to give you a complete village living experience and all our amenities are made in such a way.</p>
                    </div>
                </div>

                <div className="footer_card_two">
                    <p className="footer_card_two_heading">Contacts</p>
                    <div className="footer_card_two_contact">
                        <div className="footer_card_two-number">
                            <p>(+91) 99428 80006</p>
                            <p>(+91) 99428 90006</p>
                            {/* <p>Fax: +91 (141) 2207445</p> */}
                        </div>
                        <div className="footer_card_two_contact_logos">
                            <img className="facebook_logo" src={facebookLogo} alt="fb" />
                            <img className="instagram_logo" src={instagramLogo} alt="ig" />
                            <img className="twitter_logo" src={twitterLogo} alt="x" />
                        </div>
                    </div>
                </div>

                <div className="footer_card_three">
                    <p className="footer_card_three_heading">Address</p>
                    <div className="footer_card_three_address">
                        <p className="footer_card_three_address_content"><span className="footer_card_three_address_name">Coconest Eco Resort</span><br />23/42, A Nehru street,<br/>B Colony, Mahalingapuram,<br />Pollachi-642002, <br />Tamil Nadu, INDIA</p>
                    </div>
                </div>
            </div>
            <div className="footer_last">
                <div className="footer_last_one">
                    <p className="footer_last_one_content">Copyright &copy; 2024 Coconest Eco Resort, All rights reserved.</p>
                </div>
                <div className="footer_last_final">
                    <p className="footer_last_two">Terms of use</p>
                    <p className="footer_last_three">Privacy Policy</p>
                </div>
            </div>

          </div>
      </>
    )
  }
  
  export default Footer;