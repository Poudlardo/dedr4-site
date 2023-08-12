import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import "animate.css";
import Icon from '@mdi/react';
import { mdiChevronLeftCircle, mdiChevronRightCircle } from '@mdi/js';

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
      <div id="gamesmainpage">
      <p className="description2"></p>
      <div id="CarouselBtns">
        <a data-slide="prev" href="#quote-carousel" className="carousel-control">
          <Icon path={mdiChevronLeftCircle} size={3} className="left" />
        </a>
        <a data-slide="next" href="#quote-carousel" className="carousel-control">
          <Icon path={mdiChevronRightCircle} size={3} className="right"  />
        </a>
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
      
      </div>
    </div>
  );
}

export default GamesTwo;
