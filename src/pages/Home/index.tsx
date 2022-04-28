import React from 'react';
import { FaCheck } from 'react-icons/fa';
import YouTube, { YouTubeProps } from 'react-youtube';

import Logos from '../../assets/empresas_ribbon.png';

import {
  Container,
  ContainerLeft,
  PresentationText,
  PresentationDescription,
  IconsContainer,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  ContainerRight,
  ParagraphContainer,
  LineOneContainer,
  Text,
  CapsText,
  Divider,
  CardsContainer,
  Card,
  CardText,
  PointsList,
  PointsListItem,
  CompanyText,
  CompanyLogos,
  ContainerHelp,
  HelpText,
} from './styles';

const Home: React.FC = () => {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '350',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Container>
      <ContainerLeft>
        <YouTube videoId="rdINp5rZgxU" opts={opts} onReady={onPlayerReady} />

        <PresentationText>Apresentação da empresa</PresentationText>

        <PresentationDescription>
          Fique por dento de tudo em nossas redes sociais:
        </PresentationDescription>

        <IconsContainer>
          <YoutubeIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <FacebookIcon />
          <WhatsappIcon />
        </IconsContainer>
      </ContainerLeft>

      <ContainerRight>
        <ParagraphContainer>
          <LineOneContainer>
            <Text>
              A
            </Text>
            <CapsText>
              {`CONSULTORIA`}
            </CapsText>
            <Text>que</Text>
          </LineOneContainer>
          <Text>
            Você mais precisa
          </Text>
        </ParagraphContainer>

        <Divider />

        <CardsContainer>
          <Card>
            <FaCheck color="var(--dark_green)" />
            <CardText>Análise de processos</CardText>
          </Card>

          <Card>
            <FaCheck color="var(--dark_green)" />
            <CardText>Dedução e solução ágil</CardText>
          </Card>

          <Card>
            <FaCheck color="var(--dark_green)" />
            <CardText>Aplicabilidade geral</CardText>
          </Card>
        </CardsContainer>

        <Divider />

        <PointsList>
          <PointsListItem>
            Atuação em Todo o Vale do Paraíba
          </PointsListItem>
          <PointsListItem>
            +20 Anos de atendimento Full Time
          </PointsListItem>
        </PointsList>

        <CompanyText>
          Mais de 10 empresas na região estão com nossa acessoria ativa
        </CompanyText>

        <CompanyLogos src={Logos} alt="company logos" />

        <ContainerHelp>
          <HelpText>
            Para qualquer dúvidas a respeito do contrato, acesse nossa página de orçamentos para sanar todas eventuais questões.
          </HelpText>
        </ContainerHelp>
      </ContainerRight>
    </Container >
  );
}

export default Home;