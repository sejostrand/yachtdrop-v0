import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';

import ListItem from './objects/ListItem';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  background: ${COLORS.white};
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #f8faf7;
  margin: 10px 5vw;
  border-radius: 20px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 70vw;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
  margin: 10px 5vw;
`;

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px;
  font-size: 20px;
`;

const ConfirmButton = styled.a`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${COLORS.orange};
  color: white;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ReturnButton = styled.a`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${COLORS.orange};
  color: white;
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Total = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: flex-end;
  margin: 20px 30vw;
`;

const OrderForm = styled.form`
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  margin: 30px 5vw;
`;

const Field = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px;
`;

const InputField = styled.input`
  margin: 0 5px;
  width: 300px;
`;

const CheckOut = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BodyWrapper>
      <RowContainer>
        <Title>Confirm Order</Title>
        <ConfirmButton>Confirm & continue to payment</ConfirmButton>
      </RowContainer>
      <ColumnContainer>
        <OrderForm>
          <Field>
            Vessel Name: <InputField type='text'></InputField>
          </Field>
          <Field>
            Reciever Name: <InputField type='text'></InputField>
          </Field>
          <Field>
            Contact Number: <InputField type='text'></InputField>
          </Field>
          <Field>
            Location: <InputField type='text'></InputField>
          </Field>
          <Field>
            Datetime: <InputField type='text'></InputField>
          </Field>
          <Field>
            Iced delivery? <InputField type='text'></InputField>
          </Field>
        </OrderForm>
      </ColumnContainer>
      <RowContainer>
        <ReturnButton href='/shoppage'>
          ◀ Return and continue shopping
        </ReturnButton>
        <Total> Total € {totalPrice.toFixed(2)}</Total>
      </RowContainer>

      <CartContainer>
        {cart.map((product, index) => (
          <ListItem
            qty={product.qty}
            key={index}
            id={product.id}
            fullDescription={product.fullDescription}
            display={product.display}
            subDisplay={product.subDisplay}
            price={product.price}
            packSize={product.packSize}
            imgUrl={product.imgUrl}
          />
        ))}
      </CartContainer>
    </BodyWrapper>
  );
};

export default CheckOut;
