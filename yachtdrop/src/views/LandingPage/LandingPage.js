import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

import COVER from '@assets/img/yacht.jpg';
import ShopSelection from './objects/ShopSelection';
import Steps from './objects/Steps';
import Division from './objects/Division';

const BodyWrapper = styled.body`
  background-color: white;
  width: 100%;
  height: auto;
  min-height: 85vh;
  display: flex;
  flex-flow: column nowrap;
`;

const CoverImg = styled.div`
  margin-top: 52px;
  display: flex;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position-y: center;
  width: 100%;
  height: 30vh;
`;

const LandingPage = () => {
  return (
    <BodyWrapper>
      <CoverImg img={COVER} />
      <ShopSelection />
      <Steps />
    </BodyWrapper>
  );
};

export default LandingPage;
