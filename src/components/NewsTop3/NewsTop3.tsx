import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'gatsby';

import type { News } from '../../declarations';
import { Card } from '../Card';

type Props = {
  news: News[];
};

export const NewsTop3: React.FC<Props> = ({ news }) => {
  return (
    <Container fluid>
      <Row gutterWidth={16}>
        {news.map((item) => (
          <Col md={4} key={item.frontmatter.slug}>
            <Link to={`/noticias/${item.frontmatter.slug}/`}>
              <Card>
                <Card.Image
                  image={item.frontmatter.cover}
                  title={item.frontmatter.title}
                />
                <Card.Title>{item.frontmatter.title}</Card.Title>
                <Card.Content>{item.excerpt}</Card.Content>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
