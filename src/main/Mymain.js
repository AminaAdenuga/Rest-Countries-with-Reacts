import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Mymain.css";
import CountryCards from "./countryCards";
import Detailspage from "./details";
// import { useState } from "react";



function Main() {
  // const [countries, setCountries] = useState([]);

  return (
    <div className="main-div">
      <main>
        <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<CountryCards />} />

              <Route
                path="/country/:countryName"
                element={<Detailspage  />}
              />
            </Routes>
          </div>
        </Router>
      </main>
    </div>
  );
}
export default Main;
