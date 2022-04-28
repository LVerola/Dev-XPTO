import React from 'react';
import {
  FaMapMarked,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaAt,
  FaShare,
} from 'react-icons/fa';

import {
  Container,
  ContactTitleContainer,
  ContactTitle,
  ContactContainer,
  ContactCard,
  ContactCardLine,
  ContactCardLeftField,
  ContactCardRightField,
  AddressInfoContainer,
  TextBold,
  Text,
  LinkURL,
} from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <ContactTitleContainer>
        <ContactTitle>Canais de Contato e redes sociais</ContactTitle>
      </ContactTitleContainer>

      <ContactContainer>
        <ContactCard>
          <ContactCardLine>
            <ContactCardLeftField color="var(--card_gray)">
              <FaMapMarked color="var(--black)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--white)">
              <AddressInfoContainer>
                <TextBold>
                  Quadra 108 Sul Alameda 8, 330 Bairro: Plano Diretor Sul
                </TextBold>

                <Text>
                  Palmas - TO , CEP: 77020-108
                </Text>
              </AddressInfoContainer>
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--facebook)">
              <FaFacebookF color="var(--white)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--card_gray)">
              <LinkURL href="https://www.facebook.com" target="_blank">facebook.com/XPTO</LinkURL>
              <FaShare color="var(--gray)" size={20} />
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--youtube)">
              <FaYoutube color="var(--white)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--white)">
              <LinkURL href="https://www.youtube.com" target="_blank">youtube.com/XPTO</LinkURL>
              <FaShare color="var(--gray)" size={20} />
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--linkedin)">
              <FaLinkedin color="var(--white)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--card_gray)">
              <LinkURL href="https://www.linkedin.com" target="_blank">linkedin.com/XPTO</LinkURL>
              <FaShare color="var(--gray)" size={20} />
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--instagram_1)" isInstagram>
              <FaInstagram color="var(--white)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--white)">
              <LinkURL href="https://www.instagram.com" target="_blank">instagram.com/XPTO</LinkURL>
              <FaShare color="var(--gray)" size={20} />
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--whatsapp)">
              <FaWhatsapp color="var(--white)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--card_gray)">
              <LinkURL href="https://www.whatsapp.com" target="_blank">whatsapp.com/XPTO</LinkURL>
              <FaShare color="var(--gray)" size={20} />
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--phone)">
              <FaPhoneAlt color="var(--black)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--white)">
              <TextBold>+55 (12) 9386-7383</TextBold>
            </ContactCardRightField>
          </ContactCardLine>

          <ContactCardLine>
            <ContactCardLeftField color="var(--email)">
              <FaAt color="var(--gray)" size={35} />
            </ContactCardLeftField>

            <ContactCardRightField color="var(--card_gray)">
              <LinkURL href="mailto:contato@XPTO.com">contato@XPTO.com</LinkURL>
            </ContactCardRightField>
          </ContactCardLine>
        </ContactCard>
      </ContactContainer>
    </Container>
  );
}

export default Contact;