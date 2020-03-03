import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  //init for the state variables
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  //defining the data fetch function and using OpenWeather API
  const getWeather = async q => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=deb5ffb1b2b09c8998ca8bdfeb8981bc`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //function to handle search queries from the user
  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  //react hook that will make sure the code only runs once the component is mounted
  useEffect(() => {
    getWeather(location);
  }, [location]);

  //if both loading & error are false display the weathercard to the user
  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          {/*input box for search functionality */}
          <form>
            <input
              style={{ color: "blue" }}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button onClick={e => handleSearch(e)}>Search</button>
          </form>
        </div>
      ) : //if loading is true then diplay "Loading" to the user
      loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : //if loading is false && error is true then display "There has been an error" to the user
      !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!<br></br>
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
