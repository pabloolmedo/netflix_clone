import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__leftContainer">
        {/* LOGO */}
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />

        {/* menu */}
        <div className="nav__links">
          <a href="" className="nav__link">
            Home
          </a>
          <a href="" className="nav__link">
            TV Shows
          </a>
          <a href="" className="nav__link">
            Movies
          </a>
        </div>
      </div>
      <div className="nav__rightContainer">
        {/* Log out button */}
        <button className="nav__btn--logOut">Log out</button>
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
