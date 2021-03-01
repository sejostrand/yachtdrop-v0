import React from 'react';
import styled from 'styled-components';

const StyledLocationTag = styled.div`
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
`;

const LocationTag = () => {
  return <StyledLocationTag>Mallorca</StyledLocationTag>;
};

export default LocationTag;
