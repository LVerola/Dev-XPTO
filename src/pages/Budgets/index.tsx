import React, { useState, useEffect } from 'react';

import ReactFlagsSelect from "react-flags-select";
import { FaCheckCircle, FaMoneyBillWaveAlt } from 'react-icons/fa';

import {
  Container,
  BudgetsTitleContainer,
  BudgetTitle,
  BudgetContainer,
  PlansContainer,
  PlanCard,
  PlanTitle,
  PlanContent,
  PlanContentInfoContainers,
  PlanContentInfoContainer,
  PlanContentInfoText,
  PlanPriceContainer,
  PlanPriceInfoContainer,
  PlanPriceText,
  PlanPriceType,
  HelpContainer,
  HelpTextContainer,
  FirstHelpText,
  SecondHelpText,
  HelpInputContainer,
  Input,
  Button,
} from './styles';

const dataBR = {
  '1_value': 'R$ 399,90',
  '1_type': 'Mensais',
  '2_value': 'R$ 1.099,90',
  '2_type': 'Mensais',
  '3_value': 'R$ 14.299,99',
  '3_type': 'AA',
  '4_value': 'R$ 16.799,99',
  '4_type': 'AA',
}

const dataUS = {
  '1_value': 'US$ 80,97',
  '1_type': 'Monthly',
  '2_value': 'US$ 222,71',
  '2_type': 'Monthly',
  '3_value': 'US$ 2.895,42',
  '3_type': 'YY',
  '4_value': 'US$ 3.401,62',
  '4_type': 'YY',
}

const Budgets: React.FC = () => {
  const [selected, setSelected] = useState("BR");
  const [selectedData, setSelectedData] = useState(dataBR);

  useEffect(() => {
    if (selected === 'BR') {
      setSelectedData(dataBR);
    } else {
      setSelectedData(dataUS)
    }
  }, [selected])

  return (
    <Container>
      <BudgetsTitleContainer>
        <BudgetTitle>Nossos principais orçamentos</BudgetTitle>

        <ReactFlagsSelect
          countries={["US", "BR"]}
          customLabels={{ "US": "(US$) US Dollar", "BR": "(R$) Brazilian Real" }}
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />
      </BudgetsTitleContainer>

      <BudgetContainer>
        <PlansContainer>
          <PlanCard>
            <PlanTitle>INTRO PLAN</PlanTitle>

            <PlanContent>
              <PlanContentInfoContainers>
                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>
              </PlanContentInfoContainers>

              <PlanPriceContainer>
                <FaMoneyBillWaveAlt color="var(--mint_green)" size={20} />
                <PlanPriceInfoContainer>
                  <PlanPriceText>{selectedData['1_value']}</PlanPriceText>
                  <PlanPriceType>{selectedData['1_type']}</PlanPriceType>
                </PlanPriceInfoContainer>
              </PlanPriceContainer>
            </PlanContent>
          </PlanCard>

          <PlanCard>
            <PlanTitle>STANDARD PLAN</PlanTitle>

            <PlanContent>
              <PlanContentInfoContainers>
                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>
              </PlanContentInfoContainers>

              <PlanPriceContainer>
                <FaMoneyBillWaveAlt color="var(--mint_green)" size={20} />
                <PlanPriceInfoContainer>
                  <PlanPriceText>{selectedData['2_value']}</PlanPriceText>
                  <PlanPriceType>{selectedData['2_type']}</PlanPriceType>
                </PlanPriceInfoContainer>
              </PlanPriceContainer>
            </PlanContent>
          </PlanCard>

          <PlanCard>
            <PlanTitle>MASTER PLAN</PlanTitle>

            <PlanContent>
              <PlanContentInfoContainers>
                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>
              </PlanContentInfoContainers>

              <PlanPriceContainer>
                <FaMoneyBillWaveAlt color="var(--mint_green)" size={20} />
                <PlanPriceInfoContainer>
                  <PlanPriceText>{selectedData['3_value']}</PlanPriceText>
                  <PlanPriceType>{selectedData['3_type']}</PlanPriceType>
                </PlanPriceInfoContainer>
              </PlanPriceContainer>
            </PlanContent>
          </PlanCard>

          <PlanCard>
            <PlanTitle>PARTNER PLAN</PlanTitle>

            <PlanContent>
              <PlanContentInfoContainers>
                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>

                <PlanContentInfoContainer>
                  <FaCheckCircle color="var(--mint_green)" size={50} />
                  <PlanContentInfoText>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean scelerisque metus eget sem.
                    Suspendisse fermentum. Proin diam augue
                  </PlanContentInfoText>
                </PlanContentInfoContainer>
              </PlanContentInfoContainers>

              <PlanPriceContainer>
                <FaMoneyBillWaveAlt color="var(--mint_green)" size={20} />
                <PlanPriceInfoContainer>
                  <PlanPriceText>{selectedData['4_value']}</PlanPriceText>
                  <PlanPriceType>{selectedData['4_type']}</PlanPriceType>
                </PlanPriceInfoContainer>
              </PlanPriceContainer>
            </PlanContent>
          </PlanCard>
        </PlansContainer>

        <HelpContainer>
          <HelpTextContainer>
            <FirstHelpText>Alguma dúvida?</FirstHelpText>
            <SecondHelpText>Mande agora mesmo para sanar qualquer questão</SecondHelpText>
          </HelpTextContainer>

          <HelpInputContainer>
            <Input placeholder="Escreva aqui (máx: 300 characteres)" maxLength={300} />
            <Button>Enviar</Button>
          </HelpInputContainer>
        </HelpContainer>
      </BudgetContainer>
    </Container>
  );
}

export default Budgets;