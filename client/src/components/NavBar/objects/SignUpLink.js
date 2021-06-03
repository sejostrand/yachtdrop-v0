import React from 'react';
import styled from 'styled-components';
import SignUp from '../../../views/SignUp/SignUp';
import { COLORS } from '@assets/theme/theme';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';

const StyledSignUpLink = styled.a`
  border-bottom: 3px solid #f8694b;
  background-color: #f8faf7;
  color: #f8694b;
  margin: 5px 3px;
  height: 2rem;
  justify-content: space-around;
  font-family: 'Calibri';
  text-align: center;
  padding: 8px 20px 5px 20px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 8px;

  &:hover {
    background-color: ${COLORS.orange};
    color: white;
  }
`;

const SignUpLink = () => {
  const user = useCurrentUser();

  return (
    <>
      {!user.isAuthenticated && (
        <StyledSignUpLink href='/signup'>Sign up</StyledSignUpLink>
      )}
    </>
  );
};

export default SignUpLink;
