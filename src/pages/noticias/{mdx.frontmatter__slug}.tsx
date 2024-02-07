import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  type IGatsbyImageData,
} from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from '../../components/Layout';
import { News } from '../../declarations';
import { Contained, Hero, Share } from '../../components';

type Data = {
  mdx: News;
};

const NoticiaPage: React.FC<PageProps> = ({ data, children, location }) => {
  const { frontmatter } = (data as Data).mdx;
  const img = getImage(frontmatter.cover) as IGatsbyImageData;
  return (
    <Layout>
      <Hero notMarginTopOnMobile>
        <Hero.Title>{frontmatter.title}</Hero.Title>
      </Hero>
      <GatsbyImage
        image={img}
        alt={frontmatter.title}
        style={{ marginBottom: '4rem' }}
      />
      <Contained>
        <MDXProvider>{children}</MDXProvider>
      </Contained>
      <Share uri={location.href} />
    </Layout>
  );
};

export default NoticiaPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
  <>
    <html lang="es" />
    <title>{(data as Data).mdx.frontmatter.title}</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
