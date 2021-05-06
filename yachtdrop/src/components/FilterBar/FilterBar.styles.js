import { COLORS } from '@assets/theme/theme';
import styled from 'styled-components';

export const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  position: relative;
  float: left;
  z-index: 3;
`;

export const FilterGrid = styled.div`
  justify-content: left;
  height: 100%;
  width: 300px;
  background-color: #f8faf7;
  padding: 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  border-right: 3px solid black;
`;

export const PrimarySection = styled.div`
  padding: 12px;
`;

export const MenuContainer = styled.div`
  padding: 12px;
`;

export const FilterTitle = styled.div`
  padding: 16px;
  font-size: 30px;
`;

export const BlackSection = styled.div`
  background-color: black;
  height: 19px;
`;

export const CategoryList = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

export const Section = styled.div`
  padding: 10px;
  border-top: 2px solid lightgray;
`;

export const SectionTitle = styled.div`
  font-size: 18px;
  padding: 10px;
`;
