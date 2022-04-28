import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo_xpto_color.png';

import {
  Container,
  LogoContainer,
  Logo,
  MenuContainer,
  LinkButton,
  GettingStartedContainer,
  HeaderButtonOverText,
  HeaderButton,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <LogoContainer>
          <Logo src={LogoImg} alt="logoxpto" />
        </LogoContainer>
      </Link>

      <MenuContainer>
        <Link to="/services">
          <LinkButton ButtonPathname="/services">Serviços</LinkButton>
        </Link>

        <Link to="/budgets">
          <LinkButton ButtonPathname="/budgets">Orçamentos</LinkButton>
        </Link>

        <Link to="/contact">
          <LinkButton ButtonPathname="/contact" >Contato</LinkButton>
        </Link>

        <Link to="/login">
          <LinkButton ButtonPathname="/login">Login</LinkButton>
        </Link>

        <GettingStartedContainer>
          <HeaderButtonOverText>
            Comece por aqui
          </HeaderButtonOverText>
          <HeaderButton>
            Getting Started
          </HeaderButton>
        </GettingStartedContainer>
      </MenuContainer>
    </Container >
  );
}

export default Header;