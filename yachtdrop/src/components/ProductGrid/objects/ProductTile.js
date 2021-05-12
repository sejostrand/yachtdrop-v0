import React, { useState } from 'react';
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
  const user = useCurrentUser();

  //POST PRODUCT
  const addFavourite = (id) => {
    const user = {
      favouriteProducts: [id],
    };
    fetch('http://localhost:1337/users/me', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(() => {
      console.log('product added to favourites');
    });
  };

  const removeFavourite = (id) => {
    const user = {
      favouriteProducts: [id],
    };
    fetch('http://localhost:1337/users/me', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(() => {
      console.log('product added to favourites');
    });
  };
  //END OF RUBBISH CODE

  return (
    <TileWrapper>
      {props.pack != 1 && <PackSize>{props.pack + ' PACK'}</PackSize>}
      {!user ? (
        userData.favouriteProducts.includes(props.id) ? (
          <FavStar src={star} />
        ) : (
          <FavStar src={emptyStar} />
        )
      ) : null}
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
