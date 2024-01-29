import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledMoney } from './StyledMoney';

export const Money: React.FC = () => {
  return (
    <StyledMoney>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Taming</h3>
            <a href="https://www.teaming.net/cerelencinar" target="_blank">
              <StaticImage
                src="../../images/latasolidariamini.png"
                placeholder="blurred"
                alt="La lata solidaria"
              />
              <br />
              <br />
              La lata solidaria
            </a>
          </Col>
          <Col md={4}>
            <h3>Bizum solidario</h3>
            <a href="https://bizum.es/donar-ong/" target="_blank">
              <StaticImage
                src="../../images/bizum-logo.png"
                placeholder="blurred"
                alt="Bizum solidario"
              />
              <br />
              <br />
              Con el código 05885
            </a>
          </Col>
          <Col md={4}>
            <h3>Transferencia bancaria</h3>
            <StaticImage
              src="../../images/bank-transfer.png"
              placeholder="blurred"
              alt="Transferencia bancaria"
            />
            <br />
            <br />
            No. cuenta: ...
          </Col>
        </Row>
      </Container>
    </StyledMoney>
  );
};
