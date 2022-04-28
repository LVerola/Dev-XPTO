import React from 'react';

import { Container, Main } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  );
}

export default Layout;