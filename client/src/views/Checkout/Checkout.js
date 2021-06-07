import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import useMediaQuery from '@assets/utils/useMediaQuery';
import ListItem from './objects/ListItem';
import COVER from '@assets/img/cover.jpg';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 80vh;
  background: ${COLORS.white};
`;

const Cover = styled.img`
  height: 30vw;
  position: absolute;
  right: 0;
  top: 300px;
`;
const BackgroundCover = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  background-image: url(${COVER});
  background-size: 100% auto;
  background-position-y: 60%;
  margin-bottom: 60px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 30px 5vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px auto 10px 10px;
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
  width: fit-content;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  max-width: 600px;
  background-color: ${COLORS.green};
  border-radius: 10px;
  margin: 0 auto 50px auto;
`;

const OrderForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
`;

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
`;

const FieldLabel = styled.div`
  display: flex;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin: 5px 0px;
`;

const InputField = styled.input`
  width: 95%;
  padding: 3px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 900px;
  margin: 0 auto 50px auto;
`;

const CartHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
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
  border-bottom: 2px solid black;
  width: fit-content;
  height: fit-content;
  font-size: 24px;
  font-weight: bold;
`;

const CartDivider = styled.div`
  display: flex;
  height: 1px;
  margin: 8px 20px;
  background-color: ${COLORS.lightGray};
`;

const Paragrapgh = styled.p`
  margin: 0 5px;
`;

const CheckOut = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const mediaQuery = useMediaQuery('(min-width: 600px)');

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
        {/* <Cover src={COVER} /> */}
      </RowContainer>
      <RowContainer>
        <Paragrapgh>
          Please check your cart and fill out the details to confirm your order
          and proceed to payment.
        </Paragrapgh>
      </RowContainer>

      <RowContainer>
        <FormContainer>
          <OrderForm>
            <Field>
              <FieldLabel>Vessel Name: </FieldLabel>
              <InputField type='text'></InputField>
            </Field>
            <Field>
              <FieldLabel>Reciever Name:</FieldLabel>
              <InputField type='text'></InputField>
            </Field>
            <Field>
              <FieldLabel>Contact Number:</FieldLabel>
              <InputField type='text'></InputField>
            </Field>
            <Field>
              <FieldLabel>Location: </FieldLabel>
              <InputField type='text'></InputField>
            </Field>
            <Field>
              <FieldLabel>Datetime:</FieldLabel>
              <InputField type='text'></InputField>
            </Field>
            <Field>
              <FieldLabel>Iced delivery?</FieldLabel>
              <InputField type='text'></InputField>
            </Field>
          </OrderForm>
        </FormContainer>

        <CartContainer>
          <CartHeader>
            <ReturnButton href='/shoppage'>
              ◀ Return and continue shopping
            </ReturnButton>
            <Total> Total: &nbsp;&nbsp; € {totalPrice.toFixed(2)}</Total>
          </CartHeader>
          {cart.map((product, index) => (
            <>
              <CartDivider />
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
            </>
          ))}
        </CartContainer>
      </RowContainer>
    </BodyWrapper>
  );
};

export default CheckOut;
