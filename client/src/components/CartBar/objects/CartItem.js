import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../../assets/utils/CartContext';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 6px;
  margin-top: 6px;
  padding-bottom: 7px;
  border-bottom: 1px solid lightgray;
`;

const ImgWrapper = styled.img`
  height: 70px;
  width: auto;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  margin: 0 15px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
`;

const Display = styled.div`
  font-size: 10px;
  margin: 3px;
`;

const SubDisplay = styled.div`
  font-size: 10px;
  margin: 3px;
`;

const Price = styled.div`
  font-size: 10px;
  margin: 3px;
`;


const QTY = styled.div`
  font-size: 16px;
`;

const Buttons = styled.button`
  padding: 5px 10px;
  margin: 0 50px;
  background-color: white;
`;


const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const onRemove = () => {
    const product = { id: props.id, display: props.display, subDisplay: props.subDisplay, price: props.price, imgUrl: props.imgUrl, qty: props.qty };
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onAdd = () => {
    const product = { id: props.id, display: props.display, subDisplay: props.subDisplay, price: props.price, imgUrl: props.imgUrl };
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <Container>
      <ImgWrapper src={props.imgUrl} />
      <Details>
        <Display>{props.display}</Display>
        <SubDisplay>{props.subDisplay}</SubDisplay>
        <Price>{props.price}</Price>
      </Details>
      <ButtonContainer>
        <Buttons onClick={() => onRemove(props.product)}>-</Buttons>
        <QTY>{props.qty}</QTY>
        <Buttons onClick={() => onAdd(props.product)}>+</Buttons>
      </ButtonContainer>
    </Container>
  );
};

export default CartItem;
