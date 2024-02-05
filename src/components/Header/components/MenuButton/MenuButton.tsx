import * as React from 'react';

import {
  StyledMenuButton,
  StyledMenuButtonContainer,
} from './StyledMenuButton';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const MenuButton: React.FC<Props> = ({ isOpen, toggle }) => (
  <StyledMenuButtonContainer onClick={toggle}>
    <StyledMenuButton isOpen={isOpen} />
  </StyledMenuButtonContainer>
);
