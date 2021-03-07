import React from 'react';
import styled from 'styled-components';

const StyledCaption = styled.div`
  background-color: black;
  color: white;
  font-size: 10px;
  text-align: center;
  padding-top: 2px;
  letter-spacing: 2px;
  height: 19px;
`;

const Caption = () => {
  return (
    <StyledCaption>Gain points every time you make an order!</StyledCaption>
  );
};

export default Caption;
