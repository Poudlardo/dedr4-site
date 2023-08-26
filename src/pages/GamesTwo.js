import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";

function GamesTwo() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    //console.log(activeIndex);
    let checkedInput = document.querySelector(`input[id='${activeIndex + 1}']`);
    let blackDot = document.getElementById('debt-amount-pos');

    checkedInput.checked = 'true';
    blackDot.style.opacity = "1";
    blackDot.style.left = `${((activeIndex + 1) * 20) - 10}%`;
    
 }, [activeIndex])

  return (
    <div className="gamespage">
      <Navbar isWhite={true} />
      <video className="gamespage-video" autoPlay loop muted>
        <source
          src="/videos/Desktop 17-08-2023 03-21-01.mp4"
          className="gamespage-source"
          type="video/mp4"
        />
      </video>
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
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
          <div id="debt-amount-pos"></div>
          <input type="radio" name="debt-amount" id="1" value="1" defaultChecked required onChange={() => setActiveIndex(0)} />
          <label htmlFor="1"></label>
          <input type="radio" name="debt-amount" id="2" value="2" required onChange={() => setActiveIndex(1)}/>
          <label htmlFor="2"></label>
          <input type="radio" name="debt-amount" id="3" value="3" required onChange={() => setActiveIndex(2)}/>
          <label htmlFor="3"></label>
          <input type="radio" name="debt-amount" id="4" value="4" required onChange={() => setActiveIndex(3)}/>
          <label htmlFor="4"></label>
          <input type="radio" name="debt-amount" id="5" value="5" required onChange={() => setActiveIndex(4)}/>
          <label htmlFor="5"></label>
          </div>
	      </form>
    </div>
  );
}

export default GamesTwo;

