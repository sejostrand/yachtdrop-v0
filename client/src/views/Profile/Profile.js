import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useCurrentUser } from '@assets/utils/CurrentUser';
import { COLORS } from '@assets/theme/theme';

import DetailsContainer from './objects/DetailsContainer';
import OrdersContainer from './objects/OrdersContainer';
import WalletContainer from './objects/WalletContainer';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  background: ${COLORS.white};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
`;

const SubMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuButton = styled.a`
  background-color: ${(props) =>
    props.menuState ? COLORS.darkGreen : COLORS.green};
  padding: 5px 20px;
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 5px 10px;
  height: fit-content;
  border-radius: 10px;
  cursor: pointer;
  align-self: space-between;
  display: flex;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled.input`
  margin: 10px 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: ${COLORS.orange};
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [renderOrders, setRenderOrders] = useState(false);

  const checkMenu = (input) => {
    window.location.href.toString().match(`/${input}/g`);
  };

  const log = () => console.log(orders);

  useEffect(() => {
    const url = `http://localhost:1337/orders?usersPermissionsUser=${window.localStorage.getItem(
      'user'
    )}&_sort=createdAt:DESC`;
    const getData = axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setOrders(JSON.parse(JSON.stringify(response.data)));
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(
  //       `http://localhost:1337/orders?usersPermissionsUser=${window.localStorage.getItem(
  //         'user'
  //       )}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     const data = await res.data;
  //     setOrders(JSON.stringify(data));
  //     console.log(data);

  //     console.log(orders);
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <BodyWrapper>
        <Container>
          <SubMenu>
            <MenuButton
              menuState={
                window.location.href.toString().match(/details/g) ? true : false
              }
              tag='details'
              href='/profile/details'
              // onClick={() => setMenuState('details')}
            >
              Details
            </MenuButton>
            <MenuButton
              menuState={
                window.location.href.toString().match(/orders/g) ? true : false
              }
              tag='orders'
              href='/profile/orders'
              //onClick={() => setMenuState('orders')}
            >
              Orders
            </MenuButton>
          </SubMenu>
          {window.location.href.toString().match(/details/g) == 'details' && (
            <DetailsContainer />
          )}
          {window.location.href.toString().match(/orders/g) == 'orders' && (
            <OrdersContainer log={log} orders={orders} />
          )}
        </Container>
      </BodyWrapper>
    </>
  );
};

export default Profile;
