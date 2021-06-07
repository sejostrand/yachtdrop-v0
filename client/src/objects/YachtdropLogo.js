import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@assets/utils/useMediaQuery';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: white;
  align-self: center;
  margin-left: 35px;
`;

const StyledLogo = styled.a`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const Location = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  position: absolute;
  cursor: pointer;
  color: white;
  letter-spacing: 2px;
  transform: translate(58px, 32px);
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`;

const YachtdropLogo = (props) => {
  const matches = useMediaQuery('(min-width: 600px)');
  return (
    <Container>
      <StyledLogo href='/'>yachtdrop</StyledLogo>
      {!matches && <Location open={props.open}>Mallorca</Location>}
    </Container>
  );
};

export default YachtdropLogo;
