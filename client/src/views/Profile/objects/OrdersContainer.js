import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useCurrentUser } from '@assets/utils/CurrentUser';
import ProductList from './ProductList';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  color: black;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const OrdersContainer = () => {
  const user = useCurrentUser();
  const [orders, setOrders] = useState([]);
  const [renderOrders, setRenderOrders] = useState(false);

  //GET USER ORDERS

  // const getUserId = async () => {};

  // const getData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:1337/orders?usersPermissionsUser=${user.id}`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   const data = await res.data;
  //   console.log(data);
  //   setOrders(data);
  //   console.log(orders);
  // };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:1337/orders?usersPermissionsUser=${window.localStorage.getItem(
          'user'
        )}`,
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      console.log(data);
      setOrders(data);
      console.log(orders);
    };
    getData();
  }, []);

  const getOrderDetails = () => {
    let details = [];
    for (let i = 0; i < orders.length; i++) {
      console.log(orders[i]);
    }
  };

  return (
    <Container>
      {/* {orders.map((order, index) => (
        <ListItem key={index} />
      ))} */}
      <div>
        <button onClick={() => getOrderDetails()}> CLICK</button>
      </div>
      <ProductList />
    </Container>
  );
};

export default OrdersContainer;
