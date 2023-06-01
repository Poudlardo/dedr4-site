import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <> 
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                DEDRA <i></i>
            </Link>
            <ul>
              <li>
                <Link to="/" onClick={handleClick}>
                    { click ? 'HOME' : <Link to="/games" onClick={closeMobileMenu}>GAMES</Link> }
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>
                    ABOUT
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMobileMenu}>
                    BLOG
                </Link>
              </li>
              <li>
              <Link to="/connect" onClick={closeMobileMenu}>
                  CONNECT
              </Link>
              </li>

            </ul>

            <div className='menu-icon'>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar