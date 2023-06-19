import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

function clickHamberger() {
  const Links = document.querySelector('ul');
  const Hamburger = document.querySelector('.hbrgerLogo');
  Links.classList.toggle('mobile-menu');
  Hamburger.style.filter = 'none'; 
  
}

  return (
    <nav className='navbar'>
        <Link to="/" className='dedra' onClick={closeMobileMenu}>
        <img className="dedra-logo" src="images/unnamed-trnsprnt.png" /> DEDRA 
        </Link>
        <ul>
          <li>
            <Link className='nav-link' to="/games" onClick={handleClick}>
                GAMES
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
        <svg viewBox="0 0 100 80" width="40" height="30" className='hbrgerLogo' onClick={clickHamberger}>
            <rect width="90" height="10"></rect>
            <rect y="30" width="90" height="10"></rect>
            <rect y="60" width="90" height="10"></rect>
        </svg>
    </nav>
  )
}

export default Navbar