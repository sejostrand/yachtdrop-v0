import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Description = styled.div`
  color: white;
`;

const ButtonWrapper = styled.a`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${COLORS.orange};
  color: white;
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  margin: 25px 10px;

  &:hover ${Description} {
    text-decoration: underline;
  }
`;

const Arrow = styled.span`
  color: white;
  margin-right: 8px;
`;

const ReturnButton = () => {
  return (
    <ButtonWrapper href='/shoppage'>
      <Arrow>◀</Arrow>
      <Description>Return and continue shopping</Description>
    </ButtonWrapper>
  );
};

export default ReturnButton;
