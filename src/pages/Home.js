import React from "react";
import '../App.css'
import ovoLogo from '../images/qV6_bweDv0NZO9OMxahC2g_store_logo_image.png';
import homeVideo from '../videos/GamesDedra-1438626014704308233-01.mp4';
import fleche from '../images/Arrow 1.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
    return(
    <div className="home-container">
        <Navbar />        
        <div className="Homehero">
            <section className="textside">
                <div className="rectangle"></div>
                <img src={ovoLogo} className="ovoLogo" />
                <p className="description"><b>A tough skill based platforming game.</b><br />(Mobile/ PC)</p>
                <button className="playnow">PLAY NOW <img src={fleche} width='32px'/></button>
            </section>
            <section className="videoside-content">
                <video className="video" autoPlay loop muted>
      <source src={homeVideo} type="video/mp4" />
                 </video> 
            </section>
        </div>
        <Footer />
    </div>
    )
}

export default Home 