import * as React from 'react';
import { Link, type HeadFC, type PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-grid-system';

import { CallToAction, Donations, Hero, Layout, NewsTop3 } from '../components';
import type { News } from '../declarations';

type Data = {
  allMdx: {
    nodes: News[];
  };
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const news = (data as Data).allMdx.nodes;
  return (
    <Layout>
      <Hero notMarginTopOnMobile>
        <Container>
          <Row nogutter>
            <Col sm={6} style={{ alignSelf: 'center', marginBottom: '4rem' }}>
              <p>
                Somos una asociación que se dedica a la Captura, Esterilización
                y Retorno (CER) de animales en el entorno de la urbanización del
                Encinar del Alberche
              </p>
              <Link
                style={{ fontFamily: '"Kalam", sans-serif' }}
                to="/nosotros/"
              >
                Cónocenos...
              </Link>
            </Col>
            <Col sm={6} style={{ textAlign: 'center' }}>
              <StaticImage
                src="../images/cat01.png"
                placeholder="none"
                alt="CER"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
      <Hero>
        <Hero.Title>Colabora con nosotros</Hero.Title>
        <Donations />
        <CallToAction>
          <Link to="/colabora/">Más formas de colaborar aquí...</Link>
        </CallToAction>
      </Hero>
      <Hero>
        <Hero.Title>Últimas noticias</Hero.Title>
        <NewsTop3 news={news} />
      </Hero>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 80)
            }
          }
          date
          title
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <html lang="es" />
    <title>CER El Encinar</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
