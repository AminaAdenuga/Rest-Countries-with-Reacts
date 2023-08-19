import "./details.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Detailspage() {
  const [countri, setCountry] = useState([]);

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryName = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        if (!response.ok) throw new Error("Not found in any country!");
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCountryName();
  }, [countryName]);

  return (
    <div>
      <div>
        <Link to="/">
          <button>
            <span class="material-symbols-outlined">keyboard_backspace</span>
            Back
          </button>
        </Link>
        {countri?.map((country, index) => (
          <div className="detailsMain">
            <div>
              <img className="imag" alt="flag" src={country.flags.png} />
            </div>
            <div>
              <h2>{country.name.common}</h2>
              <div className="smallerFlex">
                <div>
                  <p>Native Name: {country.name.nativeName[0]}</p>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Sub Region: {country.subregion}</p>
                  <p>Capital: {country.capital[0]}</p>
                </div>
                <div>
                  <p>Top Level Domain: {country.tld}</p>
                  <p>Currencies: {}</p>
                  <p>Languages: {}</p>
                </div>
              </div>
              <div>
                <p>Border Countries: </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Detailspage;
