import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: white;
  align-self: center;
  padding: 0px 20px 0px 30px;
  cursor: pointer;
`;

const YachtdropLogo = () => {
  return <StyledLogo>yachtdrop</StyledLogo>;
};

export default YachtdropLogo;
