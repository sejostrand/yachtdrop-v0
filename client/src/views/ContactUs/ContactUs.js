import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import useMediaQuery from '@assets/utils/useMediaQuery';
import COVER from '@assets/img/cover-narrow.jpg';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: ${COLORS.white};
  background-image: url(${COVER});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: min(35vh, 35vw);
  width: 100%;
  padding: 0 5vw 80px 5vw;
  background-color: ${COLORS.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  min-height: 80vh;
  box-shadow: 0px -1px 50px ${COLORS.darkGray};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 1200px;
  margin: 0 10vw;
`;

const Title = styled.h1`
  display: flex;
  margin: 20px auto;
`;

const SubTitle = styled.h2`
  display: flex;
  margin: 20px auto;
`;

const AboutUs = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <Title>Contact us.</Title>
        <SubTitle>We answer all of your questions.</SubTitle>
        <ContentContainer>
          Drop us an email at info@yachtdrop.com and we will get back to you as
          soon as we can.
        </ContentContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default AboutUs;
