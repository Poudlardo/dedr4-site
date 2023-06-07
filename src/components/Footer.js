import React, { useState } from 'react';
import './Footer.css';
import faTwitter from '../images/twitter.svg'
import faDiscord from '../images/discord.svg'
import faYoutube from '../images/youtube.svg'

function Footer() {

  return (
    <div className="footer">
        <p className='leftpart'>Dedra Games © 2023. All Rights Reserved.</p>
      <div className='rightpart'>
        <p>FOLLOW US</p>
        <div className="line"></div>
        <a href="https://discord.com/invite/ovo-speedrunning-community-645935373368688650"><img src={faDiscord} className="socialmedias" /></a>
        <a href="https://www.youtube.com/channel/UCQ2CAlP8Zo8-P4I7hZ23Yfg"><img src={faYoutube} className="socialmedias" /></a>
        <a href="https://twitter.com/GamesDedra"><img src={faTwitter} className="socialmedias" /></a>
      </div> 
    </div>
  )
}

export default Footer
