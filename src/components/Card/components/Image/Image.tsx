import * as React from 'react';

import { StyledImage } from './StyledImage';

interface Props {
  children: React.ReactNode;
  padding?: string;
  cover?: boolean;
}

export const Image: React.FC<Props> = ({
  children,
  padding,
  cover = false,
}) => (
  <StyledImage style={{ padding }} cover={cover}>
    {children}
  </StyledImage>
);
