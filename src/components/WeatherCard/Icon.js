import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (condition) {
    case "Clear":
      icon = `./img/Mostly Sunny-2x.png`;
      break;
    case "Clouds":
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2x.png`;
      break;
    case "Dust":
      icon = `./img/Dust-2x.png`;
      break;
    case "Mist":
      icon = `./img/Snow-2x.png`;
      break;
    case "Rain":
      icon = `./img/Rain-2x.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/Severe Thunderstorm-2x.png`;
      break;
    default:
      icon = "No image found";
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
