import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const ButtonWrapper = styled.button`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${COLORS.orange};
  color: white;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 25px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  transform: none;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const ConfirmButton = (props) => {
  return (
    <ButtonWrapper
      disabled={props.agreeTerms}
      type='submit'
      value='place-order'
    >
      Confirm & continue to payment
    </ButtonWrapper>
  );
};

export default ConfirmButton;
