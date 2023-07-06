import React, {useState} from 'react';
import './emailus.css';

const Emailus = () => {

  const handleClick = (e) => {
    const formStyle = document.querySelector('.form-style-9');
    const emailBtn = document.querySelector('.buttton-wrapper');
    
    formStyle.style.display = 'block';
    formStyle.style.animation = 'fadeIn';
    formStyle.style.animationDuration = '3s';

    emailBtn.style.animation = 'fadeOut'; /* referring directly to the animation's @keyframe declaration */
    emailBtn.style.animationDuration = '0.5s';
    emailBtn.addEventListener('animationend', () => {emailBtn.style.display = 'none'})
  };

  return (
    <div className='email-us'>
    <div className="buttton-wrapper " onClick={handleClick}>
      <a href="#"><span></span>Email us</a>
    </div>
    <form className="form-style-9">
      <ul className="form-list">
      <li>
          <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
          <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />
      
      </li>
      <li>
          <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
          <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
      </li>
      <li>
      <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
      </li>
      <li>
      <textarea name="field5" class="field-style" placeholder="Message"></textarea>
      </li>
      <li>
      <input type="submit" value="SEND" />
      </li>
      </ul>
    </form>
    </div>
  )
}

export default Emailus