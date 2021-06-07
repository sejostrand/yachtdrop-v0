import React, { useState } from 'react';
import styled from 'styled-components';
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

const MenuButton = styled.div`
  background-color: ${(props) =>
    props.menuState === props.tag ? COLORS.darkGreen : COLORS.green};
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
  const [menuState, setMenuState] = useState('details');

  return (
    <>
      <BodyWrapper>
        <Container>
          <SubMenu>
            <MenuButton
              menuState={menuState}
              tag='details'
              onClick={() => setMenuState('details')}
            >
              Details
            </MenuButton>
            <MenuButton
              menuState={menuState}
              tag='orders'
              onClick={() => setMenuState('orders')}
            >
              Orders
            </MenuButton>
            <MenuButton
              menuState={menuState}
              tag='wallet'
              onClick={() => setMenuState('wallet')}
            >
              Wallet
            </MenuButton>
          </SubMenu>
          {menuState === 'details' && <DetailsContainer />}
          {menuState === 'orders' && <OrdersContainer />}
          {menuState === 'wallet' && <WalletContainer />}
        </Container>
      </BodyWrapper>
    </>
  );
};

export default Profile;
