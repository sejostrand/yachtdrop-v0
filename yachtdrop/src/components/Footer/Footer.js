import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  justify-items: space-between;
  background-color: #f8694b;
  padding: 5px 25px;
  width: 100%;
  height: 200px;
  bottom: 0;
`;

const FooterDiv = styled.div`
  justify-items: space-between;
  text-align: center;
  width: 25vw;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDiv>About</FooterDiv>
      <FooterDiv>Contact</FooterDiv>
      <FooterDiv>You Wot?</FooterDiv>
    </FooterWrapper>
  );
};

export default Footer;
