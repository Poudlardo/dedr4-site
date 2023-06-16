import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import data from "../data.json";
import VerticalCarousel from "../components/VerticalCarousel";


function Games() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
  function clickHamberger() {
    const Links = document.querySelector('ul');
    Links.classList.toggle('mobile-menu');
  }

    return(
        <div className="gamespage">
                <video className="gamespage-video" autoPlay loop muted>
                    <source src='videos/GamesDedra-1438626014704308233-01.mp4' className='gamespage-source' type="video/mp4" />
                </video>    
                <div className='blacksail'>
                </div> 
                <nav className='gamespage-navbar'>
            <Link to="/" className='dedra' onClick={closeMobileMenu}>
            <img className="dedra-logo" src='images/unnamed-trnsprntwhite.png' /> DEDRA 
            </Link>
            <ul>
            <li>
                <Link className='nav-link' to="/" onClick={handleClick}>
                    HOME
                </Link>
            </li>
            <li>
                <Link className='nav-link' to="/about" onClick={closeMobileMenu}>
                    ABOUT
                </Link>
            </li>
            <li>
                <Link className='nav-link' to="/blog" onClick={closeMobileMenu}>
                    BLOG
                </Link>
            </li>
            <li>
            <Link className='nav-link' to="/connect" onClick={closeMobileMenu}>
                CONNECT
            </Link>
            </li>
            </ul>
            <img src='images/white_hamburger-menu-svgrepo-com.svg' className='whiteHbrgerLogo' onClick={clickHamberger} />
                </nav>
                <div id="gamesmainpage">
                    <VerticalCarousel data={data.slides} />
                    <section className='gamescontent'>
                        <div className="rectangle2"></div>
                         <p className="description2">A tough skill based platforming game.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac suscipit arcu. Pellentesque tristique facilisis sollicitudin. Aliquam at erat vel lectus efficitur sodales. In hac</p>
                    </section>
                </div>

        </div>
    )
}

export default Games