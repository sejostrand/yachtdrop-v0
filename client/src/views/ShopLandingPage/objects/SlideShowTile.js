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
  background-color: blue;
`;

const StyledIMG = styled.img`
  position: absolute;
  height: 300px;
`;

const SlideShowTile = () => {
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
      title: "It's wine time somewhere.",
      text: "We've got your balls.",
      link: 'http://localhost:3000/shoppage/products?category.category=wine&',
    },
    {
      id: 3,
      img: COKE,
      title: "It's time for a whyskey.",
      text: "We've got nuthin on ya.",
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
  setTimeout(updateTile, 2000);

  return (
    <Container>
      <StyledIMG src={displayedTile.img} />
    </Container>
  );
};

export default SlideShowTile;
