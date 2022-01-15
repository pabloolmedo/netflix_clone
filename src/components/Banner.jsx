import React, { useState, useEffect } from "react";
import "../styles/banner.css";
import axios from "../axios";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  //this make a request when the component loads
  useEffect(() => {
    //fetching the data
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function truncate(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.4)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* image dynamically shown from data.json */}
      <div className="banner__content">
        {/*dynamic movie or serie title  */}
        <h1>
          {movie?.title ||
            movie?.name ||
            movie?.original_title ||
            movie?.original_name}
        </h1>
        {/* Play and more info buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More info</button>
        </div>
        {/* description */}
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
    </header>
  );
};

export default Banner;
