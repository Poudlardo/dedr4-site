import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";

function GamesTwo() {

  function componentDidMount() {

    makeBtnsBlackOnCheck(); 
  }

  function makeBtnsBlackOnCheck() {
    let btnChecked = document.querySelectorAll('input');
    btnChecked[0].checked = true;
  }

  const [Idx, SetIdx] = useState(0);
  
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
        <p className="description2">Arcade platform game in which you take part in speedruns using a stickman character. Your objective is to reach the flag at the finish line as quickly as possible. Your speed and efficiency will determine your success and high score. All you have to do is hop, skip and jump your way through the levels! If you really want to master the game, combine these actions to get even more power! You can jump higher right after a slide or a leap to the ground! Can you be the fastest speedrunner in the game ?</p>      
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

      	<form>
		<div id="debt-amount-slider">
        { data.slides.map( (item, Idx)=>  <label for={Idx}><input className={item.introline} type="radio" name="debt-amount" id={Idx} value={Idx} required />
                                          </label>
        )}
			<div id="debt-amount-pos"></div>
		</div>
	</form>
    </div>
  );
}

export default GamesTwo;
