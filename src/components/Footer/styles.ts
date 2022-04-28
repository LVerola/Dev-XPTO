import styled from 'styled-components';

import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaWhatsapp
} from 'react-icons/fa';

export const Container = styled.footer`
  position: relative;
  clear: both;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark_green);

  height: 200px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 30px;

  background-color: var(--mint_green);
  height: 75%;
  width: 100%;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 15px;
`;

export const Logo = styled.img`
  width: 166px;
  height: 35px;
`;

export const LogoText = styled.p`
  color: var(--white);
  font-size: 10px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 15px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 15px;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 15px;
`;

export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 15px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const YoutubeIcon = styled(FaYoutube)`
  color: var(--white_opacity);
  margin-right: 5px;

  :hover {
    color: var(--white);
    transition: 500ms;
  };
`;

export const InstagramIcon = styled(FaInstagram)`
  color: var(--white_opacity);
  margin-right: 5px;

  :hover {
    color: var(--white);
    transition: 500ms;
  };
`;

export const LinkedinIcon = styled(FaLinkedin)`
  color: var(--white_opacity);
  margin-right: 5px;

  :hover {
    color: var(--white);
    transition: 500ms;
  };
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  color: var(--white_opacity);
  margin-right: 5px;

  :hover {
    color: var(--white);
    transition: 500ms;
  };
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: var(--white_opacity);
  margin-right: 5px;

  :hover {
    color: var(--white);
    transition: 500ms;
  };
`;

export const MenuTitle = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 16px;

  margin-bottom: 20px;
`;

export const MenuOption = styled.button`
  color: var(--white);
  background-color: transparent;
  border: 0px solid;
  margin-bottom: 5px;
`;

export const OwnerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25%;
`;

export const OwnerTextBold = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--white);
  
  margin-right: 5px;
`;

export const OwnerText = styled.p`
  font-size: 12px;
  color: var(--white);
`;
