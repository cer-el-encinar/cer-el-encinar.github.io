import * as React from 'react';
import { Link, type HeadFC, type PageProps, graphql } from 'gatsby';
import { FaHandsHelping } from 'react-icons/fa';

import {
  CallToAction,
  Contained,
  Layout,
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
      <Separator />
      <Contained>
        <Statement>
          Somos una asociación que se dedica a la Captura, Esterilización y
          Retorno (CER) de animales en el entorno de la urbanización del Encinar
          del Alberche
        </Statement>
        <NewsTop3 news={news} />
        <CallToAction>
          <a href="https://www.teaming.net/cerelencinar" target="_blank">
            <StaticImage
              src="../images/latasolidariamini.png"
              placeholder="blurred"
              alt="La lata solidaria"
            />
          </a>
          <br />
          <br />
          Puedes donar a través de{' '}
          <a href="https://www.teaming.net/cerelencinar" target="_blank">
            Teaming
          </a>
          , Bizum solidario con el código 05885 o Transferencia bancaria
          <br />
          <br />
          Encuentra estas y muchas otras formas de ayudar
          <br />
          <Link to="/ayudar/">
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
