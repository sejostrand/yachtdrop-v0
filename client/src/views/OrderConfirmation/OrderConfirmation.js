import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import COVER from '@assets/img/cover-narrow.jpg';
import CartList from './components/CartList';
import CheckoutForm from './components/CheckoutForm';
import ReturnButton from './objects/ReturnButton';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: ${COLORS.white};
  background-image: url(${COVER});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: min(55vh, 35vw);
  width: 100%;
  padding: 0 5vw 80px 5vw;
  background-color: ${COLORS.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  min-height: 80vh;
  box-shadow: 0px -1px 50px ${COLORS.darkGray};
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 5vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 5vw;
`;

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 50px auto 10px 10px;
  font-size: 30px;
  font-weight: 400;
`;

const Paragrapgh = styled.p`
  margin: 10px;
`;

const OrderConfirmation = () => {
  return (
    <BodyWrapper>
      {/* <BackgroundCover /> */}
      <BodyContainer>
        <ColumnContainer>
          <Title>Order confirmation</Title>
          <Paragrapgh>
            Please check your cart and fill out the details to confirm your
            order and proceed to payment.
          </Paragrapgh>
          <ReturnButton />
        </ColumnContainer>
        <RowContainer>
          <CartList />
          <CheckoutForm />
        </RowContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default OrderConfirmation;
