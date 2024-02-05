import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { Hero, Layout } from '../components';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero>
      <Hero.Title>Error 404 - Página no encontrada!</Hero.Title>
      <center>
        <Link to="/">Ir al inicio</Link>
      </center>
    </Hero>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <title>CER El Encinar - Página no encontrada</title>
);
