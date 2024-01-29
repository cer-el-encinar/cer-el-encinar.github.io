import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
        <StyledFooterContent>&copy; CER El Encinar</StyledFooterContent>
      </StyledFooterBottom>
    </StyledFooter>
  );
};
