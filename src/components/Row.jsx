import React, { useState, useEffect } from "react";
import "../styles/row.css";
import axios from "../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);
  //this make a request when the component loads
  useEffect(() => {
    //fetching the data
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* poster */}
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            className="row__poster"
            src={`${baseUrl}${movie?.poster_path}`}
            alt={movie.original_title || movie.original_name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
