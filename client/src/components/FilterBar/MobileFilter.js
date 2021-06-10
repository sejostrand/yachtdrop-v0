import styled from 'styled-components';
import React, { useState } from 'react';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';
import { Slider } from '@material-ui/core';
import {
  BlackSection,
  FilterGrid,
  FilterTitle,
  PrimarySection,
  Section,
  SectionTitle,
  MenuContainer,
  CheckboxLabel,
  HiddenSection,
} from './FilterBar.styles';
import FilterToggle from './objects/FilterToggle';

const FilterBarWrapper = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  flex-flow: column nowrap;
  left: 0;
  position: fixed;
  z-index: ${(props) => (props.filterBar ? '4' : '1')};
  background-color: ${COLORS.white};
  max-width: ${(props) => (props.filterBar ? '600px' : '2px')};
  transition: all 0.1s;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: black;
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: black;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    width: 3px;
  }
`;

const PrimaryButton = styled.a`
  background-color: ${(props) =>
    props.checkCategory(props.tag) ? COLORS.green : COLORS.darkGreen};
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 3px;
  width: 200px;

  &:hover {
    opacity: 0.8;
  }
`;

const SecondaryButton = styled.a`
  background-color: ${(props) =>
    props.checkSubCategory(props.tag) ? COLORS.purple : COLORS.orange};
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const CheckBoxItem = styled.a`
  background-color: ${(props) =>
    props.checkCategoryTag(props.tag) ? 'black' : 'none'};
  color: ${(props) => (props.checkCategoryTag(props.tag) ? 'white' : 'black')};
  display: flex;
  text-transform: capitalize;
  text-decoration: none;
  width: fit-content;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 2px;
  font-size: 12px;
  margin: 2px;

  &:hover {
    text-decoration: ${(props) =>
      props.checkCategoryTag(props.tag) ? 'none' : 'underline'};
    opacity: ${(props) => (props.checkCategoryTag(props.tag) ? '0.8' : 'none')};
  }
`;

const LabelContainer = styled.div`
  position: ${(props) => (props.filterBar ? 'absolute' : 'absolute')};
  transform: ${(props) =>
    props.filterBar ? 'translate(185px, 175px)' : 'translate(-50px, 175px)'};
  z-index: 4;
`;

const FilterLabel = styled.div`
  color: ${COLORS.lightGray};
  font-size: 18px;
  letter-spacing: 5px;
  transform: rotate(-90deg);
`;

