import * as React from 'react';
import { type HeadFC, type PageProps, graphql } from 'gatsby';

import { Contained, Hero, Layout, NewsTop3 } from '../../components';
import type { News } from '../../declarations';

type Data = {
  allMdx: {
    nodes: News[];
  };
};

const NoticiasPage: React.FC<PageProps> = ({ data }) => {
  const news = (data as Data).allMdx.nodes;
  return (
    <Layout>
      <Hero>
        <Hero.Title>Noticias</Hero.Title>
      </Hero>

      <Contained>
        <NewsTop3 news={news} />
      </Contained>
    </Layout>
  );
};

export default NoticiasPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
    <title>CER El Encinar - Noticias</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
