import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "../Condition";

const WeatherCard = ({
  temp,
  condition,
  humidity,
  windspeed,
  city,
  country
}) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (temp > 12) {
    //this is for hot weather (12*C ---> 40*C)
    highColor = (1 - (temp - 2) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    //this is for cold weather (-20*C ---> 12*C)
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition
        temp={temp}
        condition={condition}
        humidity={humidity}
        windspeed={windspeed}
      />
    </Card>
  );
};

export default WeatherCard;
