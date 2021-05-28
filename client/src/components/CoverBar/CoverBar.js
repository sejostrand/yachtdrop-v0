import React from 'react';
import styled from 'styled-components';

//objects
import WINE from '@assets/img/wine-cover.jpg';
import SPIRIT from '@assets/img/board.jpg';
import BEER from '@assets/img/beer-cover.jpg';
import SOFTDRINK from '@assets/img/sea.jpg';
import OTHER from '@assets/img/sea.jpg';
import Caption from './objects/Caption';

const StyledCoverBar = styled.div`
  width: 100%;
`;

const CoverImg = styled.div`
  display: flex;
  background-image: url(${(props) => props.img});
  background-size: 100% auto;
  background-position-y: 70%;
  width: 100%;
  height: 13vw;
  transition: ease-in-out 0.5s;
`;

const CoverBar = () => {
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

  const getImg = () => {
    const params = new ParamsFilter(window.location.search);
    if (params.category !== null) {
      switch (params.category[0]) {
        case 'wine':
          return WINE;
        case 'spirit':
          return SPIRIT;
        case 'beer':
          return BEER;
        case 'sof-drink':
          return SOFTDRINK;
        case 'other':
          return OTHER;
        default:
          return OTHER;
      }
    } else {
      return OTHER;
    }
  };

  return (
    <StyledCoverBar>
      <Caption />
      <CoverImg img={getImg()} />
    </StyledCoverBar>
  );
};

export default CoverBar;
