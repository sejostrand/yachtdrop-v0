import React from 'react';
import styled from 'styled-components';

//objects
import Cover from './objects/Cover';
import Caption from './objects/Caption';

const StyledCoverBar = styled.div`
  width: 100%;
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
