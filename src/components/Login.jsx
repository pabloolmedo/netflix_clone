import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <header
      className="login"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.295), rgba(5, 5, 5, 0.295)), url("https://bit.ly/2E3scwW") `,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* background image */}

      <div className="login__nav">
        {/* logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
          className="login__logo"
        />
        {/* button log in */}
        <button className="login__btn">Sign in</button>
      </div>
      <div className="login__content">
        {/* title */}
        {/* subtitle */}
        {/* subtitle */}
        {/* input text */}
        {/* dummy button */}
      </div>
    </header>
  );
};

export default Login;
