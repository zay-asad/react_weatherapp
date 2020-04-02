import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import { Navbar } from "react-bootstrap";
import Help from "./components/WeatherCard/Help";
import Spinner from 'react-bootstrap/Spinner';


function App() {
  return (
    <div className="Background">
      <div className="App">
        <Container fluid>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Traptech Labs</Navbar.Brand>
          </Navbar>
          <Row className="justify-content-md-center">
            <WeatherEngine location="sydney, au" />
          </Row>
          <Row className="justify-content-md-center">
            <WeatherEngine location="sydney, au" />
          </Row>

          <Row>
            <Help />

          </Row>
        </Container>
      </div>
    </div >
  );
}

export default App;
