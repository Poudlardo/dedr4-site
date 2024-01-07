import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiTwitter, mdiLink, mdiYoutube } from "@mdi/js";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const imgs = [
  "images/img-slider/0803521735725015.png",
  "images/img-slider/0804549868744833.png",
  "images/img-slider/2988729323070635.png",
  "/images/img-slider/risededra_highlight_1695722717759097885.png",
  "images/img-slider/risededra__2018-01-26T213110.000Z.jpg",
  "images/img-slider/risededra__2018-04-06T133400.000Z.jpg",
  "images/img-slider/risededra__2018-04-29T193909.000Z.jpg",
  "images/img-slider/risededra__2018-06-04T123013.000Z.jpg",
  "images/img-slider/risededra__2018-06-11T091430.000Z.jpg",
  "images/img-slider/ossamadam.jpg"
];

const items = imgs.map((el, index) => {
  const style = { width: 150 + index * 30 };
  return <img src={el} className="item" style={style} data-value={index + 1} />;
});


function GamesTwo() {
  const slidesNumber = data.slides.length
  const [activeIndex, setActiveIndex] = useState(0);

  function hidePopUp () {
    let light = document.getElementById('light');
    light.style.display='none';
  }

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
          <h3>Independant video game studio.</h3>
          <h3 onClick={hideIntroDiv}>ENTER</h3>
        </div>
        <Navbar isWhite={true} />
        <div className="video-wrapper">
          <video className="gamespage-video" autoPlay loop muted>
            <source
              src="/videos/Desktop 17-08-2023 03-21-01.mp4"
              className="gamespage-source"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="games-carousel-container">
          <div className="titles-homepage">
            <h1>OUR GAMES</h1>
            <div className="carousel-control-container">
              <a data-slide="prev" className="carousel-control" onClick={() => (activeIndex == 0)? setActiveIndex(slidesNumber - 1) : setActiveIndex(activeIndex - 1)} >
            <Icon path={mdiChevronLeft} size={2} className="left" />
              </a>
              <p className="game-number">1 / 5</p>
              <a data-slide="next"  className="carousel-control" onClick={() => (activeIndex == slidesNumber - 1)? setActiveIndex(0) : setActiveIndex(activeIndex + 1)}>
            <Icon path={mdiChevronRight} size={2} className="right"  />
              </a>
            </div>
            <div className="titreetannee">
              <h2 id='titrejeu'>OVO</h2>
              <p id="yearjeu"> (2020)</p>
            </div>
          </div>
          <VerticalCarousel data={data.slides} leadingText={data.leadingText} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <div id="light" className="white_content">
            <a onClick={(e) => {hidePopUp(); e.preventDefault()}} >X</a>
            <img src="images/pop-up.png"/>
            <p>AVAILABLE EXCLUSIVELY ON<br />COOLMATH GAMES</p>
          </div>
          <div className="gameinfo-container">
          <p className="description2">Take part in speedruns using a stickman character. Hop, skip and jump your way through the levels, and reach the finish flag as quickly as possible! <br/><br/> Can you be the fastest speedrunner in the game ?</p>      
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
          <a href="#aboutpage">
            <div className="arrow-box">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </a>
        </div>
        <div id="aboutpage">
        <div className="slogancontainer animate__animated animate__slideInUp">
        <h1>WE SPEND OUR TIME MAKING GAMES YOU'LL SPEND YOURS TO PLAY</h1>
        <img src="images/ovo-avatars.png" />
      </div>
      <div className="historycontainer">
        <h2>
          DEDRA GAMES is a small, dedicated and passionate video game company. What started as a passion for video games between two parisian friends, evolved into creating awesome games with awesome people worldwide.
        </h2>
        <p>
          We think of video games as not just being a hobby, but a distinct form of art. A complex medium that can teach humans useful things, convey emotions and unites people. We know it because that is our story.
          <br /><br />
        A school group project in 2017 around a multiplayer game called RISE, sparked Ossama and Adam's interest - the two cofounders and real-life friends - in creating their dream game concepts they have been discussing on for months. DEDRA GAMES was born and RISE the first game ever released. For years on, we have been insiders of the video game industry, sharpened our knowledge of game making, and met the best qualified people in their areas, both online and on the ground. From Paris to the world. 
          <br /><br />        
        </p>
        <AliceCarousel
        autoWidth
        mouseTracking
        disableButtonsControls
        disableDotsControls
        items={items}
        />
      </div>        
      <div className="videos-container">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K2mUuZ6iD6M?si=0SL3m729JDv6wxyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <br />
        <p>
          Currently, we're proud to be Poki company ambassador, empowering us to provide the best web game experiences. Our next title will be Duck Duck Dodge, soon available on Poki's website. And also, we're developing our new secret game, far from web browsers...
          <br /><br />
          Our games awards gameplay skills, good mechanics but welcomes new comers and occasional players at the same time! OVO, our most played title to date, now gathers a great community of speedrunners, sharing their exploits throughout the internet. At Dedra we're thankful for that, and hope to create even more rich experiences in the future.
        </p>
        </div>  
      <div className="teamcontainer">
        <h1>MEET OUR DEDICATED TEAM</h1>
        <div className="teammembers">
          <div className="ossam">
            <div className="card">
            <div className="additional">
              <div className="user-card">
              </div>
              <div className="more-info">
                <div className="stats">
                  <div>
                    <div className="title">Twitter</div>
                    <a href="https://twitter.com/skymen75">
                      <Icon path={mdiTwitter}
                      title="User Profile"
                      size={2}
                      horizontal
                      vertical
                      rotate={180}
                      color="white"
                      />
                    </a>
                  </div>
                  <div>
                    <div className="title" >Discord</div>
                    <svg className="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="title">YouTube</div>
                    <a href="https://www.youtube.com/channel/UCkHfyzgi2KhEvvhlbVndoeA">
                    <Icon path={mdiYoutube} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="pp-team innershadow" src="images/pp-ossama.jpg"/>
            <div className="general">
            <h1>Ossama Jouini</h1>
              <p>Co-Founder & Main programmer</p>
            </div>
            </div>
          </div>
          <div className="adam">
          <div className="card">
            <div className="additional">
              <div className="user-card">
              </div>
              <div className="more-info">
                <div className="stats">
                  <div>
                    <div className="title" >Discord</div>
                    <svg className="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img className="pp-team innershadow" src="images/pp-adam.jpg"/>
            <div className="general">
              <h1>Adam Merhairi</h1>
              <p>Co-Founder, Level designer & scenarist</p>
            </div>
            </div>
          </div>
          <div className="american">
            <div className="card">
            <div className="additional">
              <div className="user-card">
              </div>
              <div className="more-info">
                <div className="stats">
                  <div>
                    <div className="title">Twitter</div>
                    <a href="https://twitter.com/#">
                    <Icon path={mdiTwitter}
                    title="User Profile"
                    size={2}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                    />
                    </a>
                  </div>
                  <div>
                    <div className="title">Discord</div>
                    <svg className="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="title">YouTube</div>
                    <a href="https://www.youtube.com/channel/UCkHfyzgi2KhEvvhlbVndoeA">
                    <Icon path={mdiYoutube} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="general">
              <h1>U.S.A member</h1>
              <p>Musician & Sound designer</p>
            </div>
            </div>
          </div>
          <div className="brasil">
          <div className="card">
            <div className="additional">
              <div className="user-card">
              </div>
              <div className="more-info">
                <div className="stats">
                  <div>
                    <div className="title">Twitter</div>
                    <a href="https://twitter.com/Its_me_NicoBros">
                    <Icon path={mdiTwitter}
                    title="User Profile"
                    size={2}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                    />
                    </a>
                  </div>
                  <div>
                    <div className="title">Discord</div>
                    <svg className="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="title">Website</div>
                    <a href="https://itsamenicobros.netlify.app/">
                    <Icon path={mdiLink} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>            
            <img className="pp-team innershadow" src="images/pp-nicolas.jpg"/>
            <div className="general">
              <h1>Nicolas Nogueira</h1>
              <p>Lead Artist & 3d designer</p>
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      <Footer isWhite />
    </div>
  );
}

export default GamesTwo;


