import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-grid-system';

import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterContent,
  StyledFooterImage,
} from './StyledFooter';
import { social } from '../../data';
import { Link } from 'gatsby';

export const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterImage>
      <StaticImage
        src="../../images/cat-silhouette.png"
        placeholder="none"
        alt="CER El Encinar"
      />
    </StyledFooterImage>
    <StyledFooterBottom>
      <StyledFooterContent>
        <div style={{ textAlign: 'center', margin: '4rem 0' }}>
          <a href="https://www.mdsocialesa2030.gob.es/" target="_blank">
            <StaticImage
              src="../../images/ministerio.jpg"
              placeholder="none"
              alt="Ministerio de derechos sociales, consumo y agenda"
            />
          </a>
        </div>
        <br />
        <Container>
          <Row>
            {social.map(({ url, Icon, label }) => (
              <Col
                key={url}
                md={4}
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '.5rem',
                  }}
                >
                  <Icon />
                  {label}
                </a>
              </Col>
            ))}
          </Row>
        </Container>
        <br />
        <p style={{ textAlign: 'center' }}>
          <Link to={'/terminos'}>Términos y condiciones</Link>&nbsp;|&nbsp;
          <Link to={'/privacidad'}>Política de privacidad</Link>
          <br />
          <br />
          &copy; CER El Encinar
        </p>
      </StyledFooterContent>
    </StyledFooterBottom>
  </StyledFooter>
);
