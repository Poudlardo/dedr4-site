import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ connectPage = false }) {


  return (
    <div className="footer">
      <p className="leftpart">
        Dedra Games © 2023.{" "}
        <span className="nowrap">All Rights Reserved.</span>
      </p>
      <div className="rightpart">
        { connectPage ?  
          <Link className="cn-nav-link" to="/privacy">
            PRIVACY POLICY
          </Link> : <p className="follow">FOLLOW US</p>
      }      
        <div className="line"></div>
        { connectPage ? 
           <Link className="nav-link" to="/tos">
                 TERMS OF SERVICE
           </Link> :    
           <div className="socialmedias">
              <a href="https://discord.com/invite/ovo-speedrunning-community-645935373368688650">
                <img src="images/discord.svg"  />
              </a>
              <a href="https://www.youtube.com/channel/UCQ2CAlP8Zo8-P4I7hZ23Yfg">
                <img src="images/youtube.svg"/>
              </a>
              <a href="https://twitter.com/GamesDedra">
                <img src="images/twitter.svg" />
              </a>
           </div>
        }
      </div>
    </div>
  );
}

export default Footer;
