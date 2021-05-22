import React, { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
      <Wrapper>
        <CheckboxContainer>
          <input
            type='checkbox'
            /* onChange={() => getTags(props.tag)} */
          />
        </CheckboxContainer>
        {props.tag}
      </Wrapper>
    </>
  );
};

export default CheckBoxItem;
