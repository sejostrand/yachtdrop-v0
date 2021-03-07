import React from 'react';
import styled from 'styled-components';

//objects
import Cover from './objects/Cover';
import Caption from './objects/Caption';

const StyledCoverBar = styled.div`
  width: 100%;
  box-shadow: 1px 1px 1px 5px;
  z-index: 3;
`;

const CoverBar = () => {
  return (
    <StyledCoverBar>
      <Caption />
      <Cover />
    </StyledCoverBar>
  );
};

export default CoverBar;
