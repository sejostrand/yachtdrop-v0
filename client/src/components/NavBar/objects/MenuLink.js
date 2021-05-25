import React from 'react';
import styled from 'styled-components';

const StyledMenuLink = styled.a`
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
  padding: 8px 40px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #f8694b;
    background-color: #f8faf7;
    color: black;
  }
`;

const MenuLink = (props) => {
  return (
    <StyledMenuLink href={props.href} onClick={props.toTag}>
      {props.children}
    </StyledMenuLink>
  );
};

export default MenuLink;
