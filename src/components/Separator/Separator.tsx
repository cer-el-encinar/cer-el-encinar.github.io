import * as React from 'react';
import { withPrefix } from 'gatsby';

import { StyledSeparator } from './StyledSeparator';

export const Separator: React.FC = () => {
  const imgPath = withPrefix('/paw-print.png');
  return <StyledSeparator $imgPath={imgPath} />;
};
