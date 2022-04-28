import styled, { css } from 'styled-components';

interface LinkButtonProps {
  ButtonPathname: string;
}

export const Container = styled.header`
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  box-shadow: 0px 1px 10px var(--black);

  background-color: var(--white);

  height: 90px;
`;

export const LogoContainer = styled.div`

`;

export const Logo = styled.img`
  width: 166px;
  height: 35px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkButton = styled.button<LinkButtonProps>`
  height: 40px;
  width: 100px;

  margin: 0 10px;

  background-color: transparent;
  border: 0px solid;

  font-size: 16px;
  font-weight: bold;
  color: var(--black);

  ${props =>
    props.ButtonPathname === window.location.pathname &&
    css`
      color: var(--mint_green);
    `}

  :hover {
    color: var(--mint_green);

    transition: 500ms;
  }
`;

export const GettingStartedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderButtonOverText = styled.p`
  font-size: 12px;
  margin-bottom: 3px;

  color: var(--gray);
  font-weight: bold;
`;

export const HeaderButton = styled.button`
  height: 30px;
  width: 150px;

  margin-bottom: 15px;

  box-shadow: 0px 1px 10px var(--black);

  color: var(--black);
  font-weight: bold;

  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  background-image: linear-gradient(to right, var(--light_green), var(--mint_green));
  border: 0px solid;
`;
