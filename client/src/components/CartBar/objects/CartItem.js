import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  margin: 20px;
`;

const cartItem = (props) => {

  return (
    <Container>
      <ImgWrapper src={props.imgUrl} />
      <Details>
        <Display>{props.display}</Display>
        <SubDisplay>{props.subDisplay}</SubDisplay>
        <Price>{props.price}</Price>
      </Details>
      <Button>remove</Button>
    </Container>
  );
};

export default cartItem;
