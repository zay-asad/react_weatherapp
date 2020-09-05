import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (condition) {
    case "Clear":
      icon = `Mostly-Sunny-2x.png`;
      break;
    case "Clouds":
      icon = `Mostly-Cloudy-2x.png`;
      break;
    case "Haze":
      icon = `Haze-2x.png`;
      break;
    case "Fog":
      icon = `Fog-2x.png`;
      break;
    case "Tornado":
      icon = `Tornado-2x.png`;
      break;
    case "Dust":
      icon = `Dust-2x.png`;
      break;
    case "Mist":
      icon = `Snow-2x.png`;
      break;
    case "Rain":
      icon = `Rain-2x.png`;
      break;
    case "Drizzle":
      icon = `Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `Severe-Thunderstorm-2x.png`;
      break;
    default:
      icon = `Mostly-Sunny-2x.png`;
  }

  console.log(condition);

  const logo = require('../../assets/images/' + icon);

  return <Icon src={logo} alt="Weather Icon" />;
};

export default Icon;
