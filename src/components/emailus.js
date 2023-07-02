import React from 'react';
import './emailus.css';


const Emailus = (props) => {

  return (
    <div className="buttton-wrapper" onClick={props.addTrip}>
      <a href="#"><span></span>Email us</a>
    </div>
  )
}

export default Emailus