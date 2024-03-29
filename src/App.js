import React from "react";

import "./App.css";
import styled from "styled-components";
import WeatherEngine from "./components/WeatherEngine";
import { Navbar } from "react-bootstrap";
import Help from "./components/WeatherCard/Help";
import Footer from "./components/WeatherCard/Footer";
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

export const Title = styled.h1`      
    color: darkcyan;  
    display: flex;
    justify-content: center;
    font-size: 1.9rem;
    margin-top: 2px;
`;

export const FormBox = styled.form`
    padding-top: 0.25rem;
`;

function App() {
  return (
    <section className="App">
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand className="ttl-nav">Traptech Labs</Navbar.Brand>
      </Navbar>
      <br></br>
      <Grid>
        <Title>
          Cool React Weather App
         <span role="img" aria-label="umbrella">☂️</span>
        </Title>
        <Row center="xs">
          <Col center="xs">
            <FormBox>
              <WeatherEngine location="sydney, au" />
            </FormBox>
          </Col>
          <br></br>
        </Row>
      </Grid>

      <Row center="xs">
        <Help />
      </Row>
      <Footer />
    </section >
  );
}

export default App;
