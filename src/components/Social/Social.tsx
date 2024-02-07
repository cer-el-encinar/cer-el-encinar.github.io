import * as React from 'react';

import { StyledSocial } from './StyledSocial';

type Props = {
  url: string;
  Icon: React.JSX.ElementType;
  label: string;
};

export const Social: React.FC<Props> = ({ url, Icon, label }) => (
  <StyledSocial href={url} target="_blank">
    <Icon size={64} />
    {label}
  </StyledSocial>
);
