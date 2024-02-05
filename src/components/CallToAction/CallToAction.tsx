import * as React from 'react';

import { StyledCallToAction } from './StyledCallToAction';

type Props = {
  children: React.ReactNode;
};

export const CallToAction: React.FC<Props> = ({ children }) => (
  <StyledCallToAction>{children}</StyledCallToAction>
);
