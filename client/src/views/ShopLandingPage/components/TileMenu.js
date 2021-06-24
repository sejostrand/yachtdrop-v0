import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import SlideShowTile from '../objects/SlideShowTile';

//images
import WINE from '@assets/img/wine-tile.png';
import SPIRIT from '@assets/img/spirits-tile.png';
import BEER from '@assets/img/beer-tile.png';
import MORE from '@assets/img/more-tile.png';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 20px;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const GridTile = styled.div`
  display: grid;
  margin: 5px;
`;

const TileIMG = styled.img`
  width: 300px;
  height: 200px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const TileMenu = () => {
  return (
    <Container>
      <SlideShowTile />
      <GridContainer>
        <Row>
          <TileIMG
            src={WINE}
            onClick={() =>
              window.location.assign(
                'http://localhost:3000/shoppage/products?category.category=wine&'
              )
            }
          />
          <TileIMG
            src={BEER}
            onClick={() =>
              window.location.assign(
                'http://localhost:3000/shoppage/products?category.category=beer&'
              )
            }
          />
        </Row>
        <Row>
          <TileIMG
            src={SPIRIT}
            onClick={() =>
              window.location.assign(
                'http://localhost:3000/shoppage/products?category.category=spirit&'
              )
            }
          />
          <TileIMG
            src={MORE}
            onClick={() =>
              window.location.assign('http://localhost:3000/shoppage/products?')
            }
          />
        </Row>
      </GridContainer>
    </Container>
  );
};

export default TileMenu;
