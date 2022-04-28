import styled from 'styled-components';

interface DividerProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 30px 30px 30px;

  min-height: 100%;
  min-width: 100%;
`;

export const Content = styled.div`
  padding: 30px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  background-color: var(--white);
  border-radius: 5px;
`;

export const ServicesTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 5px;
`;

export const CapsText = styled.p`
  font-size: 24px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  background-color: var(--very_light_gray);
  border-radius: 5px;
  padding: 30px 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Divider = styled.hr<DividerProps>`
  height: 3px;
  background-color: ${props => props.color};
  border: none;
`;

export const Title = styled.p`
  font-size: 22px;
  color: var(--dark_green);
`;

export const ColumnInfoParagraph = styled.p`
  text-align: left;
  text-indent: 45px;
  color: var(--dark_gray);
  font-weight: bold;
`;
