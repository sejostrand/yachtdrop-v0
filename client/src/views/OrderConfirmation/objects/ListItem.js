import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import ProductWindow from '@components/ProductWindow/ProductWindow';
import useMediaQuery from '@assets/utils/useMediaQuery';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px;
  background-color: ${COLORS.white};
  border-radius: 7px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-self: flex-start;
  width: fit-content;
`;

const ImgWrapper = styled.img`
  height: 80px;
  width: auto;
  border-radius: 7px;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 60px;
  }
`;

const Display = styled.div`
  font-size: 16px;
  margin: 2px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const SubDisplay = styled.div`
  font-size: 12px;
  color: ${COLORS.lightGray};
  margin: 2px;
`;

const Price = styled.div`
  font-size: 12px;
  margin: 2px;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  width: min-content;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-self: flex-end;
  margin: 0 10px;
`;

const QTY = styled.div`
  width: 26px;
  margin: 0 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const OperationButton = styled.a`
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
  margin: 0 20px;
  display: flex;
  width: fit-content;
  font-size: 14px;
  color: ${COLORS.darkGray};
  background-color: ${COLORS.white};
  cursor: pointer;
  &:hover {
    color: ${COLORS.lightGray};
  }
`;

const TotalPrice = styled.div`
  display: flex;
  width: 100px;
  font-size: 16px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
`;

const ListItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);
  const mediaQuery = useMediaQuery('(min-width: 600px)');

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
        <SubContainer>
          <ImgWrapper src={props.imgUrl} onClick={() => setIsVisible(true)} />
          <Details>
            <Display>{props.display}</Display>
            {mediaQuery && <SubDisplay>{props.subDisplay}</SubDisplay>}
            <Price>€ {props.price.toFixed(2)}</Price>
          </Details>
        </SubContainer>
        <SubContainer>
          <ButtonContainer>
            <OperationButton onClick={() => onReduce(props.product)}>
              -
            </OperationButton>
            <QTY>x{props.qty}</QTY>
            <OperationButton onClick={() => onAdd(props.product)}>
              +
            </OperationButton>
          </ButtonContainer>
          {mediaQuery && (
            <TotalPrice>€ {(props.price * props.qty).toFixed(2)}</TotalPrice>
          )}
          <RemoveButton onClick={() => onRemove(props.product)}>✖</RemoveButton>
        </SubContainer>
      </Container>
    </>
  );
};

export default ListItem;
