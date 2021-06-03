import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useCurrentUserData,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import { CartContext } from '@assets/utils/CartContext';
import axios from 'axios';

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
  const [cart, setCart] = useContext(CartContext);


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
    //document.getElementById('cartLink').animate(keyframes);
  };

  //POST PRODUCT
  const addFav = (id) => {
    const url = `http://localhost:1337/users/${user.id}`;
    const data = {
      favouriteProducts: [id],
    };
    const getProductData = axios
      .put(url, data, { withCredentials: true })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const removeFav = (id) => {};

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
            <FavStar src={star} onClick={() => removeFav(props.id)} />
          ) : (
            <FavStar src={emptyStar} onClick={() => addFav(props.id)} />
          ))}
        <ProductImage src={props.imgUrl} onClick={() => setIsVisible(true)} />
        <DetailsWrapper>
          <ProductDisplay>{props.display}</ProductDisplay>
          <ProductSubDisplay>{props.subDisplay}</ProductSubDisplay>
          <ProductPrice>€ {props.price.toFixed(2)}</ProductPrice>
        </DetailsWrapper>
        <AddButtonWrapper onClick={(product) => onAdd(product)}>
          ADD
        </AddButtonWrapper>
      </TileWrapper>
    </>
  );
};

export default ProductTile;
