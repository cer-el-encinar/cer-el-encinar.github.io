import * as React from 'react';

import { StyledHero } from './StyledHero';
import { Contained } from '../Contained';
import { Title } from './components';

type Props = {
  children: React.ReactNode;
};

const $Hero: React.FC<Props> = ({ children }) => (
  <StyledHero>
    <Contained>{children}</Contained>
  </StyledHero>
);

export const Hero = $Hero as typeof $Hero & {
  Title: typeof Title;
};

Hero.Title = Title;

Hero.displayName = 'Hero';
