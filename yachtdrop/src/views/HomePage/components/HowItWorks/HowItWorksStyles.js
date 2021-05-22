import styled from 'styled-components';

export const HowItWorksContainer = styled.div`
  min-height: 80vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: white;
  color: black;
`;

export const HowItWorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const HowItWorksCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 350px;
`;

export const HowItWorksImg = styled.img`
  width: 160px;
  height: auto;
  min-width: 160px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const HowItWorksHeading = styled.h1`
  font-size: clamp(3rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const HowItWorksTitle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const HowItWorksInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  font-weight: 420;
`;

export const HowItWorksDesc = styled.p`
  margin-bottom: 1rem;
`;