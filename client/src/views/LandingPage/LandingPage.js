import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

import COVER from '@assets/img/cover.jpg';
import ShopSelection from './objects/ShopSelection';
import Steps from './objects/Steps';
import Division from './objects/Division';
import VIDEO from '@assets/media/yachtdrop-promo.mp4';
import LandingNav from '@components/LandingNav/LandingNav';

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

const VideoWrapper = styled.div`
  display: flex;
  margin: 60px;
`;

const ColorSection = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  display: flex;
  height: ${(props) => props.height};
`;

const LandingPage = () => {
  console.log(window.location.href);
  return (
    <>
      <LandingNav />
      <BodyWrapper>
        <video src={VIDEO} type='video/mp4' loop autoPlay muted />
        <ShopSelection />
        <ColorSection height='52px' color={COLORS.white} />
        <Steps />
      </BodyWrapper>
    </>
  );
};

export default LandingPage;
