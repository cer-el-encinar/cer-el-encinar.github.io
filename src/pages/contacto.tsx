import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';

import { Contained, Hero, Layout, Social } from '../components';
import { social } from '../data';

const ContactoPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero>
      <Hero.Title>Contacto</Hero.Title>
    </Hero>

    <Contained>
      <Container>
        <Row>
          {social.map(({ url, Icon, label }) => (
            <Col md={4} style={{ marginBottom: '2rem' }} key={url}>
              <Social url={url} Icon={Icon} label={label} />
            </Col>
          ))}
        </Row>
      </Container>
    </Contained>
  </Layout>
);

export default ContactoPage;

export const Head: HeadFC = () => (
  <>
    <html lang="es" />
    <title>CER El Encinar - Contacto</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
