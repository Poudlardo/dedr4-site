import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isWhite = false }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  function clickHamberger() {
    setClick(!click);
  }

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`dedra ${isWhite ? "whiteDedra" : ""}`}
        onClick={closeMobileMenu}
      >
        <img
          className={`dedra-logo${isWhite ? "-white" : ""}`}
          src={
            isWhite
              ? "images/unnamed-trnsprntwhite.png"
              : "images/unnamed-trnsprnt.png"
          }
        />{" "}
        DEDRA
      </Link>
      <div id="wrapper" className={`${isWhite ? "whiteNavBarWrapper" : ""}`}>
        <ul className={click ? "menu" : "menu menu-closed"}>
          <li className={`different ${isWhite ? "whiteNavBarDifferent" : ""}`}>
            <Link className="nav-link" to="/games" onClick={handleClick}>
              GAMES
            </Link>
          </li>
          <li className={`different ${isWhite ? "whiteNavBarDifferent" : ""}`}>
            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className={`different ${isWhite ? "whiteNavBarDifferent" : ""}`}>
            <Link className="nav-link" to="/connect" onClick={closeMobileMenu}>
              CONNECT
            </Link>
          </li>
        </ul>
      </div>

      <svg
        viewBox="0 0 100 80"
        width="40"
        height="30"
        fill={isWhite && !click ? "white" : "black"}
        className="hbrgerLogo"
        onClick={clickHamberger}
      >
        <rect width="90" height="10"></rect>
        <rect y="30" width="90" height="10"></rect>
        <rect y="60" width="90" height="10"></rect>
      </svg>
    </nav>
  );
}

export default Navbar;
