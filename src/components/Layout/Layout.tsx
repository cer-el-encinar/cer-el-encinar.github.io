import * as React from 'react';

import { StyledLayout } from './StyledLayout';
import { Header } from '../Header';

import '../../styles/style.scss';
import { Footer } from '../Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};
