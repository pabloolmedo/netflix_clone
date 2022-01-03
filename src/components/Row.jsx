import React, { useState, useEffect } from "react";

const Row = () => {
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
  }, []);
  return (
    <div className="row">
      {/* title */}

      {/* poster */}
    </div>
  );
};

export default Row;
