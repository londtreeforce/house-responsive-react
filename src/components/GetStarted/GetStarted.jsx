import React from 'react';

import './getstarted.css';


const GetStarted = () => {
  return (
    <div className="getstarted-wrapper">
        <div className="paddings innerWidth getstarted-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with</span>
                <span className='secondaryText'>
                    Subscribe and find super<br/>
                    Find your residence soon

                </span>
                <button className='button'>
                    <a href="mailo:londtreeforce@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted