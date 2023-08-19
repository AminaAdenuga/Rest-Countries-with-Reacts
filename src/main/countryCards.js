import React, { useEffect } from "react";
import "./Mymain.css";
import "./countryCard.css";
import { useState } from "react";
import Dropdown from "./dropdown";
import FormInput from "./form";
import { Link } from "react-router-dom";
function CountryCards() {
  const [countries, setCountries] = useState([]);

  const getMycountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if (!response.ok) throw new Error("Not found in any country!");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getMycountries();
  }, []);

  const searchParam = async (input) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${input}`);
      if (!res.ok) throw new Error("Not found in any country!");
      const data = await res.json();
      setCountries(data);
      console.log(countries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}`
      );
      if (!res.ok) throw new Error("Not found in any country!");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="input-search-dropdown">
        <FormInput sendSearchParam={searchParam} />
        <Dropdown onSelect={getCountryByRegion} />
      </div>

      {countries && (
        <div className="card-container">
          {countries.map((country) => (
            <div key={country.cca2} className="card">
              <Link to={`/country/${country.name.common}`}>
                <div>
                  <img className="image" alt="flag" src={country.flags.png} />
                </div>
                <div className="card-text">
                  <h2>{country.name.common}</h2>
                  <div className="flexit">
                    <p>Population:</p>
                    <span>{country.population}</span>
                  </div>
                  <div className="flexit">
                    <p>Region:</p>
                    <span>{country.region}</span>
                  </div>
                  <div className="flexit">
                    <p>{country.region}:</p>
                    <span>{country.capital}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default CountryCards;
