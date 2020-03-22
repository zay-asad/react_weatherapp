import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition, humidity }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  const Humidity = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    font-weight: 100;
  `;

  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>{temp} °C</Temp>
      <Humidity>Humidity {humidity}%</Humidity>
      <State>{condition}</State>
    </>
  );
};
export default Condition;
