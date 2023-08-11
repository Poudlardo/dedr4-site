import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Consulting() {
  return (
    <div id="consultingpage">
      <Navbar/>
      <div id="introduction-container">
        <h1>Construct Consulting</h1>
        <h3>I joined the Construct community back in 2014, and since then, I built up a lot of knowledge about the engine.
            <br />I feel like, I can now make that knowledge available to other people.
            <br />
            Give me a try :)
        </h3>
        <a href="#previous-work-container">Our work</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBcSs01PBeyGOk6xqz9aPB0zGn6vdM7Rsf6OIO_bqOyraGhQ/viewform?pli=1">Get in Touch</a>
      </div>
      <div id="previous-work-container">
        <div id="games-helped">
            <h1>Some games I helped on</h1>
            <h3> I saved a ton of precious time by solving blocking issues these games were having.</h3>
            <div id="games-img">
                <img src='#'></img>
                <img src='#'></img>
                <img src='#'></img>
                <img src='#'></img>
            </div>
        </div>
        <div id="games-worked">
            <div className="cards-container">
                <div className="consulting-cards ovocard"></div>
                <div className="consulting-cards rhythmycard"></div>
            </div>
        </div>
        <div id="addons-made">
        <h1>Some addons I made</h1>
        <h3>Popular <b>plugins, behaviors</b> and <b>effects</b> I made, downloaded by hundreds.</h3>
        <div id="addons-icons">
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
        </div>
        </div>
      </div>
      <div id="community-content-container">
        <h1>Community content I produced</h1>
        <h3>I also produced a good amount of courses, tutorials, community and blog posts.</h3>
        <div className="cards-container">
            <div className="consulting-cards construct-courses"></div>
            <div className="consulting-cards advanced-lighting"></div>
            <div className="consulting-cards wtap"></div>
            <div className="consulting-cards skymen-blog"></div>
        </div>
        <div id="gallery-container">
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
            <img src='#'></img>
        </div>
      </div>
      <div id="reviews-container">
        <div id="reviews-introduction">
            <h1>Why me ?</h1>
            <h3>Well, that's simple: <b>I wanna help.</b><br />
I'm always glad to help out on Construct projects, <em>no matter the size</em>.<br />
I have acquired a ton of <b>knowledge </b>over the years, and it'd be a <em>shame</em> for that to go to waste.<br />

I have already helped with many projects, be it by <em><b>giving tips</b>, <b>making addons</b>,</em> or <em><b>fixing bugs</b></em>.</h3>
        </div>

        <div id="reviews-quotes">
            <h1> Don't take my word for it</h1>
            <h3>I was looking for a complete Slider Bar solution for C3 with no events, just plug & play, to build my own apps easily.
At first my idea was a custom plugin, but Ossama came up with a more efficient solution using a fully customisable JS script.
It worked perfectly for my needs with nice extra additions.
100% Recommended.</h3>
            <div id="all-quotes">
                <div className="quotecard">
                    <p></p>
                    <div className="quotetext-wrapper"></div>
                    <div className="quotepp-wrapper">
                        <img src="#"></img>
                    </div>
                </div>
                <div className="quotecard">
                    <p></p>
                    <div className="quotetext-wrapper"></div>
                    <div className="quotepp-wrapper">
                      <img src="#"></img>
                    </div>
                </div>
                <div className="quotecard">
                    <p></p>
                    <div className="quotetext-wrapper"></div>
                    <div className="quotepp-wrapper">
                        <img src="#"></img>
                    </div>
                </div>
                <div className="quotecard">
                    <p></p>
                    <div className="quotetext-wrapper"></div>
                    <div className="quotepp-wrapper">
                        <img src="#"></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consulting;
