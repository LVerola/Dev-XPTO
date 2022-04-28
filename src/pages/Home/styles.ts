import styled from 'styled-components';

import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaWhatsapp
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 100%;
  min-width: 100%;
`;

export const ContainerLeft = styled.div`
  padding: 120px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 25px;

  background-color: transparent;
`;

export const PresentationText = styled.p`
  color: var(--black);
  font-size: 28px;
`;

export const PresentationDescription = styled.p`
  color: var(--dark_green);
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const YoutubeIcon = styled(FaYoutube)`
  color: var(--dark_green);
  margin-right: 15px;

  :hover {
    color: var(--mint_green);
    transition: 500ms;
  };
`;

export const InstagramIcon = styled(FaInstagram)`
  color: var(--dark_green);
  margin-right: 15px;

  :hover {
    color: var(--mint_green);
    transition: 500ms;
  };
`;

export const LinkedinIcon = styled(FaLinkedin)`
  color: var(--dark_green);
  margin-right: 15px;

  :hover {
    color: var(--mint_green);
    transition: 500ms;
  };
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  color: var(--dark_green);
  margin-right: 15px;

  :hover {
    color: var(--mint_green);
    transition: 500ms;
  };
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: var(--dark_green);
  margin-right: 15px;

  :hover {
    color: var(--mint_green);
    transition: 500ms;
  };
`;

export const ContainerRight = styled.div`
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  width: 40%;

  background-color: var(--light_mint_green);
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const LineOneContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Text = styled.h1`
  color: var(--black);
`;

export const CapsText = styled.h1`
  color: var(--dark_green);
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: var(--white);
  border: none;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 20px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;
  gap: 10px;

  background-color: var(--white);
  border-radius: 5px;
`;

export const CardText = styled.p`
  color: var(--black);
  font-size: 14px;
  font-weight: bold;
`;

export const PointsList = styled.ul`
  display:flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 15px;
`;

export const PointsListItem = styled.li`
  margin-left: 20px;
  font-weight: bold;
  font-size: 14px;
  color: var(--dark_green);
`;

export const CompanyText = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: var(--black);
`;

export const CompanyLogos = styled.img`
  margin: 20px 0px;
`;

export const ContainerHelp = styled.div`
  background-color: var(--verylight_mint_green);
  border-radius: 5px;
  padding: 20px;
`;

export const HelpText = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: var(--black);
`;
