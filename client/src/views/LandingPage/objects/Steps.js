import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import DRINK from '@assets/img/wine-icon.png';
import TIME from '@assets/img/time-icon.png';
import TRUCK from '@assets/img/truck-icon.png';

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  background-color: ${COLORS.white};
`;

const Title = styled.div`
  display: flex;
  font-size: 40px;
  color: black;
  justify-content: center;
`;

const StepContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 1300px) {
    flex-flow: column nowrap;
  }
`;

const Step = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 50px;
  width: 300px;
  transition: ease-in-out 0.1s;

  &:hover {
    opacity: 0.8;
  }
`;

const Display = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
`;

const SubDisplay = styled.p`
  font-size: 16px;
  margin: 5px;
`;

const Icon = styled.img`
  height: 200px;
  width: 180px;
`;

const Steps = () => {
  return (
    <Container>
      <Title>How it works?</Title>
      <StepContainer>
        <Step>
          <Icon src={DRINK} />
          <Display>Choose products online</Display>
          <SubDisplay>
            Champagne, Wine, Spirits, Cider, Water... You name it, we have it.
          </SubDisplay>
        </Step>
        <Step>
          <Icon src={TIME} />
          <Display>Pick location & time of delivery</Display>
          <SubDisplay>
            We can deliver wherever you are. A marina, a mooring... Anywhere!
          </SubDisplay>
        </Step>
        <Step>
          <Icon src={TRUCK} />
          <Display>Await your yachtdrop</Display>
          <SubDisplay>
            Sit back and relax. We will take it from here.
          </SubDisplay>
        </Step>
      </StepContainer>
    </Container>
  );
};

export default Steps;
