import React from "react";
import '../App.css'
import Navbar from "../components/Navbar";

function Connect() {
    return(
        <div className="connectpage">
            <Navbar />
            <div className="sm-container">
                <h1>REACH US OUT !</h1>            
                <div className="socialmedias2">
                      <a href="https://discord.com/invite/ovo-speedrunning-community-645935373368688650"><img src="images/discord.svg" className="socialmedias" /></a>
                      <a href="https://www.youtube.com/channel/UCQ2CAlP8Zo8-P4I7hZ23Yfg"><img src="images/youtube.svg"className="socialmedias" /></a>
                      <a href="https://twitter.com/GamesDedra"><img src="images/twitter.svg" className="socialmedias" /></a>
                </div>
                <button className="emailus">EMAIL US</button>
            </div>
            
        </div>
    )
}

export default Connect