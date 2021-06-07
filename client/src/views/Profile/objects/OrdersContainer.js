import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  color: black;
`;

const OrdersContainer = () => {
  return <Container>Orders</Container>;
};

export default OrdersContainer;
