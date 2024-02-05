import * as React from 'react';

import { StyledTitle } from './StyledTitle';

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);
