import styled from 'styled-components';
import React, { useState } from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';
import YearSlider from '../YearSlider';
import { Slider } from '@material-ui/core';
import CheckBoxItem from '@objects/CheckBoxItem';
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
import ShopPage from '../../views/ShopPage/ShopPage.js';

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  position: relative;
  float: left;
  z-index: 3;
  overflow: hidden;
  max-width: ${(props) => (props.filterBar ? '500px' : '0')};
  transition: all 0.2s;
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
  margin: 4px;
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



const FilterBar = (props) => {
  let hello = [
    {
      value: 1989,
      label: '1989',
    },
    {
      value: 2000,
      label: '2000',
    },
    {
      value: 2003,
      label: '2003',
    },
    {
      value: 2004,
      label: '2004',
    },
  ];

  const [val, setVal] = useState([20, 40]);
  const updateVal = (e, data) => {
    setVal(data);
  };

  const [filterBar, setFilterBar] = useState(true);

  const getCategory = (value) => {
    const params = new URLSearchParams(document.location.search);
    if (params.get('category.category') != value) {
      params.set('category.category', value);
      params.delete('sub_category.subCategory');
    } else {
      params.delete('category.category');
    }
    console.log(params.toString());
    return params.toString();
  };

  const getSubCategory = (value) => {
    const params = new URLSearchParams(document.location.search);
    params.get('sub_category.subCategory') != value
      ? params.set('sub_category.subCategory', value)
      : params.delete('sub_category.subCategory');
    console.log(params.toString());
    return params.toString();
  };


  const checkCategory = (tag) => {
    const params = new URLSearchParams(document.location.search);
    return params.get('category.category') != tag;
  };

  const checkSubCategory = (tag) => {
    const params = new URLSearchParams(document.location.search);
    return params.get('sub_category.subCategory') != tag;
  };

  const getTags = (value) => {
    const params = new URLSearchParams(document.location.search);
    params.get('category_tags.categoryTag') != value
      ? params.append('category_tags.categoryTag', value)
      : params.delete('category_tags.categoryTag');
    console.log(params.toString());
    return params.toString();
  };

  

  return (
    <FilterBarWrapper filterBar={filterBar}>
      <BarButton filterBar={filterBar} setFilterBar={setFilterBar} />
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <PrimarySection>
          <PrimaryButton href='/shoppage/' tag='' checkCategory={checkCategory}>
            Clear filters
          </PrimaryButton>
          <PrimaryButton
            tag='wine'
            checkCategory={checkCategory}
            href={`/shoppage/products?${getCategory('wine')}`}
          >
            Wine
          </PrimaryButton>
          <PrimaryButton
            tag='spirit'
            checkCategory={checkCategory}
            href={`/shoppage/products?${getCategory('spirit')}`}
          >
            Spirits
          </PrimaryButton>
          <PrimaryButton
            tag='beer'
            checkCategory={checkCategory}
            href={`/shoppage/products?${getCategory('beer')}`}
          >
            Beer
          </PrimaryButton>
          <PrimaryButton
            tag='soft-drink'
            checkCategory={checkCategory}
            href={`/shoppage/products?${getCategory('soft-drink')}`}
          >
            Soft Drinks
          </PrimaryButton>
          <PrimaryButton
            tag='other'
            checkCategory={checkCategory}
            href={`/shoppage/products?${getCategory('other')}`}
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
                href={`/shoppage/products?${getSubCategory('red')}`}
              >
                Red
              </SecondaryButton>
              <SecondaryButton
                tag='white'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('white')}`}
              >
                White
              </SecondaryButton>
              <SecondaryButton
                tag='rose'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('rose')}`}
              >
                Rose
              </SecondaryButton>
              <SecondaryButton
                tag='champagne'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('champagne')}`}
              >
                Champagne
              </SecondaryButton>
              <SecondaryButton
                tag='sparkling'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('sparkling')}`}
              >
                Sparkling
              </SecondaryButton>
            </Section>
            <HiddenSection>
              <SectionTitle>Region</SectionTitle>
              <CheckBoxItem tag='argentina' />
              <CheckBoxItem tag='australia' />
              <CheckBoxItem tag='austria' />
              <CheckBoxItem tag='chile' />
              <a href={`/shoppage/products?${getTags('chile')}`}>chile</a>
              <br />
              <a href={`/shoppage/products?${getTags('france')}`}>france</a>
              <CheckBoxItem tag='france' />
              <CheckBoxItem tag='hungary' />
              <CheckBoxItem tag='italy' />
              <CheckBoxItem tag='new zealand' />
              <CheckBoxItem tag='south africa' />
              <CheckBoxItem tag='spain' />
              <CheckBoxItem tag='usa' />
            </HiddenSection>

            <HiddenSection>
              <SectionTitle>Variety</SectionTitle>
              <CheckBoxItem tag='alsace' />
              <CheckBoxItem tag='bordeaux' />
              <CheckBoxItem tag='cava' />
              <CheckBoxItem tag='chardonanay' />
              <CheckBoxItem tag='cotes de provence' />
              <CheckBoxItem tag='emporda' />
              <CheckBoxItem tag='fronsac' />
              <CheckBoxItem tag='margaux' />
              <CheckBoxItem tag='pauillac' />
              <CheckBoxItem tag='penedes' />
              <CheckBoxItem tag='pessac-leognan' />
              <CheckBoxItem tag='pomeral' />
              <CheckBoxItem tag='priorat' />
              <CheckBoxItem tag='provence' />
              <CheckBoxItem tag='rhone' />
              <CheckBoxItem tag='ria baixas' />
              <CheckBoxItem tag='ribera del duero' />
              <CheckBoxItem tag='riesling' />
              <CheckBoxItem tag='rioja' />
              <CheckBoxItem tag='rueda' />
              <CheckBoxItem tag='saint emilion' />
              <CheckBoxItem tag='saint estephe' />
              <CheckBoxItem tag='saint julien' />
              <CheckBoxItem tag='sauternes' />
              <CheckBoxItem tag='semillon' />
              <CheckBoxItem tag='tokaji' />
            </HiddenSection>

            <HiddenSection>
              <SectionTitle>Vintage</SectionTitle>
              <CheckBoxItem tag='1989' />
              <CheckBoxItem tag='2000' />
              <CheckBoxItem tag='2003' />
              <CheckBoxItem tag='2004' />
              <CheckBoxItem tag='2005' />
              <CheckBoxItem tag='2006' />
              <CheckBoxItem tag='2007' />
              <CheckBoxItem tag='2008' />
              <CheckBoxItem tag='2009' />
              <CheckBoxItem tag='2010' />
              <CheckBoxItem tag='2011' />
              <CheckBoxItem tag='2012' />
              <CheckBoxItem tag='2013' />
              <CheckBoxItem tag='2014' />
              <CheckBoxItem tag='2015' />
              <CheckBoxItem tag='2016' />
              <CheckBoxItem tag='2017' />
              <CheckBoxItem tag='2018' />
              <CheckBoxItem tag='2019' />
              <CheckBoxItem tag='NV' />
            </HiddenSection>

            <HiddenSection>
              <SectionTitle>Volume</SectionTitle>
              <CheckBoxItem tag='1.5L' />
              <CheckBoxItem tag='75cl' />
              <CheckBoxItem tag='50cl' />
              <CheckBoxItem tag='37.5cl' />
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
                href={`/shoppage/products?${getSubCategory('gin')}`}
              >
                Gin
              </SecondaryButton>
              <SecondaryButton
                tag='rum'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('rum')}`}
              >
                Rum
              </SecondaryButton>
              <SecondaryButton
                tag='tequila'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('tequila')}`}
              >
                Tequila
              </SecondaryButton>
              <SecondaryButton
                tag='vodka'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('vodka')}`}
              >
                Vodka
              </SecondaryButton>
              <SecondaryButton
                tag='whiskey'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('whiskey')}`}
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
                href={`/shoppage/products?${getSubCategory('larger')}`}
              >
                Larger
              </SecondaryButton>
              <SecondaryButton
                tag='ale'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('ale')}`}
              >
                Ale
              </SecondaryButton>
              <SecondaryButton
                tag='cider'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('cider')}`}
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
                href={`/shoppage/products?${getSubCategory('mixer')}`}
              >
                Mixers
              </SecondaryButton>
              <SecondaryButton
                tag='juice'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('juice')}`}
              >
                Juice
              </SecondaryButton>
              <SecondaryButton
                tag='water'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('water')}`}
              >
                Water
              </SecondaryButton>
              <SecondaryButton
                tag='fizzy-drinks'
                checkSubCategory={checkSubCategory}
                href={`/shoppage/products?${getSubCategory('fizzy-drink')}`}
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
                href={`/shoppage/products?${getSubCategory('whatever')}`}
              >
                Whatever
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}
      </FilterGrid>
    </FilterBarWrapper>
  );
};

export default FilterBar;
