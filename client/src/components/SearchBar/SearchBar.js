import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import History from '@components/History';
import { COLORS } from '@assets/theme/theme';
import { CartContext } from '@assets/utils/CartContext';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
import CART from '@assets/media/cart.png';
//import SearchInput from './objects/SearchInput';

const SearchInput = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 100%;
  display: flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
  justify-self: center;

  :focus {
    border: none;
  }
`;

const StyledSearchBar = styled.div`
  padding: 0px 25px;
  width: 100vw;
  background-color: white;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 52px;
  width: 100%;
  z-index: 9;
  box-shadow: 0px 0px 7px;
  justify-content: space-between;
  overflow-x: hidden;
`;

const CartLink = styled.a`
  display: flex;
  flex-flow: row nowrap;
  background-color: #f8694b;
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 10px;
  height: 2rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
`;

const CartIcon = styled.img`
  height: 20px;
  width: auto;
  transform: translateY(-2px);
  margin-right: 10px;
  display: flex;
`;

const Number = styled.div`
  justify-content: center;
  display: flex;
  height: 20px;
  width: 20px;
  font-size: 15px;
  border-radius: 5px;
  background-color: white;
  color: ${COLORS.orange};
  transform: translateY(-2px);
  padding-bottom: 1px;
  letter-spacing: 0.5px;
`;

const SearchBar = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  const convertSearch = (input) => {
    const words = input.split(' ');
    let string = '';
    words.forEach((word) => (string = string.concat(`${word}+`)));
    return string.slice(0, -1);
  };

  return (
    <StyledSearchBar>
      <LocationTag />
      {!props.disabled && (
        <SearchInput
          id='search'
          type='text'
          placeholder='&#x1F50E;&#xFE0E; What can we help you find?'
          onChange={(e) => props.setSearchInput(convertSearch(e.target.value))}
        />
      )}
      <CartLink
        id='cartLink'
        onClick={() => props.setShowCart(!props.showCart)}
      >
        <CartIcon src={CART} />
        <Number>{totalItems}</Number>
      </CartLink>
    </StyledSearchBar>
  );
};

export default SearchBar;
