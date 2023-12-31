import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isWhite = false, hasShadow = false, unStick = false }) {
  const [click, setClick] = useState(false);
  const [whiteTheme, setWhiteTheme] = useState(isWhite);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function clickHamberger() {
    setClick(!click);
  }

  if (localStorage.getItem("theme") === "inverted") {
    document.body.classList.add("inverted");
  } else {
    document.body.classList.remove("inverted");
  }

  function toggleTheme() {
    if (whiteTheme) {
      document.body.classList.add("inverted");
      localStorage.setItem("theme", "inverted");
    } else {
      document.body.classList.remove("inverted");
      localStorage.setItem("theme", "normal");
    }
    setWhiteTheme(!whiteTheme);
  }

  return (
    <nav
      className={`
      ${
        unStick 
        ? "nosticky-navbar"
        : "navbar"
      } 
      ${
        hasShadow
          ? "navbar-shadow " + (isWhite ? "navbar-shadow-white" : "")
          : ""
      }`}
    >
      <Link
        to="/"
        className={`dedra ${isWhite ? "whiteDedra" : ""}`}
        onClick={closeMobileMenu}
      >DEDRA
      <img
          className={`dedra-logo${isWhite ? "-white" : ""}`}
          src={
            isWhite
              ? "images/unnamed-trnsprntwhite.png"
              : "images/unnamed-trnsprnt.png"
          }
        />{" "}GAMES
        </Link>
      <div id="wrapper" className={`${isWhite ? "whiteNavBarWrapper" : ""}`}>
        <ul className={click ? "menu" : "menu menu-closed"}>
          <li className={`different ${isWhite ? "whiteNavBarDifferent" : ""}`}>
            <Link
              className="nav-link"
              to="/consulting"
              onClick={closeMobileMenu}
            >
              CONSULTING
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
