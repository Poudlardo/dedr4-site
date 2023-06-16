import React from 'react';
import './Slider.css';

function Slider() {

  return (
    <div className='slider'>
<input id="dot1" type="radio" name="dotGroup" checked />
  <label for="dot1" />
 <div className="slide background1" id="1" />

 <input id="dot2" type="radio" name="dotGroup" checked />
  <label for="dot2" />
  <div className="slide background2" id="2" />

  <input id="dot3" type="radio" name="dotGroup" checked />
  <label for="dot3" />
  <div className="slide background3" id="3" />
  
  <input id="dot4" type="radio" name="dotGroup" checked />
  <label for="dot4" />
  <div className="slide background4" id="4" />
    </div>
    
  )
}

export default Slider