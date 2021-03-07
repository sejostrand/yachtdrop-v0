import styled from 'styled-components';
import React from 'react';

const ButtonWrapper = styled.div`
  margin-top: 30px;
  margin-left: 288.5px;
  padding-top: 5px;
  padding-left: 2px;
  position: fixed;
  height: 40px;
  width: 20px;
  border-radius: 10px;
  background-color: #f8694b;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: 'consolas';
  cursor: pointer;
`;

const StyledButton = styled.div``;

const BarButton = () => {
  return <ButtonWrapper>{'<'}</ButtonWrapper>;
};

export default BarButton;
