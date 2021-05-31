import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import ProductWindow from '@components/ProductWindow/ProductWindow';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 5px;
  background-color: ${COLORS.white};
  border-radius: 7px;
`;

const ImgWrapper = styled.img`
  height: 80px;
  width: auto;
  border-radius: 7px;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  font-size: 16px;
  width: 300px;
`;

const ButtonContainer = styled.div`
  margin: 0 15px;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

const Display = styled.div`
  font-size: 16px;
  margin: 2px;
`;

const SubDisplay = styled.div`
  font-size: 12px;
  color: ${COLORS.lightGray};
  margin: 2px;
`;

const Price = styled.div`
  font-size: 10px;
  margin: 2px;
`;

const QTY = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const SmallFont = styled.span`
  font-size: 10px;
`;

const MinusButton = styled.a`
  display: flex;
  justify-content: center;
  font-size: 17px;
  width: 22px;
  height: 22px;
  padding: 0px auto;
  border-radius: 11px;
  background-color: ${COLORS.orange};
  cursor: pointer;
  font-weight: 600;
  color: ${COLORS.white};
  visibility: ${(props) => (props.vis > 1 ? 'visible' : 'hidden')};
  &:hover {
    opacity: 0.8;
  }
`;

const PlusButton = styled.a`
  display: flex;
  justify-content: center;
  font-size: 17px;
  width: 22px;
  height: 22px;
  padding: 0px auto;
  border-radius: 11px;
  background-color: ${COLORS.orange};
  cursor: pointer;
  font-weight: 600;
  color: ${COLORS.white};
  &:hover {
    opacity: 0.8;
  }
`;

const RemoveButton = styled.a`
  font-size: 14px;
  font-weight: 100;
  color: ${COLORS.darkGray};
  padding: 0px 10px;
  background-color: ${COLORS.white};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: ${COLORS.lightGray};
  }
`;

const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  const onReduce = () => {
    const product = {
      id: props.id,
      display: props.display,
      subDisplay: props.subDisplay,
      price: props.price,
      imgUrl: props.imgUrl,
      qty: props.qty,
    };
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      console.log('tu mama');
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onRemove = () => {
    const product = {
      id: props.id,
      display: props.display,
      subDisplay: props.subDisplay,
      price: props.price,
      imgUrl: props.imgUrl,
      qty: props.qty,
    };
    const exist = cart.find((x) => x.id === product.id);
    setCart(cart.filter((x) => x.id !== product.id));
  };

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
    <>
      {isVisible && (
        <ProductWindow
          setIsVisible={setIsVisible}
          id={props.id}
          fullDescription={props.fullDescription}
          display={props.display}
          subDisplay={props.subDisplay}
          price={props.price}
          packSize={props.packSize}
          imgUrl={props.imgUrl}
        />
      )}
      <Container>
        <ImgWrapper src={props.imgUrl} onClick={() => setIsVisible(true)} />
        <Details>
          <Display>{props.display}</Display>
          <SubDisplay>{props.subDisplay}</SubDisplay>
          <Price>€ {props.price.toFixed(2)}</Price>
        </Details>
        <ButtonContainer>
          <MinusButton vis={props.qty} onClick={() => onReduce(props.product)}>
            -
          </MinusButton>
          <QTY>
            <SmallFont>x </SmallFont>
            {props.qty}
          </QTY>
          <PlusButton onClick={() => onAdd(props.product)}>+</PlusButton>
          <RemoveButton onClick={() => onRemove(props.product)}>✖</RemoveButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default CartItem;
