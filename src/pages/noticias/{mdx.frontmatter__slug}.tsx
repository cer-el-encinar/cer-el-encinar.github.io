import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';

import { Layout } from '../../components/Layout';
import { News } from '../../declarations';
import { Contained, Statement } from '../../components';

type Data = {
  mdx: News;
};

const NoticiaPage: React.FC<PageProps> = ({ data }) => {
  const { body, frontmatter } = (data as Data).mdx;
  return (
    <Layout>
      <Contained>
        <Statement>{frontmatter.title}</Statement>
        {body}
      </Contained>
    </Layout>
  );
};

export default NoticiaPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        date
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 80)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => (
  <title>{(data as Data).mdx.frontmatter.title}</title>
);
