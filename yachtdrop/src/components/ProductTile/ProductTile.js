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
  ProductDisplay,
  ProductPrice,
  ProductSubDisplay,
  FavStar,
} from './ProductTile.style';

//import objects
import star from '@assets/img/star.png';
import emptyStar from '@assets/img/empty-star.png';
import ProductWindow from '@components/ProductWindow/ProductWindow';

const ProductTile = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useCurrentUser();

  //POST PRODUCT
  const addFavourite = (id) => {};

  const removeFavourite = (id) => {};

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
      <TileWrapper>
        {props.packSize != 1 && <PackSize>{props.packSize + ' PACK'}</PackSize>}
        {user.isAuthenticated &&
          (user.favouriteProducts.includes(props.id) ? (
            <FavStar src={star} onClick={() => removeFavourite(props.id)} />
          ) : (
            <FavStar src={emptyStar} onClick={() => addFavourite(props.id)} />
          ))}
        <ProductImage src={props.imgUrl} onClick={() => setIsVisible(true)} />
        <DetailsWrapper>
          <ProductDisplay>{props.display}</ProductDisplay>
          <ProductSubDisplay>{props.subDisplay}</ProductSubDisplay>
          <ProductPrice>€ {props.price.toFixed(2)}</ProductPrice>
        </DetailsWrapper>
        <AddButtonWrapper>ADD</AddButtonWrapper>
      </TileWrapper>
    </>
  );
};

export default ProductTile;
