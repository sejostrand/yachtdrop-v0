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

const PrimaryButton = styled.div`
  background-color: ${(props) => (false ? COLORS.green : COLORS.darkGreen)};
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

const SecondaryButton = styled.div`
  background-color: ${(props) => (false ? COLORS.purple : COLORS.orange)};
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

  // const isActive = (tag) => {
  //   return productFilter.primaryTag[0] == tag ? true : false;
  // };

  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <PrimarySection>
          <PrimaryButton onClick={() => null}>Clear filters</PrimaryButton>
          <PrimaryButton tag='wine' onClick={() => null}>
            Wine
          </PrimaryButton>
          <PrimaryButton tag='spirits' onClick={() => null}>
            Spirits
          </PrimaryButton>
          <PrimaryButton tag='beer' onClick={() => null}>
            Beer
          </PrimaryButton>
          <PrimaryButton tag='soft-drinks' onClick={() => null}>
            Soft Drinks
          </PrimaryButton>
          <PrimaryButton tag='other' onClick={() => null}>
            Other
          </PrimaryButton>
        </PrimarySection>

        {/* WineMenu */}
        {true && (
          <MenuContainer>
            <Section>
              <SectionTitle>Type</SectionTitle>
              <SecondaryButton tag='red' onClick={() => null}>
                Red
              </SecondaryButton>
              <SecondaryButton tag='white' onClick={() => null}>
                White
              </SecondaryButton>
              <SecondaryButton tag='rose' onClick={() => null}>
                Rose
              </SecondaryButton>
              <SecondaryButton tag='champagne' onClick={() => null}>
                Champagne
              </SecondaryButton>
              <SecondaryButton tag='sparkling' onClick={() => null}>
                Sparkling
              </SecondaryButton>
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
        {false && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='gin' onClick={() => null}>
                Gin
              </SecondaryButton>
              <SecondaryButton tag='rum' onClick={() => null}>
                Rum
              </SecondaryButton>
              <SecondaryButton tag='tequila' onClick={() => null}>
                Tequila
              </SecondaryButton>
              <SecondaryButton tag='vodka' onClick={() => null}>
                Vodka
              </SecondaryButton>
              <SecondaryButton tag='whiskey' onClick={() => null}>
                Whiskey
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* BeerMenu */}
        {false && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='larger' onClick={() => null}>
                Larger
              </SecondaryButton>
              <SecondaryButton tag='ale' onClick={() => null}>
                Ale
              </SecondaryButton>
              <SecondaryButton tag='cider' onClick={() => null}>
                Cider
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* SoftDrinksMenu */}
        {false && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='mixers' onClick={() => null}>
                Mixers
              </SecondaryButton>
              <SecondaryButton tag='juice' onClick={() => null}>
                Juice
              </SecondaryButton>
              <SecondaryButton tag='water' onClick={() => null}>
                Water
              </SecondaryButton>
              <SecondaryButton tag='fizzy-drinks' onClick={() => null}>
                Fizzy Drinks
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* OtherMenu */}
        {false && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton tag='whatever' onClick={() => null}>
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
