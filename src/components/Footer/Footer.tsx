import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Social } from '../Social';

import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterContent,
  StyledFooterImage,
} from './StyledFooter';

export const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterImage>
      <StaticImage
        src="../../images/cat-silhouette.png"
        placeholder="none"
        alt="CER El Encinar"
      />
    </StyledFooterImage>
    <StyledFooterBottom>
      <StyledFooterContent>
        <div style={{ textAlign: 'center', margin: '4rem 0' }}>
          <StaticImage
            src="../../images/ministerio.jpg"
            placeholder="none"
            alt="Ministerio de derechos sociales, consumo y agenda"
          />
        </div>
        <br />
        <Social inFooter />
        <br />
        <p style={{ textAlign: 'center' }}>&copy; CER El Encinar</p>
      </StyledFooterContent>
    </StyledFooterBottom>
  </StyledFooter>
);
