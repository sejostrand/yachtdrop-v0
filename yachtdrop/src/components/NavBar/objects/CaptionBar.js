import React from 'react';
import styled from 'styled-components';

const StyledCaptionBar = styled.div`
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 10px;
  text-align: center;
  letter-spacing: 2px;
`;

const CaptionBar = () => {
  return (
    <StyledCaptionBar>
      Gain points every time you make an order!
    </StyledCaptionBar>
  );
};

export default CaptionBar;
