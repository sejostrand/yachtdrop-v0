import React from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useCurrentUserData,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';

//import styles
import {
  TileWrapper,
  PackSize,
  ProductImage,
  AddButtonWrapper,
  DetailsWrapper,
  ProductName,
  ProductPrice,
  ProductDescription,
  FavStar,
} from './ProductTile.style';

//import objects
import ProductIcon from '../../../assets/img/product-icons/wine/test.jpg';
import star from '@assets/img/star.png';
import emptyStar from '@assets/img/empty-star.png';

const ProductTile = (props) => {
  const userData = useCurrentUserData();

  return (
    <TileWrapper>
      {props.pack != 1 && <PackSize>{props.pack + ' PACK'}</PackSize>}
      {userData.favouriteProducts.includes(props.id) ? (
        <FavStar src={star} />
      ) : (
        <FavStar src={emptyStar} />
      )}
      <ProductImage src={props.imgUrl} />
      <DetailsWrapper>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>$ {props.price.toFixed(2)}</ProductPrice>
      </DetailsWrapper>
      <AddButtonWrapper>ADD</AddButtonWrapper>
    </TileWrapper>
  );
};

export default ProductTile;
