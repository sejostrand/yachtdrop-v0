import styled from 'styled-components';
import React, { useState } from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';
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
} from './FilterBar.styles';

const PrimaryButton = styled.div`
  background-color: ${(props) =>
    props.primaryTag != props.tag ? COLORS.green : COLORS.darkGreen};
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
  background-color: ${(props) =>
    props.secondaryTag != props.tag ? COLORS.purple : COLORS.orange};
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
  visibility: ${(props) =>
    props.primaryTag == props.parentTag ? 'visible' : 'hidden'};

  &:hover {
    opacity: 0.8;
  }
`;

const FilterBar = (props) => {
  const productFilter = props.productFilter;
  const clearFilter = props.clearFilter;
  const secondaryFilter = props.secondaryFilter;
  const primaryFilter = props.primaryFilter;
  const toggleFilter = props.toggleFilter;

  const isActive = (tag) => {
    return productFilter.primaryTag[0] == tag ? true : false;
  };

  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <PrimarySection>
          <PrimaryButton
            primaryTag={productFilter.primaryTag}
            onClick={() => clearFilter()}
          >
            Clear filters
          </PrimaryButton>
          <PrimaryButton
            tag='wine'
            primaryTag={productFilter.primaryTag}
            onClick={() => primaryFilter('wine')}
          >
            Wine
          </PrimaryButton>
          <PrimaryButton
            tag='spirits'
            primaryTag={productFilter.primaryTag}
            //cond={productFilter.setPrimaryTag != props.tag}
            onClick={() => primaryFilter('spirits')}
          >
            Spirits
          </PrimaryButton>
          <PrimaryButton
            tag='beer'
            primaryTag={productFilter.primaryTag}
            onClick={() => primaryFilter('beer')}
          >
            Beer
          </PrimaryButton>
          <PrimaryButton
            tag='soft-drinks'
            primaryTag={productFilter.primaryTag}
            onClick={() => primaryFilter('soft-drinks')}
          >
            Soft Drinks
          </PrimaryButton>
          <PrimaryButton
            tag='other'
            primaryTag={productFilter.primaryTag}
            onClick={() => primaryFilter('other')}
          >
            Other
          </PrimaryButton>
        </PrimarySection>

        {/* WineMenu */}
        {isActive('wine') && (
          <MenuContainer>
            <Section>
              <SectionTitle>Type</SectionTitle>
              <SecondaryButton
                tag='red'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('red')}
              >
                Red
              </SecondaryButton>
              <SecondaryButton
                tag='white'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('white')}
              >
                White
              </SecondaryButton>
              <SecondaryButton
                tag='rose'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('rose')}
              >
                Rose
              </SecondaryButton>
              <SecondaryButton
                tag='champagne'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('champagne')}
              >
                Champagne
              </SecondaryButton>
              <SecondaryButton
                tag='sparkling'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('sparkling')}
              >
                Sparkling
              </SecondaryButton>
            </Section>
            <Section>
              <SectionTitle>Region</SectionTitle>
              <CheckBoxItem onClick={() => toggleFilter('argentina')}>
                Argentina
              </CheckBoxItem>
              <CheckBoxItem>Australia</CheckBoxItem>
              <CheckBoxItem>Austria</CheckBoxItem>
              <CheckBoxItem>Chile</CheckBoxItem>
              <CheckBoxItem>France</CheckBoxItem>
              <CheckBoxItem>Hungary</CheckBoxItem>
              <CheckBoxItem>Italy</CheckBoxItem>
              <CheckBoxItem>New Zealand</CheckBoxItem>
              <CheckBoxItem>South Africa</CheckBoxItem>
              <CheckBoxItem>Spain</CheckBoxItem>
              <CheckBoxItem>USA</CheckBoxItem>
            </Section>

            <Section>
              <SectionTitle>Variety</SectionTitle>
              <CheckBoxItem>Alsace</CheckBoxItem>
              <CheckBoxItem>Bordeaux</CheckBoxItem>
              <CheckBoxItem>Cava</CheckBoxItem>
              <CheckBoxItem>Chardonnay</CheckBoxItem>
              <CheckBoxItem>Cotes de Provence</CheckBoxItem>
              <CheckBoxItem>Emporda</CheckBoxItem>
              <CheckBoxItem>Fronsac</CheckBoxItem>
              <CheckBoxItem>Margaux</CheckBoxItem>
              <CheckBoxItem>Pauillac</CheckBoxItem>
              <CheckBoxItem>Penedes</CheckBoxItem>
              <CheckBoxItem>Pessac-Leognan</CheckBoxItem>
              <CheckBoxItem>Pomeral</CheckBoxItem>
              <CheckBoxItem>Priorat</CheckBoxItem>
              <CheckBoxItem>Provence</CheckBoxItem>
              <CheckBoxItem>Rhone</CheckBoxItem>
              <CheckBoxItem>Ria Baixas</CheckBoxItem>
              <CheckBoxItem>Ribera del Duero</CheckBoxItem>
              <CheckBoxItem>Riesling</CheckBoxItem>
              <CheckBoxItem>Rioja</CheckBoxItem>
              <CheckBoxItem>Rueda</CheckBoxItem>
              <CheckBoxItem>Saint Emilion</CheckBoxItem>
              <CheckBoxItem>Saint Estephe</CheckBoxItem>
              <CheckBoxItem>Saint Julien</CheckBoxItem>
              <CheckBoxItem>Sauternes</CheckBoxItem>
              <CheckBoxItem>Semillon</CheckBoxItem>
              <CheckBoxItem>Tokaji</CheckBoxItem>
            </Section>

            <Section>
              <SectionTitle>Vintage</SectionTitle>
              <CheckBoxItem>1989</CheckBoxItem>
              <CheckBoxItem>2000</CheckBoxItem>
              <CheckBoxItem>2003</CheckBoxItem>
              <CheckBoxItem>2004</CheckBoxItem>
              <CheckBoxItem>2005</CheckBoxItem>
              <CheckBoxItem>2006</CheckBoxItem>
              <CheckBoxItem>2007</CheckBoxItem>
              <CheckBoxItem>2008</CheckBoxItem>
              <CheckBoxItem>2009</CheckBoxItem>
              <CheckBoxItem>2010</CheckBoxItem>
              <CheckBoxItem>2011</CheckBoxItem>
              <CheckBoxItem>2012</CheckBoxItem>
              <CheckBoxItem>2013</CheckBoxItem>
              <CheckBoxItem>2014</CheckBoxItem>
              <CheckBoxItem>2015</CheckBoxItem>
              <CheckBoxItem>2016</CheckBoxItem>
              <CheckBoxItem>2017</CheckBoxItem>
              <CheckBoxItem>2018</CheckBoxItem>
              <CheckBoxItem>2019</CheckBoxItem>
              <CheckBoxItem>NV</CheckBoxItem>
            </Section>

            <Section>
              <SectionTitle>Volume</SectionTitle>
              <CheckBoxItem>1.5L</CheckBoxItem>
              <CheckBoxItem>75cl</CheckBoxItem>
              <CheckBoxItem>50cl</CheckBoxItem>
              <CheckBoxItem>37.5cl</CheckBoxItem>
            </Section>
          </MenuContainer>
        )}

        {/* SpiritsMenu */}
        {isActive('spirits') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton
                tag='gin'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('gin')}
              >
                Gin
              </SecondaryButton>
              <SecondaryButton
                tag='rum'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('rum')}
              >
                Rum
              </SecondaryButton>
              <SecondaryButton
                tag='whiskey'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('whiskey')}
              >
                Whiskey
              </SecondaryButton>
              <SecondaryButton
                tag='vodka'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('vodka')}
              >
                Vodka
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* BeerMenu */}
        {isActive('beer') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton
                tag='larger'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('larger')}
              >
                Larger
              </SecondaryButton>
              <SecondaryButton
                tag='ale'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('ale')}
              >
                Ale
              </SecondaryButton>
              <SecondaryButton
                tag='cider'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('cider')}
              >
                Cider
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* SoftDrinksMenu */}
        {isActive('soft-drinks') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton
                tag='mixers'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('mixers')}
              >
                Mixers
              </SecondaryButton>
              <SecondaryButton
                tag='juice'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('juice')}
              >
                Juice
              </SecondaryButton>
              <SecondaryButton
                tag='water'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('water')}
              >
                Water
              </SecondaryButton>
              <SecondaryButton
                tag='fizzy-drinks'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('fizzy-drinks')}
              >
                Fizzy Drinks
              </SecondaryButton>
            </Section>
          </MenuContainer>
        )}

        {/* SpiritsMenu */}
        {isActive('other') && (
          <MenuContainer>
            <SectionTitle>Type</SectionTitle>
            <Section>
              <SecondaryButton
                tag='whatever'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('whatever')}
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
