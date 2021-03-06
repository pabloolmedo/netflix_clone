import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({ changeClickHandler }) => {
  const { logout } = useAuth0();
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
          onClick={() => {
            changeClickHandler("home");
          }}
        />

        {/* menu */}
        <div className="nav__links">
          <a
            href=""
            className="nav__link"
            onClick={(e) => {
              e.preventDefault();
              changeClickHandler("home");
            }}
          >
            Home
          </a>
          <a
            href=""
            className="nav__link"
            onClick={(e) => {
              e.preventDefault();
              changeClickHandler("series");
            }}
          >
            TV Shows
          </a>
          <a
            href=""
            className="nav__link"
            onClick={(e) => {
              e.preventDefault();
              changeClickHandler("movie");
            }}
          >
            Movies
          </a>
        </div>
      </div>
      <div className="nav__rightContainer">
        {/* searchbar?? */}

        {/* Log out button */}
        <button className="nav__btn--logOut" onClick={() => logout()}>
          Log out
        </button>
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
