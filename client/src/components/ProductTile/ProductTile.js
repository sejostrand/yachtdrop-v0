import React, { useState, useContext } from 'react';
import { useCurrentUser } from '@assets/utils/CurrentUser';
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
  SaveContainer,
  AddContainer,
  AddButton,
  StarContainer,
} from './ProductTile.style';

//import objects
import star from '@assets/img/star.png';
import emptyStar from '@assets/img/empty-star.png';
import ProductWindow from '@components/ProductWindow/ProductWindow';

const ProductTile = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useCurrentUser();
  const [cart, setCart] = useContext(CartContext);
  const [isFav, setIsFav] = useState(
    user.favouriteProducts !== undefined
      ? user.favouriteProducts.includes(props.id)
      : false
  );

  //ADDING PRODUCT TO CART
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

  //ADD PRODUCTS TO FAVOURITES
  const getFavs = async () => {
    const res = await axios.get('http://localhost:1337/users/me', {
      withCredentials: true,
    });
    const data = await res.data.favouriteProducts;
    return data;
  };

  const putFavs = (data) => {
    const url = `http://localhost:1337/users/${user.id}`;
    axios
      .put(url, data, { withCredentials: true })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const setFavs = async (id) => {
    const userFavs = await getFavs();
    if (userFavs !== undefined) {
      const newUserFavs =
        (await userFavs.includes(id)) === true
          ? userFavs.splice(userFavs.indexOf(id), 1)
          : userFavs.push(id);
      putFavs({ favouriteProducts: userFavs });
    }
  };

  const icon = isFav ? star : emptyStar;

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
            <FavStar
              isFav={isFav}
              src={icon}
              onClick={() => setFavs(props.id) && setIsFav(!isFav)}
            />
          ) : (
            <FavStar
              src={icon}
              onClick={() => setFavs(props.id) && setIsFav(!isFav)}
            />
          ))}
        <ProductImage src={props.imgUrl} onClick={() => setIsVisible(true)} />
        <DetailsWrapper>
          <ProductDisplay>{props.display}</ProductDisplay>
          <ProductSubDisplay>{props.subDisplay}</ProductSubDisplay>
          <ProductPrice>€ {props.price.toFixed(2)}</ProductPrice>
        </DetailsWrapper>
        <AddButton>
          {/* <SaveContainer
            isFav={isFav}
            onClick={() => setFavs(props.id) && setIsFav(!isFav)}
          >
            <StarContainer isFav={isFav}>★</StarContainer>
          </SaveContainer> */}
          <AddContainer onClick={(product) => onAdd(product)}>ADD</AddContainer>
        </AddButton>
      </TileWrapper>
    </>
  );
};

export default ProductTile;
