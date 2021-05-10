import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 6px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 18px;
  color: black;
  margin: 2px;
  position: relative;
`;

const StyledInput = styled.input`
  margin: 2px;
  color: gray;
  text-transform: capitalize;
  padding: 5px;
  width: 300px;
`;

const FieldInput = (props) => {
  return (
    <FieldWrapper>
      <Label>{props.label}</Label>
      <StyledInput
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.setValue}
      />
    </FieldWrapper>
  );
};

export default FieldInput;
