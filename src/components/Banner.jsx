import React, { useState, useEffect } from "react";
import "../styles/banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  //this make a request when the component loads
  useEffect(() => {
    //fetching the data
    const fetchData = () => {
      const request = fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        //look for a ramdom movie or serie
        .then((data) =>
          setMovie(
            data.entries[Math.floor(Math.random() * data.entries.length - 1)]
          )
        );

      return request;
    };
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${movie?.images?.["Poster Art"].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* image dynamically shown from data.json */}
      <div className="banner__content">
        {/*dynamic movie or serie title  */}
        <h1>{movie?.title}</h1>
        {/* Play and more info buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More info</button>
        </div>
        {/* description */}
        <h2 className="banner__description">{movie?.description}</h2>
      </div>
    </header>
  );
};

export default Banner;
