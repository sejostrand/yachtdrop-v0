import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/theme/theme';

const StyledSortBy = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  color: black;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

const SortTitle = styled.div`
  display: flex;
  margin: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const SortButton = styled.a`
  background-color: ${(props) =>
    props.checkSort(props.field1) || props.checkSort(props.field2)
      ? COLORS.darkGreen
      : COLORS.green};
  color: white;
  padding: 5px 20px;

  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 5px 10px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  align-self: space-between;
  display: flex;

  &:hover {
    opacity: 0.8;
  }
`;

const SortBy = (props) => {
  class ParamsFilter {
    constructor(queryString) {
      this.input = queryString;
      this.category = queryString.match(/(?<=category.category=)(.*?)(?=\&)/g);
      this.subCategory = queryString.match(
        /(?<=sub_category.subCategory=)(.*?)(?=&)/g
      );
      this.categoryTags = queryString.match(
        /(?<=category_tags.categoryTag=)(.*?)(?=&)/g
      );
      this.sort = queryString.match(/(?<=_sort=)(.*?)(?=&)/g);
    }

    clear() {
      this.category = null;
      this.subCategory = null;
      this.categoryTags = null;
      this.sort = null;
    }

    getValues() {
      console.log(this.getQueryString());
      console.log(this.category);
      console.log(this.subCategory);
      console.log(this.categoryTags);
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
      if (this.sort == `${value}:ASC`) {
        this.sort = `${value}:DESC`;
      } else if (this.sort == `${value}:DESC`) {
        this.sort = null;
      } else {
        this.sort = `${value}:ASC`;
      }
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

  const toggleSort = (value) => {
    const params = new ParamsFilter(document.location.search);
    params.setSort(value);
    return params.getQueryString();
  };

  const checkSort = (value) => {
    const params = new ParamsFilter(document.location.search);
    return params.sort == value;
  };

  return (
    <StyledSortBy>
      <SortTitle>Sort</SortTitle>
      <SortButton
        color='#03b29a'
        field1='display:ASC'
        field2='display:DESC'
        checkSort={checkSort}
        href={`/shoppage/products?${toggleSort('display')}`}
      >
        Alphabetical {checkSort('display:ASC') ? '△' : ''}
        {checkSort('display:DESC') ? '▽' : ''}
      </SortButton>
      <SortButton
        color='#03b29a'
        field1='price:ASC'
        field2='price:DESC'
        checkSort={checkSort}
        href={`/shoppage/products?${toggleSort('price')}`}
      >
        Price {checkSort('price:ASC') ? '△' : ''}
        {checkSort('price:DESC') ? '▽' : ''}
      </SortButton>
    </StyledSortBy>
  );
};

export default SortBy;
