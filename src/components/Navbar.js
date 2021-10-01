import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            UC-KEN💻
            <i class="fab fa-globe" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://docs.google.com/document/d/1tFC2V2ggAA_M-tZF2j1iqOChLG5WUzVa/edit?usp=sharing&ouid=113578293674155073172&rtpof=true&sd=true"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/Projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
