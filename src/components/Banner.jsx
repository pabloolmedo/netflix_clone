import React, { useState, useEffect } from "react";

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
    <header className="banner">
      {/* image dynamically shown from data.json */}
      {/*dynamic movie or serie title  */}
      {/* Play and more info buttons */}
      {/* description */}
    </header>
  );
};

export default Banner;
