import React from "react";
import "../styles/login.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <header
      className="login"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.4)), url("https://bit.ly/2E3scwW") `,
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
        <button className="login__btn" onClick={() => loginWithRedirect()}>
          Sign in
        </button>
      </div>
      <div className="login__content">
        {/* title */}
        <h1 className="content__title">
          Unlimited Movies, TV <br /> Shows and more.
        </h1>
        {/* subtitle */}
        <h2 className="content__subTitle">
          Watch anywhere. Cancel at any time.
        </h2>
        {/* subtitle */}
        <h4 className="content__subTitle">
          Ready to watch Netflix? Enter your email to create or restart your
          membership.
        </h4>
        <div className="content__form">
          {/* input text */}
          <input
            type="text"
            placeholder="Email address"
            className="form__input"
          />
          {/* dummy button */}
          <button className="form__btn">Get started {">"}</button>
        </div>
      </div>
    </header>
  );
};

export default Login;
