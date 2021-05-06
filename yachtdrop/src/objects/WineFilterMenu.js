import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme.js';

//import objects
import CheckBoxItem from './CheckBoxItem';

const Wrapper = styled.div`
  padding: 0px;
`;

const Section = styled.div`
  padding: 10px;
  border-top: 2px solid lightgray;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  padding: 10px;
`;

const Button1 = styled.div`
  background-color: ${COLORS.purple};
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

const Button2 = styled.div`
  background-color: ${COLORS.purple};
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

const WineFilterMenu = ({ secondaryFilter }) => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Type</SectionTitle>
        <Button1 onClick={secondaryFilter('red')}>Red</Button1>
        <Button1>White</Button1>
        <Button1>Rose</Button1>
        <Button1>Champagne</Button1>
        <Button1>Sparkling</Button1>
      </Section>
      <Section>
        <SectionTitle>Region</SectionTitle>
        <CheckBoxItem>Argentina</CheckBoxItem>
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
    </Wrapper>
  );
};

export default WineFilterMenu;
