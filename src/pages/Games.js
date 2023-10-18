import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import VerticalCarousel from "../components/VerticalCarousel";
import Navbar from "../components/Navbar";
import "animate.css";

function Games() {
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
      <div id="gamesmainpage">
        <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
        <section className="gamescontent animate__animated animate__fadeInUp">
          <div className="gametext">
            <div className="rectangle2 "></div>
            <p className="description2">
              A tough skill based platforming game. Lorem ipsum dolor sit amet,
              consectetur adipiscinpuziurzeirug elit. Etiam ac suscipit arcu. Pellentesque
              tristique facilisis sollicitudin. Aliquam at erat vel lectus
              efficitur sodales. In hac
            </p>
          </div>
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
        </section>
      </div>
    </div>
  );
}

export default Games;
