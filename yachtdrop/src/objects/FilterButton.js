import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme.js';

const ButtonWrapper = styled.div`
  background-color: ${(props) =>
    props.primaryTag == props.tagName ? props.selectedColor : props.color};
`;

export const FilterButton = (props) => {
  return (
    <ButtonWrapper
      color={props.color}
      selectedColor={props.selectedColor}
      primaryTag={props.primaryTag}
      tagName={props.tagName}
    >
      {props.tagName}
    </ButtonWrapper>
  );
};
