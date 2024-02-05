import * as React from 'react';

import { StyledContained } from './StyledContained';

type Props = {
  children: React.ReactNode;
};

export const Contained: React.FC<Props> = ({ children }) => (
  <StyledContained>{children}</StyledContained>
);
