import React, { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import { useAuth0 } from "@auth0/auth0-react";
import requests from './services/requests';
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";

function App() {
  //check if user logged in
  const { isAuthenticated } = useAuth0();

  return (


    <div className="App">
      {isAuthenticated && (
        <>
          <Nav />
          <Banner fetchUrl={requests.fetchTrendingNow} />
        </>
      )}


      {/* ROUTES */}
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" from="/login" />} />

        {isAuthenticated && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
          </>
        )}

      </Routes>











    </div>












  );
}

export default App;
