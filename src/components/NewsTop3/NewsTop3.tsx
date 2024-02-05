import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'gatsby';
import {
  type IGatsbyImageData,
  getImage,
  GatsbyImage,
} from 'gatsby-plugin-image';

import type { News } from '../../declarations';
import { Card } from '../Card';

type Props = {
  news: News[];
};

export const NewsTop3: React.FC<Props> = ({ news }) => (
  <Container fluid>
    <Row gutterWidth={16}>
      {news.map((item) => {
        const img = getImage(item.frontmatter.cover) as IGatsbyImageData;
        return (
          <Col
            md={4}
            key={item.frontmatter.slug}
            style={{ marginBottom: '2rem' }}
          >
            <Link to={`/noticias/${item.frontmatter.slug}/`}>
              <Card>
                <Card.Image cover>
                  <GatsbyImage image={img} alt={item.frontmatter.title} />
                </Card.Image>
                <Card.Title>{item.frontmatter.title}</Card.Title>
                <Card.Content>{item.excerpt}</Card.Content>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  </Container>
);
