import * as React from 'react';
import {
  type IGatsbyImageData,
  getImage,
  GatsbyImage,
} from 'gatsby-plugin-image';

import { StyledImage } from './StyledImage';

interface Props {
  image: IGatsbyImageData;
  title: string;
}

export const Image: React.FC<Props> = ({ image, title = '' }) => {
  const img = getImage(image) as IGatsbyImageData;
  return (
    <StyledImage>
      <GatsbyImage image={img} alt={title} />
    </StyledImage>
  );
};
