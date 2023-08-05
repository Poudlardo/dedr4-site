import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./WhiteNavbar.css";

function WhiteNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function clickHamberger() {
    const Links = document.querySelector("wh-ul");
    const Hamburger = document.querySelector(".wh-hbrgerLogo");
    Links.classList.toggle("wh-mobile-menu");
    Hamburger.style.filter = "none";
  }

  return (
    <nav className="wh-navbar">
      <Link to="/" className="wh-dedra" onClick={closeMobileMenu}>
        <img className="wh-dedra-logo" src="images/unnamed-trnsprntwhite.png" />{" "}
        DEDRA
      </Link>
      <div id="wh-wrapper">
        <ul>
          <li className="wh-different">
            <Link className="wh-nav-link" to="/games" onClick={handleClick}>
              GAMES
            </Link>
          </li>
          <li className="wh-different">
            <Link className="wh-nav-link" to="/about" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="wh-different">
            <Link
              className="wh-nav-link"
              to="/connect"
              onClick={closeMobileMenu}
            >
              CONNECT
            </Link>
          </li>
        </ul>
      </div>

      <svg
        viewBox="0 0 100 80"
        width="40"
        height="30"
        className="wh-hbrgerLogo"
        onClick={clickHamberger}
      >
        <rect width="90" height="10"></rect>
        <rect y="30" width="90" height="10"></rect>
        <rect y="60" width="90" height="10"></rect>
      </svg>
    </nav>
  );
}

export default WhiteNavbar;
