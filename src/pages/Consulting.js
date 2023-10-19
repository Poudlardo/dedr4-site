import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wasThatAddonPorted from './wasthataddonported.png'

function Consulting() {
  return (
    <div id="consultingpage">
      <Navbar isWhite={true} />
      <video className="gamespage-video" autoPlay loop muted>
        <source
          src="videos/constructvideo.mp4"
          className="gamespage-source"
          type="video/mp4"
        />
      </video>
      <div id="introduction-container">
        <h1>CONSTRUCT CONSULTING</h1>
        <h3>I joined the Construct community back in 2014, and since then, I built up a lot of knowledge about the engine.
            <br />I feel like, I can now make that knowledge available to other people.
            <br /><br />
            Give me a try :)
        </h3>
        <div>
          <a href="#previous-work-container">Our work</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBcSs01PBeyGOk6xqz9aPB0zGn6vdM7Rsf6OIO_bqOyraGhQ/viewform?pli=1">Get in Touch</a>
        </div>

      </div>
      <div id="previous-work-container">
        <div id="games-helped">
            <h1>Some games I helped on</h1>
            <h3> I saved a ton of <b>precious time</b> by solving <b>blocking issues</b> these games were having.</h3>
            <div id="games-img">
                <a href="https://store.steampowered.com/app/1125860/Rabisco/"><img src='https://cdn.akamai.steamstatic.com/steam/apps/1125860/header.jpg?t=1603985198'></img></a>
                <a href="https://store.steampowered.com/app/844590/Hypnospace_Outlaw/"><img src='https://cdn.akamai.steamstatic.com/steam/apps/844590/header.jpg?t=1691139843'></img></a>
                <a href="https://store.steampowered.com/app/1428840/10mg_SNAAAK/"><img src='https://cdn.akamai.steamstatic.com/steam/apps/1428840/header.jpg?t=1616084413'></img></a>
                <a href="https://nightwalkers.io/"><img src="https://cdn.titotu.io/images/games/nightwalkers-io-1184x666.jpg"></img></a>
            </div>
        </div>
        <div id="games-worked">
          <h1>Some games I worked on</h1>
          <h3>Games I am a <b>primary developer</b> in.</h3>
          <div className="gamecards">
              <div className="consulting-cards">
                  <img src="https://i.pinimg.com/736x/a2/9c/ad/a29cad95d398a2174872dee9d2f94227.jpg" className="item-img" ></img>
                  <a href="http://ovo.surge.sh/"><h1>OvO</h1></a>
                  <p>OvO is a fast paced parkour platformer.<br />
It started as a fun game jam entry, but it is now a popular speedrun game with a very active community.</p>
              </div>
              <div className="consulting-cards">
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1001970/header.jpg?t=1666992397" className="item-img"></img>
                  <a href="https://store.steampowered.com/app/1001970/Rhythmy/"><h1>Rythmy</h1></a>
                  <p>Rhythmy is an arcade-style rhythm bullet hell game.<br />
I started working on the game a while ago to help push it to Early Access and make a level editor for it.</p>
              </div>
          </div>
        </div>
        <div id="addons-made">
        <h1>Some addons I made</h1>
        <h3>Popular <b>plugins, behaviors</b> and <b>effects</b> I made, downloaded by hundreds.</h3>
        <div id="addons-icons">
            <a href="https://www.construct.net/en/make-games/addons/294/input-manager"><img src='images/input-manager.png'></img></a>
            <a href="https://www.construct.net/en/make-games/addons/361/skin-behavior"><img src='images/skin-bahavior.png'></img></a>
            <a href="https://www.construct.net/en/make-games/addons/449/better-outline"><img src='https://construct-static.com/images/v1149/uploads/addon/449/icon/56937/icon.png' height="65px"></img></a>
            <a href="https://www.construct.net/en/make-games/addons/436/greenworksredraw"><img src='images/greenworksredraw.png'></img></a>
            <a href="https://www.construct.net/en/make-games/addons/462/run-background"><img src='images/run-background.png'></img></a>
        </div>
        </div>
        <div id="community-content-container">
        <h1>Community content I produced</h1>
        <h3>I also produced a good amount of courses, tutorials, community and blog posts.</h3>
        <div className="gamecards">
            <div className="consulting-cards">
              <img src="https://dedragames.com/consulting/assets/images/logo-800x400.png"></img>
              <a href=""><h1>Construct Courses</h1></a>
              <ul>
                <li><a href="">Construct Time</a></li>
                <li><a href="">Optimisation tricks in the Construct</a></li>
                <li><a href="">Z Order System</a></li>
                <li><a href="">Javascript Tips</a></li>
              </ul>
            </div>
            <div className="consulting-cards">
              <img src="https://dedragames.com/consulting/assets/images/d7cosm6w4aedi37-447x398.jpg"></img>
              <a href="https://www.construct.net/en/tutorials/making-advanced-lighting-2232"><h1>Advanced Lighting</h1></a>
              <p>I made a complex lighting system a while ago for my game, and I wrote a very detailed tutorial about how to replicate it.</p>
            </div>
            <div className="consulting-cards">
              <img src={wasThatAddonPorted}></img>
              <a href="https://wasthataddonported.surge.sh/"><h1>W T A P</h1></a>
              <p>'Was that addon ported ?' is a community driven website I made that references many popular Construct 2 addons that were then ported to Construct 3.</p>
            </div>
            <div className="consulting-cards">
              <img src="https://dedragames.com/consulting/assets/images/meditate-1-400x400.jpg"></img>
              <a href="https://www.construct.net/en/blogs/skymen-13"><h1>Skymen's Blog</h1></a>
              <p>I also keep a blog about various projects or takes I have that are related to Contruct in some way.</p>
            </div>
        </div>
        <div id="gallery-container">
            <img src='images/8bit-gif.gif'></img>
            <img src='images/character.gif'></img>
            <img src='images/d7cosm6w4aedi37-447x398.jpg'></img>
            <img src='images/dialog.gif'></img>
            <img src='images/gameplay.gif'></img>
            <img src='images/ovoavatar.gif'></img>
            <img src='images/progressbar.gif'></img>
            <img src='images/rhythmy-level.gif'></img>
        </div>
        </div>
        </div>
      <div id="reviews-container">
        <div id="reviews-introduction">
            <h1>Why me ?</h1>
            <h3>Well, that's simple: <b>I wanna help.</b><br />
            I'm always glad to help out on Construct projects, <em>no matter the size</em>.<br />
            I have acquired a ton of <b>knowledge </b>over the years, and it'd be a <em>shame</em> for that to go to waste.</h3>
            <h3>I have already helped with many projects, be it by <em><b>giving tips</b>, <b>making addons</b>,</em> or <em><b>fixing bugs</b></em>.</h3>
        </div>
        <div id="reviews-quotes">
            <h1> Don't take my word for it</h1>
            <div id="all-quotes">
                <div className="quotecard">
                    <p>I was looking for a complete Slider Bar solution for C3 with no events, just plug & play, to build my own apps easily.
At first my idea was a custom plugin, but Ossama came up with a more efficient solution using a fully customisable JS script.
It worked perfectly for my needs with nice extra additions.
<br />100% Recommended.</p>
                  <div className="card-downside">
                    <div className="quotepp-wrapper">
                        <img src="https://pbs.twimg.com/profile_images/1625583553537794052/LMOsymqt_400x400.jpg"></img>
                    </div>
                    <div className="quotetext-wrapper">
                      <a href="https://twitter.com/DavitMasia">Davit Masia</a>
                      <p>Game/Tools Designer</p>
                    </div>
                  </div>
                </div>
                <div className="quotecard">
                    <p>Skymen came to the rescue a few minutes after mentioning my issue on the Construct Community Discord channel.
                    <br />We had our game ready to ship in the next few hours, it was unbelievable!
<br />His service is absolutely astonishing, definitely your best bet when it comes to Construct.</p>
                    <div className="card-downside">                      
                        <div className="quotepp-wrapper">
                          <img src="https://pbs.twimg.com/profile_images/1001068296928727040/X-28zMo__400x400.jpg"></img>
                        </div>
                        <div className="quotetext-wrapper">
                          <a href="https://twitter.com/Clovelt">Clovelt</a>
                          <p>Developer of SNAAAK</p>
                      </div>

                    </div>
                </div>
                <div className="quotecard">
                    <p>We were in need of a Level Editor for our game Rhythmy, but we couldn't manage to work on the game and an editor at the same time. Which is when we met Ossama that came up with a perfect solution for our needs, he made our Editor with VueJS and we managed to connect it live to our Construct 3 project thanks to his massive efforts, would totally recommend his services!</p>
                  <div className="card-downside">                    
                  <div className="quotepp-wrapper">
                        <img src="https://pbs.twimg.com/profile_images/1104822191936413696/qAh_Ledo_400x400.png"></img>
                    </div>
                    <div className="quotetext-wrapper">
                      <a href="https://twitter.com/GameRhythmy">Insane Hawk</a>
                      <p>Developer of Rhythmy</p>
                    </div>
                  </div>
                </div>
                <div className="quotecard">
                    <p>One of my games (Rabisco) has a very specific tileset arrangement, making it a bit hard to implement traditional auto-tiling algorithms, so I contacted Skymen and he managed to create a custom system in just a few minutes!
<br />I was very pleased with the results and I’m still using his work to this day.</p>
                  <div className="card-downside">                    
                    <div className="quotepp-wrapper">
                        <img src="https://pbs.twimg.com/profile_images/1553922919646040073/pkVfDep7_400x400.jpg"></img>
                    </div>
                    <div className="quotetext-wrapper">
                      <a href="https://twitter.com/ViridinoStudios">Mateus Ferreira</a>
                      <p>Developer of Rabisco</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Consulting;
