import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Contained, Hero, Layout, Social } from '../components';

const ContactoPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero>
      <Hero.Title>Contacto</Hero.Title>
    </Hero>

    <Contained>
      <Social />
    </Contained>
  </Layout>
);

export default ContactoPage;

export const Head: HeadFC = () => <title>CER El Encinar - Contacto</title>;
