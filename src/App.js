import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Navbar } from "react-bootstrap";
import Help from "./components/WeatherCard/Help";
import Footer from "./components/WeatherCard/Footer";

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
          <div className="footer">
            <Footer />
          </div>
        </Container>

      </div>
    </div >
  );
}

export default App;
