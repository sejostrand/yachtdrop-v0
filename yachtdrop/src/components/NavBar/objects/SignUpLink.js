import React from 'react';
import styled from 'styled-components';
import SignUp from '../../../views/SignUp/SignUp'

const StyledSignUpLink = styled.a`
  border-bottom: 3px solid #f8694b;
  background-color: #f8faf7;
  color: #f8694b;
  margin: 5px;

  height: 2rem;
  align-self: center;
  justify-content: space-around;
  font-family: 'Calibri';
  text-align: center;
  padding: 8px 20px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 8px;
`;

const SignUpLink = () => {
  return <StyledSignUpLink href="/signup">Sign up</StyledSignUpLink>;
};

export default SignUpLink;
