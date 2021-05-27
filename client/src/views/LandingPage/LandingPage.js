import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

import COVER from '@assets/img/cover.jpg';
import ShopSelection from './objects/ShopSelection';
import Steps from './objects/Steps';
import Division from './objects/Division';

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
  min-height: 500px;
`;

const ColorSection = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  display: flex;
  height: ${(props) => props.height};
`;

const LandingPage = () => {
  return (
    <BodyWrapper>
      <ColorSection height='52px' color='white' />
      <CoverImg img={COVER} />
      <ShopSelection />
      <ColorSection height='152px' color='white' />
      <Steps />
    </BodyWrapper>
  );
};

export default LandingPage;
