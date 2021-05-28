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

const Button = styled.button`
  padding: 5px;
  margin-left: 200px;
`;

const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const onRemove = (product) => {
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

  return (
    <Container>
      <ImgWrapper src={props.imgUrl} />
      <Details>
        <Display>{props.display}</Display>
        <SubDisplay>{props.subDisplay}</SubDisplay>
        <Price>{props.price}</Price>
      </Details>
      <Button onClick={(product) => onRemove(product)}>remove</Button>
    </Container>
  );
};

export default CartItem;
