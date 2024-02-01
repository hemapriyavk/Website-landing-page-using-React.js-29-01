import formDownArrow from "../assets/images/form_downarrow.svg";

function Form() {
    return (
      <>
        <div className="form">
            <div className="form_content">
                <p className="form_content_heading">
                Request FOR BOOKING
                </p>
                <div className="form_content_input">
                    <div className="form_content_input_card">
                        <div className="form_content_input_box">
                            <p className="form_content_input_box_content">YOUR NAME</p>
                        </div>

                        <div className="form_content_input_box">
                            <p className="form_content_input_box_content">YOUR E-MAIL ID</p>
                        </div>
                    </div>

                    <div className="form_content_input_card">
                        <div className="form_content_input_box">
                            <div className="form_content_input_box_session_one">
                                <div className="form_content_input_box_session_number">+91</div>
                                <img className="form_content_input_box_downarraow" src={formDownArrow} alt="downarrow" />
                            </div>

                            <div className="form_content_input_box_session_number">0000 000 000</div>
                        </div>                        
                        <div className="form_content_input_box form_content_input_box_button">
                            <p className="form_content_input_box_content form_content_input_box_send">SEND</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
      </>
    )
  }
  
  export default Form;