import * as React from 'react';
import { Link, type HeadFC, type PageProps, graphql } from 'gatsby';
import { FaHandsHelping } from 'react-icons/fa';

import {
  CallToAction,
  Contained,
  Layout,
  Money,
  NewsTop3,
  Separator,
  Statement,
} from '../components';
import type { News } from '../declarations';
import { StaticImage } from 'gatsby-plugin-image';

type Data = {
  allMdx: {
    nodes: News[];
  };
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const news = (data as Data).allMdx.nodes;
  return (
    <Layout>
      <Contained>
        <Statement>
          Somos una asociación que se dedica a la Captura, Esterilización y
          Retorno (CER) de animales en el entorno de la urbanización del Encinar
          del Alberche
          <br />
          <br />
          <Link to="/nosotros/">Cónocenos...</Link>
        </Statement>
      </Contained>
      <Separator />
      <Contained>
        <NewsTop3 news={news} />
      </Contained>
      <Separator />
      <Contained>
        <Money />
        <CallToAction>
          Encuentra estas y otras formas de colaborar
          <br />
          <Link to="/colabora/">
            <FaHandsHelping style={{ verticalAlign: 'bottom' }} /> aquí
          </Link>
        </CallToAction>
      </Contained>
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

export const Head: HeadFC = () => <title>CER El Encinar</title>;
