import React from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';

const StyledLoginLink = styled.a`
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  height: 2rem;
  border-radius: 8px;
  padding: 8px 20px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #f8694b;
    background-color: #f8faf7;
    color: black;
  }
`;

const LoginLink = () => {
  const user = useCurrentUser();

  return (
    <>
      {!user.isAuthenticated && (
        <StyledLoginLink href='/login'>Log in</StyledLoginLink>
      )}
    </>
  );
};

export default LoginLink;
