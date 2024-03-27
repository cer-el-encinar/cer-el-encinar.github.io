import * as React from 'react';
import { CookiesProvider } from 'react-cookie';

import { StyledLayout } from './StyledLayout';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Cookies } from '../Cookies';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <StyledLayout>
      <Header />
      {children}
      <Footer />
      <Cookies />
    </StyledLayout>
  </CookiesProvider>
);
