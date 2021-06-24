import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CartItem from './objects/CartItem';
import { CartContext } from '@assets/utils/CartContext';

const Container = styled.div`
  margin-top: 97px;
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  position: fixed;
  z-index: 10;
  height: calc(100vh - 97px);
  padding-bottom: 50px;
  width: 500px;
  background-color: ${COLORS.white};
  border-left: 3px solid black;
  border-top: 19.5px solid black;
  overflow: hidden;
  transform: ${(props) => (props.showCart ? 'none' : 'translateX(500px)')};
  transition: ease-in-out 0.1s;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  padding: 5px;
  overflow-y: scroll;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const ButtonContainer = styled.div`
  margin: 15px 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const Checkout = styled.a`
  display: flex;
  flex-flow: row nowrap;
  width: 200px;
  color: white;
  background-color: ${COLORS.orange};
  padding: 5px;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Total = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ListTitle = styled.div`
  background-color: ${COLORS.green};
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
  margin: 0 39px 0 40px;
  padding: 2px 10px;
  font-weight: bold;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const EmptyCaption = styled.p`
  font-size: 18px;
  color: black;
  margin: 20px 5px;
`;

const CartBar = (props) => {
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
    <Container showCart={props.showCart}>
      {/* <HideButton onClick={() => props.setShowCart(false)}>▶</HideButton> */}
      <ButtonContainer>
        {cart.length !== 0 && (
          <>
            <Checkout href='/order-confirmation'>Proceed to checkout</Checkout>
            <Total> Total € {totalPrice.toFixed(2)}</Total>
          </>
        )}
      </ButtonContainer>
      <ListTitle>MY CART</ListTitle>
      <ListContainer>
        {cart.length === 0 && (
          <>
            <EmptyCaption>Cart is empty.</EmptyCaption>
            <EmptyCaption>Add items to your basket!</EmptyCaption>
          </>
        )}
        {cart.map((product, index) => (
          <CartItem
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
      </ListContainer>
    </Container>
  );
};

export default CartBar;
