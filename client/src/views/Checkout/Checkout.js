import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CardSection from './components/CardSection';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  background: ${COLORS.white};
`;

const Checkout = () => {
  return <BodyWrapper>{/* <CardSection /> */}</BodyWrapper>;
};

export default Checkout;
