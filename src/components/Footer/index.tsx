import React from 'react'

import LogoImg from '../../assets/logo_xpto_branco.png'

import {
  Container,
  FooterContent,
  LogoContainer,
  Logo,
  LogoText,
  CompanyContainer,
  ProductsContainer,
  ServicesContainer,
  FollowContainer,
  IconsContainer,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  MenuTitle,
  MenuOption,
  OwnerContainer,
  OwnerTextBold,
  OwnerText,
} from './styles';

export default function index() {
  return (
    <Container>
      <FooterContent>
        <LogoContainer>
          <Logo src={LogoImg} alt="logo_white" />
          <LogoText>Copyright @ XPTO company 2022</LogoText>
        </LogoContainer>

        <CompanyContainer>
          <MenuTitle>Empresa</MenuTitle>

          <MenuOption>Carreira</MenuOption>
          <MenuOption>Notícias</MenuOption>
          <MenuOption>Sustentabilidade</MenuOption>
        </CompanyContainer>

        <ProductsContainer>
          <MenuTitle>Produtos</MenuTitle>

          <MenuOption>Plataforma de Análise</MenuOption>
          <MenuOption>Plataforma Integradora</MenuOption>
        </ProductsContainer>

        <ServicesContainer>
          <MenuTitle>Serviços</MenuTitle>

          <MenuOption>Matriz de rastreabilidade</MenuOption>
          <MenuOption>Dedução e Aplicação</MenuOption>
          <MenuOption>Acessoria extendida</MenuOption>
        </ServicesContainer>

        <FollowContainer>
          <MenuTitle>Siga-nos</MenuTitle>

          <IconsContainer>
            <YoutubeIcon />
            <InstagramIcon />
            <LinkedinIcon />
            <FacebookIcon />
            <WhatsappIcon />
          </IconsContainer>
        </FollowContainer>
      </FooterContent>
      <OwnerContainer>
        <OwnerTextBold>Desenvolvido por:</OwnerTextBold>
        <OwnerText>Luis Gabriel Verola Santos</OwnerText>
      </OwnerContainer>
    </Container>
  )
}
