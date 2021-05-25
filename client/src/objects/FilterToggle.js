import styled from 'styled-components';
import React from 'react';

// transform: ${(props) =>
//   props.filterBar ? 'translate(19px, 30px)' : 'translate(0px, 0px)'};
// transform: ${(props) =>
//   props.filterBar ? 'rotate(0deg)' : 'rotate(1800deg)'};

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  padding: 10px 5px;
  height: min-content;
  width: min-content;
  border-radius: 10px;
  background-color: #f8694b;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: 'consolas';
  cursor: pointer;
  transform: ${(props) =>
    props.filterBar ? 'translate(256px, 30px)' : 'translate(19px, 30px)'};
  transition: all 0.1s;

  @media (max-width: 960px) {
    visibility: visible;
  }
`;

const FilterToggle = (props) => {
  return (
    <ButtonWrapper
      filterBar={props.filterBar}
      onClick={() => props.setFilterBar(!props.filterBar)}
    >
      {'<'}
    </ButtonWrapper>
  );
};

export default FilterToggle;
