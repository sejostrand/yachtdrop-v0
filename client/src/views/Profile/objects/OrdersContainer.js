import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useCurrentUser } from '@assets/utils/CurrentUser';
import ProductList from './ProductList';
import { COLORS } from '@assets/theme/theme';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  max-width: 1000px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: black;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: black;
  margin: 5px;
`;

const Field = styled.div`
  display: flex;
  margin: 2px;
`;

const Label = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100px;
  justify-content: flex-end;
`;

const Value = styled.div`
  display: flex;
  margin-left: 20px;
`;

const OrdersContainer = (props) => {
  const user = useCurrentUser();
  const [showList, setShowList] = useState(false);
  const [renderOrders, setRenderOrders] = useState(false);
  const [products, setProducts] = useState([]);

  //GET USER ORDERS

  useEffect(() => {
    const getQuery = () => {
      let q = '';
      props.orders.map((order) => {
        Object.keys(order.productList).forEach((id) => q.concat(`id=${id}&`));
      });
      return q;
    };
    const q = getQuery();
    const getProductData = axios
      .get(`http://localhost:1337/products?${q}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));

    console.log(products);
  }, []);

  /* {orders.map((order, index) => (
        <ListItem key={index} />
      ))} */

  return (
    <Container>
      {props.orders.map((order, index) => {
        return (
          <OrderContainer>
            <OrderDetails>
              <Field>
                <Label>State: </Label>
                <Value>{order.state}</Value>
              </Field>
              <Field>
                <Label>Date:</Label>
                <Value>{order.createdAt}</Value>
              </Field>
              <Field>
                <Label>Location:</Label>
                <Value>{order.location}</Value>
              </Field>
              <Field>
                <Label>Vessel:</Label>
                <Value>{order.vesselName}</Value>
              </Field>
              <ProductList cartItems={order.productList} products={products} />
            </OrderDetails>
          </OrderContainer>
        );
      })}
    </Container>
  );
};

export default OrdersContainer;