const MobileFilter = (props) => {
  //FILTER MENU TAGS
  const CategoryList = ['wine', 'spirit', 'beer', 'soft-drinks', 'other'];

  //WINE
  const WineSubCategoryList = ['red', 'white', 'champagne'];
  const Region = ['argentina', 'australia', 'austria', 'chile', 'france'];
  const Variety = ['merlot', 'rioja'];
  const Vintage = ['1990', '2003'];
  const Volume = ['700ml', '1L'];

  //SPIRITS
  const SpiritSubCategoryList = ['vodka', 'gin'];

  //NEW CODE

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
      this.search = queryString.match(/(?<=search\?_q=)(.*?)(?=\&)/g);
    }

    clear() {
      this.category = null;
      this.subCategory = null;
      this.categoryTags = null;
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
      this.clear();
      this.search = value;
    }

    getQueryString() {
      let result = 'products?';
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

  const checkCategory = (tag) => {
    const params = new ParamsFilter(document.location.search);
    return params.category != tag;
  };

  const checkSubCategory = (tag) => {
    const params = new ParamsFilter(document.location.search);
    return params.subCategory != tag;
  };

  const checkCategoryTag = (tag) => {
    const params = new ParamsFilter(document.location.search);
    return params.categoryTags == null
      ? null
      : params.categoryTags.includes(tag);
  };

  const toggleCategory = (value) => {
    const params = new ParamsFilter(document.location.search);
    params.setCategory(value);
    return params.getQueryString();
  };

  const toggleSubCategory = (value) => {
    const params = new ParamsFilter(document.location.search);
    params.setSubCategory(value);
    return params.getQueryString();
  };

  const toggleCategoryTag = (value) => {
    const params = new ParamsFilter(document.location.search);
    params.setCategoryTag(value);
    return params.getQueryString();
  };

  return (
    <>
      <FilterBarWrapper filterBar={props.filterBar}>
        <BlackSection>.</BlackSection>
        <FilterGrid>
          <FilterTitle>Browse</FilterTitle>
          <PrimarySection>
            <PrimaryButton
              tag=''
              href={`/shoppage/`}
              checkCategory={checkCategory}
            >
              Clear filters
            </PrimaryButton>
            <PrimaryButton
              tag='wine'
              checkCategory={checkCategory}
              href={`/shoppage/${toggleCategory('wine')}`}
            >
              Wine
            </PrimaryButton>
            <PrimaryButton
              tag='spirit'
              checkCategory={checkCategory}
              href={`/shoppage/${toggleCategory('spirit')}`}
            >
              Spirits
            </PrimaryButton>
            <PrimaryButton
              tag='beer'
              checkCategory={checkCategory}
              href={`/shoppage/${toggleCategory('beer')}`}
            >
              Beer
            </PrimaryButton>
            <PrimaryButton
              tag='soft-drink'
              checkCategory={checkCategory}
              href={`/shoppage/${toggleCategory('soft-drink')}`}
            >
              Soft Drinks
            </PrimaryButton>
            <PrimaryButton
              tag='other'
              checkCategory={checkCategory}
              href={`/shoppage/${toggleCategory('other')}`}
            >
              Other
            </PrimaryButton>
          </PrimarySection>

          {/* WineMenu */}
          {!checkCategory('wine') && (
            <MenuContainer>
              <Section>
                <SectionTitle>Type</SectionTitle>
                <SecondaryButton
                  tag='red'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('red')}`}
                >
                  Red
                </SecondaryButton>
                <SecondaryButton
                  tag='white'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('white')}`}
                >
                  White
                </SecondaryButton>
                <SecondaryButton
                  tag='rose'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('rose')}`}
                >
                  Rose
                </SecondaryButton>
                <SecondaryButton
                  tag='champagne'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('champagne')}`}
                >
                  Champagne
                </SecondaryButton>
                <SecondaryButton
                  tag='sparkling'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('sparkling')}`}
                >
                  Sparkling
                </SecondaryButton>
              </Section>

              <HiddenSection>
                <SectionTitle>Region</SectionTitle>
                {Region.map((tag) => (
                  <CheckBoxItem
                    tag={tag}
                    checkCategoryTag={checkCategoryTag}
                    href={`/shoppage/${toggleCategoryTag(tag)}`}
                  >
                    {tag}
                  </CheckBoxItem>
                ))}
              </HiddenSection>

              <HiddenSection>
                <SectionTitle>Variety</SectionTitle>
                {Variety.map((tag) => (
                  <CheckBoxItem
                    tag={tag}
                    checkCategoryTag={checkCategoryTag}
                    href={`/shoppage/${toggleCategoryTag(tag)}`}
                  >
                    {tag}
                  </CheckBoxItem>
                ))}
              </HiddenSection>

              <HiddenSection>
                <SectionTitle>Vintage</SectionTitle>
                {Vintage.map((tag) => (
                  <CheckBoxItem
                    tag={tag}
                    checkCategoryTag={checkCategoryTag}
                    href={`/shoppage/${toggleCategoryTag(tag)}`}
                  >
                    {tag}
                  </CheckBoxItem>
                ))}
              </HiddenSection>

              <HiddenSection>
                <SectionTitle>Volume</SectionTitle>
                {Volume.map((tag) => (
                  <CheckBoxItem
                    tag={tag}
                    checkCategoryTag={checkCategoryTag}
                    href={`/shoppage/${toggleCategoryTag(tag)}`}
                  >
                    {tag}
                  </CheckBoxItem>
                ))}
              </HiddenSection>
            </MenuContainer>
          )}

          {/* SpiritsMenu */}
          {!checkCategory('spirit') && (
            <MenuContainer>
              <SectionTitle>Type</SectionTitle>
              <Section>
                <SecondaryButton
                  tag='gin'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('gin')}`}
                >
                  Gin
                </SecondaryButton>
                <SecondaryButton
                  tag='rum'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('rum')}`}
                >
                  Rum
                </SecondaryButton>
                <SecondaryButton
                  tag='tequila'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('tequila')}`}
                >
                  Tequila
                </SecondaryButton>
                <SecondaryButton
                  tag='vodka'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('vodka')}`}
                >
                  Vodka
                </SecondaryButton>
                <SecondaryButton
                  tag='whiskey'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('whiskey')}`}
                >
                  Whiskey
                </SecondaryButton>
              </Section>
            </MenuContainer>
          )}

          {/* BeerMenu */}
          {!checkCategory('beer') && (
            <MenuContainer>
              <SectionTitle>Type</SectionTitle>
              <Section>
                <SecondaryButton
                  tag='larger'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('larger')}`}
                >
                  Larger
                </SecondaryButton>
                <SecondaryButton
                  tag='ale'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('ale')}`}
                >
                  Ale
                </SecondaryButton>
                <SecondaryButton
                  tag='cider'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('cider')}`}
                >
                  Cider
                </SecondaryButton>
              </Section>
            </MenuContainer>
          )}

          {/* SoftDrinksMenu */}
          {!checkCategory('sot-drink') && (
            <MenuContainer>
              <SectionTitle>Type</SectionTitle>
              <Section>
                <SecondaryButton
                  tag='mixers'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('mixer')}`}
                >
                  Mixers
                </SecondaryButton>
                <SecondaryButton
                  tag='juice'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('juice')}`}
                >
                  Juice
                </SecondaryButton>
                <SecondaryButton
                  tag='water'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('water')}`}
                >
                  Water
                </SecondaryButton>
                <SecondaryButton
                  tag='fizzy-drinks'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('fizzy-drink')}`}
                >
                  Fizzy Drinks
                </SecondaryButton>
              </Section>
            </MenuContainer>
          )}

          {/* OtherMenu */}
          {!checkCategory('other') && (
            <MenuContainer>
              <SectionTitle>Type</SectionTitle>
              <Section>
                <SecondaryButton
                  tag='whatever'
                  checkSubCategory={checkSubCategory}
                  href={`/shoppage/${toggleSubCategory('whatever')}`}
                >
                  Whatever
                </SecondaryButton>
              </Section>
            </MenuContainer>
          )}
        </FilterGrid>
      </FilterBarWrapper>
      <FilterToggle
        filterBar={props.filterBar}
        setFilterBar={props.setFilterBar}
      />
    </>
  );
};

export default MobileFilter;
