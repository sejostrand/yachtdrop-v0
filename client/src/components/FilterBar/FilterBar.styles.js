import { COLORS } from '@assets/theme/theme';
import styled from 'styled-components';

export const FilterGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  width: 100%;
  background-color: #f8faf7;
  padding: 30px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const PrimarySection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 15px;
`;

export const MenuContainer = styled.div`
  padding: 12px;
  border-top: 2px solid lightgray;
`;

export const FilterTitle = styled.h1`
  margin: 10px 5px;
  font-size: 24px;
  text-transform: none;
`;

export const BlackSection = styled.div`
  display: flex;
  background-color: black;
  height: 19px;
  width: 100%;
  z-index: 4;
`;

export const CategoryList = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

export const Section = styled.div`
  padding: 10px 10px 20px 10px;
  border-bottom: 2px solid lightgray;
`;

export const HiddenSection = styled.div`
  padding: 10px 10px 20px 10px;
  border-bottom: 2px solid lightgray;
  overflow: hidden;
  max-height: 55px;
  transition: max-height 0.5s ease-in-out;

  &:hover {
    max-height: 1000px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 18px;
  padding: 10px;
`;
