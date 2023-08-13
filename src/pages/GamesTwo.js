import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";

function GamesTwo() {



  return (
    <div className="gamespage">
      <Navbar isWhite={true} />
      <video className="gamespage-video" autoPlay loop muted>
        <source
          src="videos/GamesDedra-1438626014704308233-01.mp4"
          className="gamespage-source"
          type="video/mp4"
        />
      </video>
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
      <div className="gameinfo-container">
        <p className="description2"></p>      
        <div className="platformslist">
          <a id="lien1" href="https://poki.com/en/g/ovo-classic">
                <img src="images/poki.png" id="logo1" className="partnerslogo" />
          </a>
          <a id="lien2" href="https://www.coolmathgames.com/0-ovo">
                <img
                  src="images/coolmathgames.png"
                  id="logo2"
                  className="partnerslogo"
                />
          </a>
        </div> 
      </div>

    </div>
  );
}

export default GamesTwo;
