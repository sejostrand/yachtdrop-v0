import React from 'react';
import styled from 'styled-components';

const StyledLocationTag = styled.a`
  align-self: center;
  margin: 0px 30px 0px 30px;
  padding: 0px 5px 0px 13px;
  display: inline-block;
  letter-spacing: 8px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border-bottom: 4px solid #f8694b;
  cursor: pointer;
  text-decoration: none;
`;

const LocationTag = () => {
  return <StyledLocationTag href='shoppage'>Mallorca</StyledLocationTag>;
};

export default LocationTag;
