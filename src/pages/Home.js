import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="Homehero">
        <section className="textside">
          <div className="rectangle"></div>
          <div className="gametitlebox">
            <img
              src="images/qV6_bweDv0NZO9OMxahC2g_store_logo_image.png"
              className="ovoLogo"
            />
            <p className="description">
              <b>A tough skill based platforming game.</b>
              <br />
              (Mobile/ PC)
            </p>
          </div>
          <a href="https://www.crazygames.com/game/ovo">
            <button className="playnow">
              <b>PLAY NOW </b>
              <img src="images/Arrow 1.png" width="32px" />
            </button>
          </a>
        </section>
        <section className="videoside-content">
          <video className="video" autoPlay loop muted>
            <source
              src="/videos/Desktop 17-08-2023 03-21-01.mp4"
              type="video/mp4"
            />
          </video>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
