import React from "react";

import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/*LEFT*/}
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help always ready to help always ready to help{" "}
          </span>

        
          <div className="flexColStart contactModels">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+1 999 999 99</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode 1:50:52 */}  

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+1 999 999 99</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>



              

            </div>



          </div>

          

        




          {/*Messages Mode
          <div className="flexColStart contactModels">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+1 999 999 99</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
            </div>
          </div>
        */}
          
        </div>
        {/*RIGHT*/}
        <div className="contact-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
