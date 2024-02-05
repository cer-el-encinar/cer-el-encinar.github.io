import * as React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Col, Container, Row } from 'react-grid-system';

import { StyledSocial } from './StyledSocial';

type Props = {
  inFooter?: boolean;
};

export const Social: React.FC<Props> = ({ inFooter = false }) => (
  <StyledSocial $inFooter={inFooter}>
    <IconContext.Provider
      value={{
        size: inFooter ? '1rem' : '64px',
        style: {
          verticalAlign: 'bottom',
        },
      }}
    >
      <Container>
        <Row>
          <Col md={4} style={{ marginBottom: '2rem' }}>
            <a href="https://instagram.com/cerelencinar" target="_blank">
              <FaInstagram />
              cerelencinar
            </a>
          </Col>
          <Col md={4} style={{ marginBottom: '2rem' }}>
            <a href="https://facebook.com/CERELENCINAR" target="_blank">
              <FaFacebook />
              CERELENCINAR
            </a>
          </Col>
          <Col md={4} style={{ marginBottom: '2rem' }}>
            <a href="emailto:cerelencinar@gmail.com">
              <FaEnvelope />
              cerelencinar@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </IconContext.Provider>
  </StyledSocial>
);
