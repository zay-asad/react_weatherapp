import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="Background">
      <div className="App">
        <WeatherEngine location="sydney, au" />
        <WeatherEngine location="london, gb" />
        <WeatherEngine location="milan, it" />
      </div>
    </div>
  );
}

export default App;
