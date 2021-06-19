import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const FooterWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-flow: row wrap;
  background-color: ${COLORS.orange};
  align-items: start;
  justify-content: center;
  z-index: 2;
`;

const Section = styled.div`
  margin: 20px 40px;
  display: flex;
  flex-flow: column nowrap;
`;

const SectionTitle = styled.a`
  margin: 5px 0px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const SectionItem = styled.a`
  color: white;
  margin: 5px 0px;
  font-size: 16px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  width: fit-content;
  flex-flow: row wrap;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Section>
            <SectionTitle href='aboutus'>About Us</SectionTitle>
            <SectionItem>Story</SectionItem>
            <SectionItem href='terms'>Terms of service</SectionItem>
            <SectionItem href='privacy-policy'>Privacy policy</SectionItem>
            <SectionItem>Testimonials</SectionItem>
          </Section>
          <Section>
            <SectionTitle>Partnerships</SectionTitle>
            <SectionItem>Become a retail patner</SectionItem>
            <SectionItem>Become an embassador</SectionItem>
          </Section>
          <Section>
            <SectionTitle href='contactus'>Contact Us</SectionTitle>
            <SectionItem>Facebook</SectionItem>
            <SectionItem>Instagram</SectionItem>
            <SectionItem>Twitter</SectionItem>
          </Section>
        </Container>
      </FooterWrapper>
    </>
  );
}

export default Footer;
