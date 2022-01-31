import React from "react";
import Row from "../components/Row";
import requests from "../services/requests";

const Home = () => {
  return (
    <>
      <Row title="Trending now" fetchUrl={requests.fetchTrendingNow} />
      <Row
        title="Bingewhorty TV Shows"
        fetchUrl={requests.fetchPopularTvShows}
      />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Now playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default Home;
