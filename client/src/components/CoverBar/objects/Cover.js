import React from 'react';
import styled from 'styled-components';
import coverImage from '../../../assets/img/coverimg.jpg';

const StyledCover = styled.img`
  width: 100%;
  height: auto;
`;

const Cover = () => {
  return <StyledCover src={coverImage} />;
};

export default Cover;
