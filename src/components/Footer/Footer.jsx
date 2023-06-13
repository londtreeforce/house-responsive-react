import React from 'react';

import "./footer.css";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="paddings innerWidth flexCenter footer-container">

            {/*LEFT*/}
            <div className="flexColStart footer-left">
                <img src="./logo2.png" alt="" width={120}/>

                <span className='secondaryText'>
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>
            {/*RIGHT*/}
            <div className="flexColStart footer-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>All information</span>

                <div className="flexCenter footer-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer