import React from 'react';
import styled from 'styled-components';

const AddButtonWrapper = styled.div`
  background-color: #f7836a;
  color: white;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  margin: 10px;

  padding: 5px;
  text-align: center;
  position: relative;
  bottom: 50px;

  border-radius: 4px;
  width: 130px;
  height: 50px;

  &:hover {
    background-color: #f8694b;
  }
`;

const AddButton = () => {
  return <AddButtonWrapper>ADD</AddButtonWrapper>;
};

export default AddButton;
