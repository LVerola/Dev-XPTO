import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px 0px 0px;

  background-color: var(--white);

  min-height: 100%;
  min-width: 100%;
`;

export const BudgetsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-left: solid 5px var(--mint_green);
  height: 60px;
  margin-bottom: 30px;
  padding: 0 35px;
`;

export const BudgetTitle = styled.p`
  color: var(--mint_green);
  font-size: 22px;
  font-weight: bold;
`;

export const BudgetContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 60px 20px;
  background-color: var(--light_gray);
  border-top: 1px solid var(--black);
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, var(--mint_green), var(--light_green));
  border-radius: 25px;
  box-shadow: 0px 1px 10px var(--black);

  height: 500px;
  width: 300px;
`;

export const PlanTitle = styled.p`
  font-weight: bold;
  color: var(--white);
  font-size: 22px;
  padding: 20px 0;
`;

export const PlanContent = styled.div`
  background-color: var(--white);
  height: 100%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlanContentInfoContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const PlanContentInfoContainer = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--very_light_gray);
  border: 2px solid var(--gray);
  border-radius: 5px;  
`;

export const PlanContentInfoText = styled.p`
  font-weight: bold;
  color: var(--dark_gray);
  font-size: 10px;
`;

export const PlanPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  align-items: center;
  background-color: var(--light_gray);
  border-radius: 25px;
  padding: 15px 30px;;
`;

export const PlanPriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PlanPriceText = styled.p`
  color: var(--black);
  font-weight: bold;
  font-size: 22px;
`;

export const PlanPriceType = styled.p`
  display: flex;
  align-self: flex-end;
  color: var(--black);
  font-weight: bold;
`;

export const HelpContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 200px;

  padding: 30px;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HelpTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: baseline;
`;

export const FirstHelpText = styled.p`
  color: var(--mint_green);
  font-size: 22px;
`;

export const SecondHelpText = styled.p`
  color: var(--dark_green);
  font-size: 16px;
`;

export const HelpInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: baseline;
`;

export const Input = styled.input`
  height: 40px;
  width: 460px;
  padding: 5px;
  border-radius: 5px;
  /* border-color: 2px solid var(--black); */
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;

  color: var(--white);
  font-weight: bold;

  border-radius: 5px;

  background-image: linear-gradient(to right, var(--mint_green), var(--light_green));
  border: 0px solid;
`;
