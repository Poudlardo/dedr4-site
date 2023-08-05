import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="leftpart">Dedra Games © 2023. All Rights Reserved.</p>
      <div className="rightpart">
        <p className="follow">FOLLOW US</p>
        <div className="line"></div>
        <a href="https://discord.com/invite/ovo-speedrunning-community-645935373368688650">
          <img src="images/discord.svg" className="socialmedias" />
        </a>
        <a href="https://www.youtube.com/channel/UCQ2CAlP8Zo8-P4I7hZ23Yfg">
          <img src="images/youtube.svg" className="socialmedias" />
        </a>
        <a href="https://twitter.com/GamesDedra">
          <img src="images/twitter.svg" className="socialmedias" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
