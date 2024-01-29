import * as React from 'react';

import { StyledContent } from './StyledContent';

interface Props {
  children: React.ReactNode;
}

export const Content: React.FC<Props> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};
