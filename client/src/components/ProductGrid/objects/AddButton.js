import React from 'react';
import styled from 'styled-components';

const StyledAddButton = styled.button`
  background-color: ${COLORS.color2};
  color: ${COLORS.color5};
  font-family: ${FONTS.secondaryFont};
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 4px;
  cursor: pointer;

  padding: 5px;
  text-align: center;

  border-radius: 4px;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 0.8;
  }
`;

const AddButton = () => {
  return <StyledAddButton>Add</StyledAddButton>;
};

export default AddButton;
