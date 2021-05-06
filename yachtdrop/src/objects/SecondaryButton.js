import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${COLORS.purple};
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;
  visibility: ${(props) =>
    props.primaryTag == props.parentTag ? 'visible' : 'hidden'};

  &:hover {
    opacity: 0.8;
  }
`;

const SecondaryButton = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SecondaryButton;
