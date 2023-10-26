import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";

function GamesTwo() {
  
  const [activeIndex, setActiveIndex] = useState(0);

 function hideIntroDiv() {
  new Audio('videos/files_click.m4a').play();
  let introDiv = document.querySelector('.dedra-intro');
      introDiv.style.animation = 'fade-out 0.7s forwards';
      introDiv.addEventListener('animationend', () => {introDiv.style.display = "none"})  
 }
  useEffect(() => {
    let introDiv = document.querySelector('.dedra-intro');
    //console.log(activeIndex);
    if (window.sessionStorage.getItem('animated') === null) { 
      introDiv.style.display = "flex";
      window.sessionStorage.setItem('animated', 1);
    }
    let checkedInput = document.querySelector(`input[id='${activeIndex + 1}']`);
    let blackDot = document.getElementById('debt-amount-pos');
    checkedInput.checked = 'true';
    blackDot.style.opacity = "1";
    blackDot.style.left = `${((activeIndex + 1) * 20) - 10}%`;
    
 }, [activeIndex]);

  return (
    <div className="gamespage">
      <div className="dedra-intro">
        <div className="title-container">
          <div className="dedra-title">D</div>
          <div className="loader">
            <div className="top"></div>
            <div className="bottom"></div>
         </div>
         <div className="dedra-title">DRA</div>
        </div>
        <h3>A video game studio.</h3>
        <h3 onClick={hideIntroDiv}>ENTER</h3>
      </div>
      <Navbar isWhite={true} />
      <video className="gamespage-video" autoPlay loop muted>
        <source
          src="/videos/Desktop 17-08-2023 03-21-01.mp4"
          className="gamespage-source"
          type="video/mp4"
        />
      </video>
      <div className="games-carousel-container">
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
        <div className="aboutpage">
        <div className="slogancontainer animate__animated animate__slideInUp">
        <h1>WE SPEND OUR TIME MAKING GAMES YOU'LL SPEND YOURS TO PLAY</h1>
        <img src="images/ovo-avatars.png" />
        <div className="arrow-box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="historycontainer">
        <div className="quisommesnous">
          <h1>Who are we ?</h1>
          <br />
          <p>
            Nous voulons que nos jeux aient du sens. Nous nous efforçons de
            créer des expériences universelles auxquelles tout le monde peut
            s'identifier, tout en racontant des histoires authentiques qui
            suscitent la réflexion. Chaque jeu que nous développons est une
            création originale qui a quelque chose de nouveau à offrir à notre
            communauté de joueuses et de joueurs.Nous sommes désormais en mesure
            d'autoéditer nos jeux et de les mettre directement entre les mains
            de nos joueuses et joueurs. Nous partageons également notre
            expertise en matière d'édition et collaborons avec d'autres
            développeurs pour donner vie à leurs histoires. Nous travaillons
            avec des studios qui partagent nos valeurs et dont la vision
            créative s'aligne sur la nôtre.
          </p>
        </div>
        <div>
          <img src="images/ossamadam.jpg" className="ossamadam" />
        </div>
        <div></div>
      </div>
      <div className="teamcontainer">
        <h1>WE MAKE GAMES</h1>
        <div className="teammembers">
          <div className="ossam">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Ossama Jouini</h2>
            <p>
              <b>Co-founder, game designer and programmer</b>
              <br />
              The one supervising the team, dispatching some of the tasks, and
              coordinating what each member of the team does. He also handles
              coding Als of the games and the many interfaces the user will
              encounter. Finally, he helps with all the coding part and the
              scenario.
            </p>
          </div>
          <div className="adam">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Adam Merhairi</h2>
            <p>
              <b>Co-founder, scenarist and level designer</b>
              <br />
              He is in charge of making our games feel complete and real by
              doing the world building and level design, as well as creating
              most of the scenario seen in the game. He is also in charge of
              helping with some of the art of the games.
            </p>
          </div>
          <div className="maryland">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Maryland member</h2>
            <p>I love video games</p>
          </div>
          <div className="brasil">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Brazil member</h2>
            <p>me guston los videon juegon</p>
          </div>
        </div>
      </div>
        </div>
      <Footer />
    </div>
  );
}

export default GamesTwo;


