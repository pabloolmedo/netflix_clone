import React, { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  //check if user logged in
  const { isAuthenticated } = useAuth0();
  //shows series or movies
  const [active, setActive] = useState("home");
  //click handler passed as prop
  const changeCategorie = (type) => {
    setActive(type);
  }

  console.log(isAuthenticated);


  return (
    <>
      {/* login page */}
      {!isAuthenticated &&
        <Login />
      }
      {isAuthenticated &&
        <div className="App">



          {/* Navigation bar */}
          <Nav changeClickHandler={changeCategorie} />


          {/* Banner */}
          <Banner />
          {/* Home Rows */}

          {active === "home" && <div>
            <Row title="Trending now" type="movie" />
            <Row title="Bingewhorty TV Shows" type="series" />
            <Row title="Comedies" type="movie" />
            <Row title="Thriller Movies" type="movie" />
            <Row title="Action Thrillers" type="movie" />
            <Row title="Continue watching for Pablo" type="movie" />
            <Row title="Popular on Netflix" type="movie" />
            <Row title="Sci-Fi & Fantasy" type="movie" />
          </div>}
          {/* TV SHOWS ROWS */}
          {active === "series" && <div>
            <Row title="Popular TV Shows" type="series" />
            <Row title="Trending now TV Shows" type="series" />
            <Row title="TV Shows" type="series" />
            <Row title="TV Shows" type="series" />
            <Row title="TV Shows" type="series" />
            <Row title="TV Shows" type="series" />
          </div>}
          {/* MOVIES ROWS */}
          {active === "movie" && <div>
            <Row title="Comedies" type="movie" />
            <Row title="Thriller Movies" type="movie" />
            <Row title="Action Thrillers" type="movie" />
            <Row title="Continue watching for Pablo" type="movie" />
            <Row title="Popular on Netflix" type="movie" />
            <Row title="Sci-Fi & Fantasy" type="movie" />
          </div>}




        </div>
      }


    </>
  );
}

export default App;
