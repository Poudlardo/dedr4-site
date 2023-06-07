import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
<<<<<<< HEAD
import dedraLogo from '../images/unnamed-trnsprnt.png';
import BlackhbrgerLogo from '../images/black_hamburger-menu-svgrepo-com-.svg'

=======
>>>>>>> 91fb5569ad1aa717ee4c7da49fed6725ff871add

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

<<<<<<< HEAD
function clickHamberger() {
  const Links = document.querySelector('ul');
  Links.classList.toggle('mobile-menu');
}

=======
>>>>>>> 91fb5569ad1aa717ee4c7da49fed6725ff871add
  return (
    <nav className='navbar'>
<<<<<<< HEAD
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
=======
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                DEDRA <i></i>
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

            <div className='menu-icon'>
            </div>
        </div>
>>>>>>> 91fb5569ad1aa717ee4c7da49fed6725ff871add
    </nav>
  )
}

export default Navbar