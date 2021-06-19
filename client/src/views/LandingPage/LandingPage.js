import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

import COVER from '@assets/img/cover.jpg';
import LocationSelection from './objects/LocationSelection';
import Steps from './objects/Steps';
import Division from './objects/Division';
import VIDEO from '@assets/media/yachtdrop-promo.mp4';
import LandingNav from '@components/LandingNav/LandingNav';
import UPPERTRIANGLE from '@assets/media/orange-triangle.png';
import LOWERTRIANGLE from '@assets/media/orange-triangle2.png';

const BodyWrapper = styled.body`
  background-color: ${COLORS.orange};
  width: 100%;
  height: auto;
  min-height: 85vh;
  display: flex;
  flex-flow: column nowrap;
`;

const CoverImg = styled.div`
  display: flex;
  background-image: url(${(props) => props.img});
  background-size: 100% auto;
  background-position-y: 60%;
  width: 100%;
  height: 500px;

  @media (max-width: 900px) {
    max-height: 450px;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    max-height: 320px;
    margin-bottom: 80px;
  }
`;

const UpperCover = styled.img`
  width: 100%;
  position: absolute;
  transform: translateY(26vw);
`;

const LowerCover = styled.img`
  width: 100%;
  position: absolute;
  transform: translateY(48vw);
`;

const VideoWrapper = styled.div`
  display: flex;
  margin: 60px;
`;

const ColorSection = styled.div`
  background-image: linear-gradient(
    120deg,
    ${COLORS.paleOrange},
    ${COLORS.orange}
  );
  width: 100%;
  display: flex;
  height: ${(props) => `${props.height}px`};
  background-position: center bottom;
  background-size: auto 100vh;
  @media (max-width: 900px) {
    height: ${(props) => `${props.height * 1.4}px`};
  }
  @media (max-width: 700px) {
    height: ${(props) => `${props.height * 1.6}px`};
  }
  @media (max-width: 600px) {
    height: ${(props) => `${props.height * 1.6}px`};
  }
  @media (max-width: 400px) {
    height: ${(props) => `${props.height * 2.2}px`};
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 10vw;
  transform: translateY(32.3vw);
  background-image: linear-gradient(${COLORS.green}, ${COLORS.orange});
`;

const LandingPage = () => {
  console.log(window.location.href);
  return (
    <>
      <LandingNav />
      <BodyWrapper>
        <video src={VIDEO} type='video/mp4' loop autoPlay muted />

        <LocationSelection />
        <ColorSection height='200' />

        <Steps />
      </BodyWrapper>
    </>
  );
};

export default LandingPage;
