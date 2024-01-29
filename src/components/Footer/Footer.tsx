import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Social } from '../Social';

import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterContent,
  StyledFooterImage,
} from './StyledFooter';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterImage>
        <StaticImage
          src="../../images/cat-silhouette.png"
          placeholder="blurred"
          alt="CER El Encinar"
        />
      </StyledFooterImage>
      <StyledFooterBottom>
        <StyledFooterContent>
          <Social inFooter />
          <br />
          <p style={{ textAlign: 'center' }}>&copy; CER El Encinar</p>
        </StyledFooterContent>
      </StyledFooterBottom>
    </StyledFooter>
  );
};
