import * as React from 'react';

import { StyledStatement } from './StyledStatement';

type Props = {
  children: React.ReactNode;
};

export const Statement: React.FC<Props> = ({ children }) => (
  <StyledStatement>{children}</StyledStatement>
);
