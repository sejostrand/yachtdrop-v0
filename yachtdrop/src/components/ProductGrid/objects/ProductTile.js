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
import ProductWindow from '@components/ProductWindow/ProductWindow';

const ProductTile = (props) => {
  const userData = useCurrentUserData();
  const user = useCurrentUser();
  const [isVisible, setIsVisible] = useState(false);

  //POST PRODUCT
  const addFavourite = (id) => {
    let userFavourites = userData.favouriteProducts;
    console.log(userFavourites);
    userFavourites.concat([id]);
    fetch(`http://localhost:1337/users/${userData.id}?id=${userData.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favouriteProducts: userFavourites }),
    }).then(() => {
      console.log('product added to favourites');
      console.log(userData.id);
      console.log(userFavourites);
    });
  };

  const removeFavourite = (id) => {
    let userFavourites = userData.favouriteProducts;
    userFavourites.splice(userFavourites.indexOf(id), 1);
    fetch('http://localhost:1337/users/' + userData.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favouriteProducts: userFavourites }),
    }).then(() => {
      console.log('product removed from favourites');
    });
  };

  return (
    <>
      {isVisible && (
        <ProductWindow
          setIsVisible={setIsVisible}
          id={props.id}
          name={props.name}
          description={props.description}
          price={props.price}
          pack={props.pack}
          imgUrl={props.imgUrl}
        />
      )}
      <TileWrapper>
        {props.pack != 1 && <PackSize>{props.pack + ' PACK'}</PackSize>}
        {userData.favouriteProducts &&
          (userData.favouriteProducts.includes(props.id) ? (
            <FavStar src={star} onClick={() => removeFavourite(props.id)} />
          ) : (
            <FavStar src={emptyStar} onClick={() => addFavourite(props.id)} />
          ))}
        <ProductImage src={props.imgUrl} onClick={() => setIsVisible(true)} />
        <DetailsWrapper>
          <ProductName>{props.name}</ProductName>
          <ProductDescription>{props.description}</ProductDescription>
          <ProductPrice>$ {props.price.toFixed(2)}</ProductPrice>
        </DetailsWrapper>
        <AddButtonWrapper>ADD</AddButtonWrapper>
      </TileWrapper>
    </>
  );
};

export default ProductTile;
