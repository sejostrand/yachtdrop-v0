import React from 'react';
import styled from 'styled-components';
import coverImage from '../../../assets/img/yacht2.jpg';

const StyledCover = styled.img`
  width: 100%;
  height: 100px;
`;

const Cover = () => {
  return <StyledCover src={coverImage} />;
};

export default Cover;
