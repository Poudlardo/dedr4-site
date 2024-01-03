import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ connectPage = false, isWhite = false }) {
  const [whiteTheme, setWhiteTheme] = useState(isWhite);

  return (
    <div className={`footer${isWhite? '-white' : ''}`}>
      <p className={`leftpart${isWhite? '-white' : ''}`}>
        Dedra Games © 2024. 
        <span className={`nowrap${isWhite? '-white' : ''}`}> All Rights Reserved.</span>
      </p>
      <div className="rightpart">
        { connectPage ?  
          <Link className={`nav-link${isWhite? '-white' : ''}`} to="/privacy">
            PRIVACY POLICY
          </Link> : <p className={`follow${isWhite? '-white' : ''}`}>FOLLOW US</p>
      }      
        <div className={`line${isWhite? '-white' : ''}`}></div>
        { connectPage ? 
           <Link className={`nav-link${isWhite? '-white' : ''}`} to="/tos">
                 TERMS OF SERVICE
           </Link> :    
           <div className={`socialmedias${isWhite? '-white' : ''}`}>
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
