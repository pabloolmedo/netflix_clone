import React, { useState, useEffect } from "react";

const Row = ({ title, type }) => {
  const [movies, setMovies] = useState([]);
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
        .then((data) => setMovies(data.entries));

      return request;
    };
    fetchData();
  }, []);

  console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* poster */}
      <div className="row__posters">
        {movies
          .filter((movie) => movie.programType === type)
          .map((movie, index) => (
            <img
              key={index}
              className="row__poster"
              src={movie.images["Poster Art"].url}
              alt={movie.title}
            ></img>
          ))}
      </div>
    </div>
  );
};

export default Row;
