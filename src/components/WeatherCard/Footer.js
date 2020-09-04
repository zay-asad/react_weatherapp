import React from "react";

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from "styled-components";


export const FooterStyled = styled.div`      
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 2.5rem;
  color: black;
`;

function Footer() {
    return (
        <FooterStyled>
            <Grid>
                <Row middle="md">

                    <Col xs={12}>
                        <br />
                 Copyright © 2020 Traptech Labs
          </Col>
                </Row>
            </Grid>
        </FooterStyled>
    );
}

export default Footer;
