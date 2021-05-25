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
  //
  const getQ = (value) => {
    const params = new URLSearchParams(document.location.search);
    params.append('category_tags.categoryTag', value.toString());
    console.log(params.get('category_tags.categoryTag'));
    return params.toString();
  };

  return (
    <>
      <Wrapper href={`/shoppage/products?${getQ(props.tag)}`}>
        <CheckboxContainer>
          <input type='checkbox' />
        </CheckboxContainer>
        {props.tag}
      </Wrapper>
    </>
  );
};

export default CheckBoxItem;
