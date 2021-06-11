import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  height: 120px;
  width: 25px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f8694b;
  cursor: pointer;
  transform: ${(props) =>
    props.filterBar ? 'translate(269px, 30px)' : 'translate(3px, 30px)'};
  transition: all 0.1s;

  @media (max-width: 960px) {
    visibility: visible;
  }
`;

const Container = styled.div`
  transform: rotate(-90deg) translate(-53px, -36px);
  display: flex;
  position: absolute;
  flex-flow: row nowrap;
  width: 100px;
`;

const Text = styled.div`
  display: flex;
  letter-spacing: 2px;
  font-family: 'consolas';
  font-size: 16px;
  color: white;
`;

const Triangle = styled.div`
  font-size: 18px;
  display: flex;
  margin: 0 7px;
  color: white;
`;

const FilterToggle = (props) => {
  return (
    <Wrapper
      filterBar={props.filterBar}
      onClick={() => props.setFilterBar(!props.filterBar)}
    >
      <Container>
        <Text>
          <Triangle>{props.filterBar ? '▲' : '▼'}</Triangle>FILTER
        </Text>
      </Container>
    </Wrapper>
  );
};

export default FilterToggle;
