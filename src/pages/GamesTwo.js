import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "animate.css";
import VerticalCarousel from "../components/VerticalCarousel";
import Icon from "@mdi/react";
import { mdiAt, mdiCircleSmall, mdiTwitter, mdiLink, mdiYoutube } from "@mdi/js";

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

 /*const clickDiscord = (e) => {
  // copy to clipboard
  navigator.clipboard.writeText("games.dedra@gmail.com");
  // show tooltip
  if (tooltip) return;
  setTooltip(true);
  setTimeout(() => {
    setTooltip(false);
  }, 1300);
};*/

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
          We want our games to make sense. We strive to create universal experiences that everyone can identify with, while telling authentic and thought-provoking stories. Every game we develop is an original creation that has something new to offer our community of players. We are now in a position to self-publish our games to self-publish our games and put them directly into the hands of our players. We also share our publishing expertise and collaborate with other developers to bring their developers to bring their stories to life. We work with studios that share our values and whose creative vision aligns with our own.
          </p>
        </div>
        <div>
          <img src="images/ossamadam.jpg" className="ossamadam" />
        </div>
        <div></div>
      </div>
      <div className="teamcontainer">
        <h1>OUR DEDICATED TEAM</h1>
        <div className="teammembers">
          <div className="ossam">
            <div class="card">
            <div class="additional">
              <div class="user-card">
              </div>
              <div class="more-info">
                <h1>Ossama Jouini</h1>
                <div class="coords">
                  <span>Co-Founder</span>
                  <span>Game designer and programmer</span>
                </div>
                <div class="coords">
                  <span>Paris, France</span>
                </div>
                <div class="stats">
                  <div>
                    <div class="title">Twitter</div>
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
                    <div class="title">Discord</div>
                    <a href="#">
                    <svg class="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </a>
                  </div>
                  <div>
                    <div class="title">YouTube</div>
                    <a href="https://www.youtube.com/channel/UCkHfyzgi2KhEvvhlbVndoeA">
                    <Icon path={mdiYoutube} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>Ossama Jouini</h1>
              <p>The one supervising the team, dispatching some of the tasks, and
              coordinating what each member of the team does. He also handles
              coding Als of the games and the many interfaces the user will
              encounter. Finally, he helps with all the coding part and the
              scenario.</p>
            </div>
            </div>
          </div>
          <div className="adam">
          <div class="card">
            <div class="additional">
              <div class="user-card">
              </div>
              <div class="more-info">
                <h1>Adam Merhairi</h1>
                <div class="coords">
                  <span>Scenarist, Level designer</span>
                  <span>Co-Founder</span>
                </div>
                <div class="coords">
                  <span>Paris, France</span>
                </div>
                <div class="stats">
                  <div>
                    <div class="title">Discord</div>
                    <svg class="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>Adam Merhairi</h1>
              <p>He is in charge of making our games feel complete and real by
              doing the world building and level design, as well as creating
              most of the scenario seen in the game. He is also in charge of
              helping with some of the art of the games.</p>
            </div>
            </div>
          </div>
          <div className="american">
            <div class="card">
            <div class="additional">
              <div class="user-card">
              </div>
              <div class="more-info">
                <h1>American</h1>
                <div class="coords">
                  <span>Musician</span>
                  <span>not AI-made, promess!</span>
                </div>
                <div class="coords">
                  <span>Seattle(WA), USA</span>
                </div>
                <div class="stats">
                  <div>
                    <div class="title">Twitter</div>
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
                    <div class="title">Discord</div>
                    <a href="#">
                    <svg class="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </a>
                  </div>
                  <div>
                    <div class="title">YouTube</div>
                    <a href="https://www.youtube.com/channel/UCkHfyzgi2KhEvvhlbVndoeA">
                    <Icon path={mdiYoutube} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>American</h1>
              <p>Very little is know about the american employee. We need to investigate that matter</p>
            </div>
            </div>
          </div>
          <div className="brasil">
          <div class="card">
            <div class="additional">
              <div class="user-card">
              </div>
              <div class="more-info">
                <h1>Nicolas Nogueira</h1>
                <div class="coords">
                  <span>Lead Artist</span>
                  <span>2D/3D modelling</span>
                </div>
                <div class="coords">
                  <span>Rio de Janeiro, Brazil</span>
                </div>
                <div class="stats">
                  <div>
                    <div class="title">Twitter</div>
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
                    <div class="title">Discord</div>
                    <svg class="discord-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" >
                      <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="title">Website</div>
                    <a href="https://itsamenicobros.netlify.app/">
                    <Icon path={mdiLink} size={2} color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>Nicolas Nogueira</h1>
              <p>Dedicated model artist from Brazil, Nicolas has a proficiency using Construct 3, Blender and many other tools. Drawing and music making are also an important part of his life. He still didn't learn french yet though.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      <Footer />
    </div>
  );
}

export default GamesTwo;


