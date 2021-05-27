import React from 'react';
import styled from 'styled-components';

//objects
import COVER from '@assets/img/sea.jpg';
import Caption from './objects/Caption';

const StyledCoverBar = styled.div`
  width: 100%;
`;

const CoverImg = styled.div`
  display: flex;
  background-image: url(${(props) => props.img});
  background-size: 100% auto;
  background-position-y: 70%;
  width: 100%;
  height: 13vw;
`;

const CoverBar = () => {
  return (
    <StyledCoverBar>
      <Caption />
      <CoverImg img={COVER} />
    </StyledCoverBar>
  );
};

export default CoverBar;
