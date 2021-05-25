import React, { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  color: black;
  font-size: 12px;
  align-content: center;
  padding: 2px;
  display: flex;
`;

const CheckboxContainer = styled.div`
  padding: 3px 8px;
`;

const CheckBoxItem = (props) => {
  return (
    <>
      <Wrapper
        href={`/shoppage/products?${props.toggleCategoryTag(props.tag)}`}
      >
        {props.tag}
      </Wrapper>
    </>
  );
};

export default CheckBoxItem;
