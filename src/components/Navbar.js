import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import dedraLogo from '../images/unnamed-trnsprnt.png';
import BlackhbrgerLogo from '../images/black_hamburger-menu-svgrepo-com-.svg'


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

function clickHamberger() {
  const Links = document.querySelector('ul');
  Links.classList.toggle('mobile-menu');
}

  return (
    <nav className='navbar'>
        <Link to="/" className='dedra' onClick={closeMobileMenu}>
        <img className="dedra-logo" src={dedraLogo} /> DEDRA 
        </Link>
        <ul>
          <li>
            <Link className='nav-link' to="/" onClick={handleClick}>
                { click ? 'HOME' : <Link to="/games" onClick={closeMobileMenu}>GAMES</Link> }
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
        <img src={BlackhbrgerLogo} className='BlackhbrgerLogo' onClick={clickHamberger} />
    </nav>
  )
}

export default Navbar