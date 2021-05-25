import React, { Children } from 'react';
import styled from 'styled-components';

const StyledCategoryItem = styled.div`
  color: black;
  font-size: 12px;
  align-content: center;
  padding: 2px;
  display: flex;
`;

const CheckboxContainer = styled.div`
  padding: 3px 8px;
`;

const CategoryItem = ({ children }) => {
  return (
    <>
      <StyledCategoryItem>
        <CheckboxContainer>
          <input type='checkbox' />
        </CheckboxContainer>
        {children}
      </StyledCategoryItem>
    </>
  );
};

export default CategoryItem;
