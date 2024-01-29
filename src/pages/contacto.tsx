import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Contained, Layout, Social, Statement } from '../components';

const AyudarPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Contained>
        <Statement>Contacto</Statement>
        <Social />
      </Contained>
    </Layout>
  );
};

export default AyudarPage;

export const Head: HeadFC = () => <title>CER El Encinar - Contacto</title>;
