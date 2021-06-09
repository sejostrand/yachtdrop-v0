import React from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import useMediaQuery from '@assets/utils/useMediaQuery';

const Link = styled.a`
  color: ${(props) => (props.mobile ? 'white' : 'black')};
  background-color: ${(props) => (props.mobile ? 'none' : 'white')};
  border-bottom: ${(props) => (props.mobile ? 'none' : '3px solid #f8694b')};
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

const ShopLink = () => {
  const user = useCurrentUser();
  const matches1 = useMediaQuery('(min-width: 600px)');
  const matches = useMediaQuery('(min-width: 1141px)');

  return (
    <>
      {!matches && (
        <Link mobile={matches1} href='/shoppage'>
          Shop
        </Link>
      )}
    </>
  );
};

export default ShopLink;
