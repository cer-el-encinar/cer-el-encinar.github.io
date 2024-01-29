import * as React from 'react';
import { type HeadFC, type PageProps, graphql } from 'gatsby';

import { Contained, Layout, NewsTop3, Statement } from '../../components';
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
      <Contained>
        <Statement>Noticias</Statement>
        <NewsTop3 news={news} />
      </Contained>
    </Layout>
  );
};

export default NoticiasPage;

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

export const Head: HeadFC = () => <title>Noticias del CER El Encinar</title>;
