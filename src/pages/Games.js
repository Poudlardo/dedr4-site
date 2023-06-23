import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import data from "../data.json";
import VerticalCarousel from "../components/VerticalCarousel";
import Navbar from '../components/Navbar';
import 'animate.css';

function Games() {

    return(
        <div className="gamespage">
                <Navbar />
                <video className="gamespage-video" autoPlay loop muted>
                    <source src='videos/GamesDedra-1438626014704308233-01.mp4' className='gamespage-source' type="video/mp4" />
                </video>    
                <div id="gamesmainpage">
                        <VerticalCarousel data={data.slides} />
                    <section className='gamescontent'>
                        <div className="rectangle2 animate__animated animate__fadeInUp"></div>
                         <p className="description2 animate__animated animate__fadeInUp">A tough skill based platforming game.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac suscipit arcu. Pellentesque tristique facilisis sollicitudin. Aliquam at erat vel lectus efficitur sodales. In hac</p>
                    </section>
                </div>

        </div>
    )
}

export default Games