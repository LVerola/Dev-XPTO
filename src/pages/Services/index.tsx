import React from 'react';

import {
  Container,
  Content,
  ServicesTextContainer,
  CapsText,
  Text,
  ColumnsContainer,
  Column,
  Divider,
  Title,
  ColumnInfoParagraph
} from './styles';

const Services: React.FC = () => {
  return (
    <Container>
      <Content>
        <ServicesTextContainer>
          <CapsText>Serviços da XPTO,</CapsText>
          <Text>o que exatamente fazemos?</Text>
        </ServicesTextContainer>

        <ColumnsContainer>
          <Column>
            <Divider color="var(--dark_green)" />
            <Title>Matriz de rastreabilidade</Title>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
          </Column>

          <Column>
            <Divider color="var(--mint_green)" />
            <Title>Dedução e Aplicação</Title>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
          </Column>

          <Column>
            <Divider color="var(--light_green)" />
            <Title>Implementação da Nossa Plataforma</Title>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
          </Column>

          <Column>
            <Divider color="var(--dark_blue)" />
            <Title>Acessoria extendida</Title>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
            <ColumnInfoParagraph>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean
              scelerisque metus eget sem. Suspendisse
              fermentum. Proin diam augue, semper
              vitae, varius et, viverra id, felis. Nam a
              nunc. Mauris et dolor. Aliquam metus.
              Integer risus velit, facilisis eget, viverra
              et, venenatis id, leo. Nullam libero nunc,
              tristique eget, laoreet eu, sagittis id, ante.
              Donec sit amet enim. Mauris et pede.
              Vestibulum non arcu a ante feugiat
              vestibulum.
            </ColumnInfoParagraph>
          </Column>
        </ColumnsContainer>
      </Content>
    </Container>
  );
}

export default Services;