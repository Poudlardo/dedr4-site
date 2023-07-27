import React, { useState } from 'react';
import '../App.css';
import data from "../data.json";
import VerticalCarousel from "../components/VerticalCarousel";
import WhiteNavbar from '../components/WhiteNavbar';
import 'animate.css';

function Games() {

    return(
        <div className="gamespage">
                <WhiteNavbar />
                <video className="gamespage-video" autoPlay loop muted>
                    <source src='videos/GamesDedra-1438626014704308233-01.mp4' className='gamespage-source' type="video/mp4" />
                </video>    
                <div id="gamesmainpage">
                        <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
                        <section className='gamescontent animate__animated animate__fadeInUp'>
                            <div className='gametext'>
                                <div className="rectangle2 "></div>
                                <p className="description2">A tough skill based platforming game. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac suscipit arcu. Pellentesque tristique facilisis sollicitudin. Aliquam at erat vel lectus efficitur sodales. In hac</p>
                            </div>
                            <div className='platformslist' >
                                <img src='images/poki.png' className="partnerslogo"/>
                                <img src='images/coolmathgames.png' className="partnerslogo" />
                            </div>
                        </section>
                </div>

        </div>
    )
}

export default Games