import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

import HAVANA from '@assets/media/havana-club.png';
import COKE from '@assets/media/coke.png';
import CORONA from '@assets/media/corona.png';

const Container = styled.div`
  display: flex;
  margin: 5px;
  height: 410px;
  width: 610px;
  background-color: ${COLORS.orange};
  align-items: center;
`;

const StyledIMG = styled.img`
  position: relative;
  height: 280px;
  margin-left: 5%;
`;

const TileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const TileTitle = styled.h1`
    margin: 0 auto;
    font-size: 38px;
    padding: 10px 0;
    color: white;
`

const TitleText = styled.p`
    font-size: 20px;
    padding-bottom: 19px;
    color: white;
`

const TileButton = styled.a`
    background-color: white;
    color: black;
    padding: 4px 0;
    margin: 0 auto;
    width: 20%;
    text-decoration: none;
    border-radius: 5px;
`


const SlideShowTile = (props) => {
  const [displayedTile, setDisplayedTile] = useState({
    id: 1,
    img: CORONA,
    title: "It's beer o' clock somewhere.",
    text: "We've got you covered.",
    link: 'http://localhost:3000/shoppage/products?category.category=beer&',
  });

  const TileInfo = [
    {
      id: 1,
      img: CORONA,
      title: "It's beer o' clock somewhere.",
      text: "We've got you covered.",
      link: 'http://localhost:3000/shoppage/products?category.category=beer&',
    },
    {
      id: 2,
      img: HAVANA,
      title: "Never rum out of stock.",
      text: "We've got you by the balls.",
      link: 'http://localhost:3000/shoppage/products?category.category=wine&',
    },
    {
      id: 3,
      img: COKE,
      title: "Some refreshments?",
      text: "Ye've got nuthin on us.",
      link: 'http://localhost:3000/shoppage/products?category.category=spirit&',
    },
  ];

  const updateTile = () => {
    if (displayedTile.id == 3) {
      setDisplayedTile(TileInfo[0]);
    } else if (displayedTile.id == 1) {
      setDisplayedTile(TileInfo[1]);
    } else if (displayedTile.id == 2) {
      setDisplayedTile(TileInfo[2]);
    }
  };
  setTimeout(updateTile, 5000);


  return (
    <Container>
      <StyledIMG src={displayedTile.img} />
      <TileWrapper>
      <TileTitle>{displayedTile.title}</TileTitle>
      <TitleText>{displayedTile.text}</TitleText>
      <TileButton href={displayedTile.link}>Shop</TileButton>
      </TileWrapper>
    </Container>
  );
};

export default SlideShowTile;
