import * as React from 'react';

import { StyledTitle } from './StyledTitle';

interface Props {
  children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
