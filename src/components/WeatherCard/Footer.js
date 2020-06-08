import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer" className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-end" md={0}>
                        Copyright © 2020 Traptech Labs
            </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
