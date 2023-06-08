import React from "react";
import '../App.css'
import homeVideo from '../videos/GamesDedra-1438626014704308233-01.mp4';

function Games() {
    return(
        <div className="gamespage">
        <div className="videocontainer">
                <video className="video-gamespage" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
                </video> 
            </div>    
        </div>
    )
}

export default Games