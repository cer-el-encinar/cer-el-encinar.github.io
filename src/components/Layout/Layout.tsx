import * as React from 'react';

import { StyledLayout } from './StyledLayout';
import { Header } from '../Header';

import { Footer } from '../Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <StyledLayout>
    <Header />
    {children}
    <Footer />
  </StyledLayout>
);
