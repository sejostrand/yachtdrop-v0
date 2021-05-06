import styled from 'styled-components';
import React, { useState } from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';
import YearSlider from '../YearSlider'
import { Slider }  from '@material-ui/core'
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
  &:hover {
    opacity: 0.8;
  }
`;

const FilterBar = (props) => {
  let hello = [
    {
      value: 1989,
      label: "1989"
    },
    {
      value: 2000,
      label: "2000"
    },
    {
      value: 2003,
      label: "2003"
    },
    {
      value: 2004,
      label: "2004"
    }
  ]
  const [val, setVal] = useState([20, 40]);
  const updateVal = (e, data) => {
    setVal(data);
  }
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
              <CheckBoxItem tag='argentina' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='australia' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='austria' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='chile' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='france' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='hungary' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='italy' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='new zealand' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='south africa' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='spain' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='usa' toggleFilter={toggleFilter} />
            </Section>

            <Section>
              <SectionTitle>Variety</SectionTitle>
              <CheckBoxItem tag='alsace' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='bordeaux' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='cava' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='chardonanay' toggleFilter={toggleFilter} />
              <CheckBoxItem
                tag='cotes de provence'
                toggleFilter={toggleFilter}
              />
              <CheckBoxItem tag='emporda' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='fronsac' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='margaux' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='pauillac' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='penedes' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='pessac-leognan' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='pomeral' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='priorat' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='provence' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='rhone' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='ria baixas' toggleFilter={toggleFilter} />
              <CheckBoxItem
                tag='ribera del duero'
                toggleFilter={toggleFilter}
              />
              <CheckBoxItem tag='riesling' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='rioja' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='rueda' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='saint emilion' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='saint estephe' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='saint julien' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='sauternes' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='semillon' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='tokaji' toggleFilter={toggleFilter} />
            </Section>

            <Section>
              <SectionTitle>Vintage</SectionTitle>
              <CheckBoxItem tag='1989' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2000' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2003' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2004' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2005' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2006' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2007' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2008' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2009' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2010' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2011' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2012' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2013' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2014' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2015' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2016' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2017' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2018' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='2019' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='NV' toggleFilter={toggleFilter} />
            </Section>
            <Section>
              <Slider 
                value={val}
                onChange={updateVal}
                marks={hello}
              />
            </Section>

            <Section>
              <SectionTitle>Volume</SectionTitle>
              <CheckBoxItem tag='1.5L' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='75cl' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='50cl' toggleFilter={toggleFilter} />
              <CheckBoxItem tag='37.5cl' toggleFilter={toggleFilter} />
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
                tag='tequila'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('tequila')}
              >
                Tequila
              </SecondaryButton>
              <SecondaryButton
                tag='vodka'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('vodka')}
              >
                Vodka
              </SecondaryButton>
              <SecondaryButton
                tag='whiskey'
                secondaryTag={productFilter.secondaryTag}
                onClick={() => secondaryFilter('whiskey')}
              >
                Whiskey
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

        {/* OtherMenu */}
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
