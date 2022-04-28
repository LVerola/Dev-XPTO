import styled, { css } from 'styled-components';

interface ContactCardFieldProps {
  color: string;
  isInstagram?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px 0px 0px;

  background-image: linear-gradient(to right, var(--mint_green), var(--light_green));

  min-height: 100%;
  min-width: 100%;
`;

export const ContactTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-left: solid 5px var(--white);
  height: 60px;
  margin-bottom: 30px;
`;

export const ContactTitle = styled.p`
  color: var(--white);
  margin-left: 35px;
  font-size: 22px;
  font-weight: bold;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 60px 20px;
  background-color: var(--light_gray);
`;

export const ContactCard = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--very_light_gray);

  display: flex;
  flex-direction: column;
`;

export const ContactCardLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ContactCardLeftField = styled.div<ContactCardFieldProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 60px;
  background-color: ${props => props.color};
  ${props => props.isInstagram && css`
  background-image: linear-gradient(to right, var(--instagram_1), var(--instagram_2));
  `};
`;

export const ContactCardRightField = styled.div<ContactCardFieldProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 85%;
  background-color: ${props => props.color};
  height: 60px;
  padding-right: 5%;
  gap: 15px;
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TextBold = styled.p`
  font-weight: bold;
  color: var(--dark_gray);
`

export const Text = styled.p`
  display: flex;
  align-self: flex-end;
  color: var(--dark_gray);
`

export const LinkURL = styled.a`
  font-weight: bold;
  color: var(--dark_gray);
`;
