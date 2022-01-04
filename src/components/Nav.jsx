import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__leftContainer">
        {/* LOGO */}
        <img className="nav__logo" src="" alt="netflix logo" />

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
        {/* user avatar */}
        <img src="" alt="user avatar" className="nav__avatar" />
        {/* Log out button */}
        <button className="nav__btn--logOut">Log out</button>
      </div>
    </nav>
  );
};

export default Nav;
