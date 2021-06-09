import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '@assets/theme/theme';
import { CartContext } from '@assets/utils/CartContext';
import { useCurrentUser } from '@assets/utils/CurrentUser';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
`;

const Window = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Close = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: black;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  padding-right: 5px;
`;

const Section = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 10px;
  width: 300px;
  height: 400px;
`;

const ProductImg = styled.img`
  height: 400px;
  width: auto;
  display: flex;
  margin: 10px;
`;

const Cross = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  cursor: pointer;
`;

const FullDescription = styled.h1`
  display: flex;
  flex-flow: row wrap;
  font-size: 22px;
  margin: 5px;
`;

const Field = styled.p`
  font-size: 18px;
  margin: 5px;
`;

const SubHeading = styled.p`
  font-size: 10px;
  color: gray;
`;

const AddToCart = styled.div`
  background-color: ${COLORS.orange};
  color: white;
  font-family: ${FONTS.secondaryFont};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;

  padding: 3px 0px;
  text-align: center;

  border-radius: 4px;
  width: 280px;
  height: auto;
  margin: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

const AddFav = styled.div`
  background-color: orange;
  color: white;
  font-family: ${FONTS.secondaryFont};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;

  padding: 3px 0px;
  text-align: center;

  border-radius: 4px;
  width: 280px;
  height: auto;
  margin: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ProductWindow = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const user = useCurrentUser();

  const onAdd = () => {
    const product = {
      id: props.id,
      display: props.display,
      subDisplay: props.subDisplay,
      price: props.price,
      imgUrl: props.imgUrl,
    };
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
      <Window>
        <ProductImg src={props.imgUrl} />
        <Section>
          <Close onClick={() => props.setIsVisible(false)}>✖</Close>
          <ContentContainer>
            <SubHeading>Description</SubHeading>
            <FullDescription>{props.fullDescription}</FullDescription>
            <SubHeading>Display</SubHeading>
            <Field>{props.display}</Field>
            <SubHeading>Price</SubHeading>
            <Field>
              <p>{`${props.price}$`}</p>
            </Field>
            <SubHeading>Container Volume</SubHeading>
            <Field>10ml</Field>
            <SubHeading>Pack Size</SubHeading>
            <Field>{`${props.packSize}`}</Field>
          </ContentContainer>
          <ButtonContainer>
            <AddToCart onClick={() => onAdd(props.product)}>
              Add to Cart
            </AddToCart>
            {user.isAuthenticated && <AddFav>Save as Favourite</AddFav>}
          </ButtonContainer>
        </Section>
      </Window>
    </Container>
  );
};

export default ProductWindow;
