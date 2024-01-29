import * as React from 'react';

import { StyledCard } from './StyledCard';

import { Title, Content, Image } from './components';

interface Props {
  children: React.ReactNode;
}

export const $Card: React.FC<Props> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export const Card = $Card as typeof $Card & {
  Title: typeof Title;
  Content: typeof Content;
  Image: typeof Image;
};

Card.Title = Title;
Card.Content = Content;
Card.Image = Image;

Card.displayName = 'Card';
