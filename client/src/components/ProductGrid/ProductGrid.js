import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import styles
import { GridWrapper } from './ProductGrid.style';

//import objects
import ProductTile from '@components/ProductTile/ProductTile';

const ProductGrid = (props) => {
  const [userFavs, setUserFavs] = useState([]);

  useEffect(() => {
    const getFavs = async () => {
      const res = await axios.get('http://localhost:1337/users/me', {
        withCredentials: true,
      });
      const data = await res.data.favouriteProducts;
      setUserFavs(data);
    };
  }, []);

  return (
    <GridWrapper>
      {props.products.map((product, index) => (
        <ProductTile
          userFavs={userFavs}
          key={index}
          id={product.id}
          fullDescription={product.fullDescription}
          display={product.display}
          subDisplay={product.subDisplay}
          price={product.price}
          packSize={product.packSize}
          imgUrl={'http://localhost:1337' + product.productImg.url}
        />
      ))}
    </GridWrapper>
  );
};

export default ProductGrid;
