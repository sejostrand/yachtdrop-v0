import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import { callApi } from '../utils';
import { COLORS } from '@assets/theme/theme';

const ButtonWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 8px 20px 5px 20px;
  border-radius: 8px;
  background-color: white;
  color: ${COLORS.orange};
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 2rem;
  border-bottom: 3px solid ${COLORS.orange};

  &:hover {
    background-color: ${COLORS.orange};
    color: white;
  }
`;

const LogOutButton = () => {
  const dispatch = useDispatchCurrentUser();
  const user = useCurrentUser();

  const handleLogout = async () => {
    await callApi('/logout', 'POST');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      {user.isAuthenticated && (
        <ButtonWrapper onClick={handleLogout}>Logout</ButtonWrapper>
      )}
    </>
  );
};

export default LogOutButton;
