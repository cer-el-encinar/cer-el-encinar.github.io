import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledDonations } from './StyledDonations';
import { Card } from '../Card';

export const Donations: React.FC = () => (
  <StyledDonations>
    <Container>
      <Row>
        <Col md={4} style={{ marginBottom: '2rem' }}>
          <a href="https://www.teaming.net/cerelencinar" target="_blank">
            <Card>
              <Card.Image padding="2rem">
                <StaticImage
                  src="../../images/latasolidariamini.png"
                  placeholder="none"
                  alt="La lata solidaria"
                />
              </Card.Image>
              <Card.Title>Teaming</Card.Title>
              <Card.Content>La lata solidaria</Card.Content>
            </Card>
          </a>
        </Col>
        <Col md={4} style={{ marginBottom: '2rem' }}>
          <a href="https://bizum.es/donar-ong/" target="_blank">
            <Card>
              <Card.Image padding="2rem">
                <StaticImage
                  src="../../images/bizum-logo.png"
                  placeholder="none"
                  alt="Bizum solidario"
                />
              </Card.Image>
              <Card.Title>Bizum solidario</Card.Title>
              <Card.Content>Con el código 05885</Card.Content>
            </Card>
          </a>
        </Col>
        <Col md={4} style={{ marginBottom: '2rem' }}>
          <Card>
            <Card.Image padding="2rem">
              <StaticImage
                src="../../images/bank-transfer.png"
                placeholder="none"
                alt="Transferencia bancaria"
              />
            </Card.Image>
            <Card.Title>Transferencia bancaria</Card.Title>
            <Card.Content>No. cuenta: ...</Card.Content>
          </Card>
        </Col>
      </Row>
    </Container>
  </StyledDonations>
);
