import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Contained, Layout } from '../components';

const AyudarPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Contained>
        <h2>Como puedes ayudar</h2>
        <h3>Alguna vez te has planteado alguna de estas cuestiones?</h3>
      </Contained>
    </Layout>
  );
};

export default AyudarPage;

export const Head: HeadFC = () => <title>CER El Encinar - Ayudar</title>;
