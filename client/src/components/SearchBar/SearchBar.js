import { useState, useEffect } from 'react';
import styled from 'styled-components';
import History from '@components/History';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
//import SearchInput from './objects/SearchInput';

const SearchInput = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 100%;
  display: inline-flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
  justify-self: center;
  display: inline-block;

  :focus {
    border: none;
  }
`;

const StyledSearchBar = styled.div`
  padding: 0px 25px;
  width: 100vw;
  background-color: white;
  display: flex;
  position: sticky;
  top: 52px;
  width: 100%;
  z-index: 9;
  box-shadow: 0px 0px 7px;
  justify-content: space-between;
`;

const CartLink = styled.a`
  background-color: #f8694b;
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 20px;
  margin: 5px;
  height: 2rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
`;

const SearchBar = (props) => {
  class ParamsFilter {
    constructor(queryString) {
      this.category = queryString.match(/(?<=category.category=)(.*?)(?=\&)/g);
      this.subCategory = queryString.match(
        /(?<=sub_category.subCategory=)(.*?)(?=&)/g
      );
      this.categoryTags = queryString.match(
        /(?<=category_tags.categoryTag=)(.*?)(?=&)/g
      );
      this.sort = queryString.match(/(?<=_sort=)(.*?)(?=&)/g);
      this.search = queryString.match(/(?<=fullDescription=)(.*?)(?=\&)/g);
    }

    clear() {
      this.category = null;
      this.subCategory = null;
      this.categoryTags = null;
      this.sort = null;
    }

    setCategory(value) {
      if (this.category == value) {
        this.category = null;
        this.subCategory = null;
        this.categoryTags = null;
      } else {
        this.category = value;
        this.subCategory = null;
        this.categoryTags = null;
      }
    }

    setSubCategory(value) {
      if (this.subCategory == value) {
        this.subCategory = null;
      } else {
        this.subCategory = value;
      }
    }

    setCategoryTag(value) {
      if (this.categoryTags == null) {
        this.categoryTags = [value];
      } else if (this.categoryTags.includes(value)) {
        this.categoryTags.splice(this.categoryTags.indexOf(value), 1);
      } else {
        this.categoryTags.push(value);
      }
    }

    setSort(value) {
      if (this.sort == `${value}:ASC&`) {
        this.sort = `${value}:DSC&`;
      } else if (this.sort == `${value}:DSC&`) {
        this.sort = null;
      } else {
        this.sort = `${value}:ASC&`;
      }
    }

    setSearch(value) {
      this.search = value;
    }

    getQueryString() {
      let result = '';
      if (this.category != null) {
        result = result.concat(`category.category=${this.category}&`);
      }
      if (this.subCategory != null) {
        result = result.concat(`sub_category.subCategory=${this.subCategory}&`);
      }
      if (this.categoryTags != null) {
        this.categoryTags.forEach(
          (tag) => (result = result.concat(`category_tags.categoryTag=${tag}&`))
        );
      }
      if (this.sort != null) {
        result = result.concat(`_sort=${this.sort}&`);
      }
      return result;
    }
  }

  return (
    <StyledSearchBar>
      <LocationTag />
      {!props.disabled && (
        <SearchInput
          type='text'
          placeholder='What can we help you find?'
          onChange={(e) => props.setSearchInput(e.target.value)}
        />
      )}
      <CartLink onClick={() => props.setShowCart(!props.showCart)}>
        Cart
      </CartLink>
    </StyledSearchBar>
  );
};

export default SearchBar;
