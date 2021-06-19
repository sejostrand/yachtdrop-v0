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
        <Title>About us.</Title>
        <SubTitle>Hello, welcome to Yachtdrop.</SubTitle>
        <ContentContainer>
          Founded in Falmouth, UK by an ex seafarer in 2017, Yachtdrop is the
          first and longest standing e-commerce company within the maritime
          industry with operations in 6 markets around the globe. Yachtdrop is a
          world leader in online and mobile ordering, providing customers with
          an easy and secure way to order and pay from our supplier partners. ​
          We use our technology to bring together thousands of yacht owners and
          crew with the best local suppliers in our operating locations. We're
          on a mission to create the world's greatest yacht product's community.
          ​ Our purpose sits at the heart of everything we do and that's to make
          product discovery exciting for everyone, whether its giving our
          customers more choice than anywhere else, or by supporting our drink
          supplier partners to get more out of their businesses and raise
          standards across the industry. ​ We're proud of what we have built,
          and the countless ways we have connected yacht owners and crew with
          trusted local suppliers, everywhere. ​ Our people are what make
          Yachtdrop the great company it is. Find out more about our careers
          with Yachtdrop. ​ If you’d like to boost your business by partnering
          with Yachtdrop, a leading global marketplace for online drinks
          delivery, click here.
        </ContentContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default AboutUs;
