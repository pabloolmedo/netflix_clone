import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const Nav = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);
  //once scroll down the black background of the nav bar is shown
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window?.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav--dark"}`}>
      <div className="nav__leftContainer">
        {/* LOGO */}
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />

        {/* menu */}
        <div className="nav__links">
          <Link to="/home" className="nav__link">
            Home
          </Link>
          <Link to="/tvshows" className="nav__link">
            TV Shows
          </Link>
          <Link to="/movies" className="nav__link">
            Movies
          </Link>
        </div>
      </div>
      <div className="nav__rightContainer">
        {/* searchbar?? */}

        {/* Log out button */}
        <Link to="/" onClick={() => logout()} className="nav__btn--logOut">
          Log out
        </Link>
        {/* user avatar */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user avatar"
          className="nav__avatar"
        />
      </div>
    </nav>
  );
};

export default Nav;
