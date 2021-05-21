import styled from 'styled-components';
import React, { useState } from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';
import YearSlider from '../YearSlider';
import { Slider } from '@material-ui/core';
import CheckBoxItem from '@objects/CheckBoxItem';
import {
  FilterBarWrapper,
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

const PrimaryButton = styled.a`
  background-color: ${(props) =>
    true != props.tag ? COLORS.green : COLORS.darkGreen};
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
    true != props.tag ? COLORS.purple : COLORS.orange};
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
  const productFilter = props.productFilter;
  const clearFilter = props.clearFilter;
  const secondaryFilter = props.secondaryFilter;
  const primaryFilter = props.primaryFilter;
  const toggleFilter = props.toggleFilter;

  const isActive = (tag) => {
    return tag === props.category ? true : false;
  };

  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <PrimarySection>
          <PrimaryButton href='/shoppage/'>Clear filters</PrimaryButton>
          <PrimaryButton
            tag='wine'
            href='/shoppage/products?category.category=wine'
            onClick={() => props.setCategory('wine')}
          >
            Wine
          </PrimaryButton>
          <PrimaryButton
            tag='spirits'
            href='/shoppage/products?category.category=spirit'
            onClick={() => props.setCategory('wine')}
          >
            Spirits
          </PrimaryButton>
          <PrimaryButton
            tag='beer'
            href='/shoppage/products?category.category=beer'
          >
            Beer
          </PrimaryButton>
          <PrimaryButton
            tag='soft-drinks'
            href='/shoppage/products?category.category=soft-drink'
          >
            Soft Drinks
          </PrimaryButton>
          <PrimaryButton
            tag='other'
            href='/shoppage/products?category.category=other'
          >
            Other
          </PrimaryButton>
        </PrimarySection>

        {/* WineMenu */}
        {!isActive('wine') && (
          <MenuContainer>
            <Section>
              <SectionTitle>Type</SectionTitle>
              <SecondaryButton tag='red'>Red</SecondaryButton>
              <SecondaryButton tag='white'>White</SecondaryButton>
              <SecondaryButton tag='rose'>Rose</SecondaryButton>
              <SecondaryButton tag='champagne'>Champagne</SecondaryButton>
              <SecondaryButton tag='sparkling'>Sparkling</SecondaryButton>
            </Section>
            <HiddenSection>
              <SectionTitle>Region</SectionTitle>
              <CheckBoxItem tag='argentina' />
              <CheckBoxItem tag='australia' />
              <CheckBoxItem tag='austria' />
              <CheckBoxItem tag='chile' />
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
        {isActive('spirits') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='gin'>Gin</SecondaryButton>
              <SecondaryButton tag='rum'>Rum</SecondaryButton>
              <SecondaryButton tag='tequila'>Tequila</SecondaryButton>
              <SecondaryButton tag='vodka'>Vodka</SecondaryButton>
              <SecondaryButton tag='whiskey'>Whiskey</SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* BeerMenu */}
        {isActive('beer') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='larger'>Larger</SecondaryButton>
              <SecondaryButton tag='ale'>Ale</SecondaryButton>
              <SecondaryButton tag='cider'>Cider</SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* SoftDrinksMenu */}
        {isActive('soft-drinks') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='mixers'>Mixers</SecondaryButton>
              <SecondaryButton tag='juice'>Juice</SecondaryButton>
              <SecondaryButton tag='water'>Water</SecondaryButton>
              <SecondaryButton tag='fizzy-drinks'>Fizzy Drinks</SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* OtherMenu */}
        {isActive('other') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='whatever'>Whatever</SecondaryButton>
            </Section>
          </MenuContainer>
        )}
      </FilterGrid>
    </FilterBarWrapper>
  );
};

export default FilterBar;
