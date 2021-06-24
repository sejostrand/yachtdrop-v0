import React from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '@assets/utils/CurrentUser';

const StyledCaption = styled.div`
  background-color: black;
  color: white;
  font-size: 10px;
  text-align: center;
  padding-top: 2px;
  letter-spacing: 2px;
  height: 19px;
  width: 100%;
`;

const Caption = () => {
  const user = useCurrentUser();
  return (
    <StyledCaption>
      {user.isAuthenticated
        ? `Welcome ${user.firstName}, happy sailing!`
        : 'Sign up or log in and save your favourite products!'}
    </StyledCaption>
  );
};

export default Caption;
