import React from 'react';
import styled from 'styled-components';

const YourLocationWrapper = styled.div`
  width: 63%;
  height: 33%;
  background-color: #fff;
  position: absolute;
  margin-top: -30px;
  border: 1px grey solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 65%;
    height: 18%;
  }
`;

/* const YLText = styled.h1`
    font-family: sans-serif;
    font-size: 40px;
    text-align: center;
    color: #f8694b;
    padding: 25px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 17px;
        margin-top: -17px;
    }
`;

const YLSubText = styled.h4`
    font-family: sans-serif;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-top: -15px;

    @media (max-width: 1000px) {
        font-size: 13px;
        margin-top: -17px;
    }
`;

const YLInput = styled.input`
    width: 80%;
    height: 25%;
    font-size: 20px;
    text-align: center;
    margin-left: 10%;
    margin-top: 2%;

    @media (max-width: 1000px) {
        font-size: 15px;
    }
`; */

const YLText = styled.h1`
  font-family: sans-serif;
  font-size: 40px;
  color: #f8694b;
  padding: 20px;

  @media (max-width: 1000px) {
    font-size: 17px;
  }
`;

const YLSubText = styled.h4`
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
  color: black;
  padding-top: 1%;
  padding-bottom: 2%;

  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const YLInput = styled.input`
  width: 80%;
  height: 25%;
  font-size: 20px;
  text-align: center;
  margin-left: 10%;
  margin-top: 2%;

  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const Button = styled.div`
  background-color: #f8694b;
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 20px;
  margin: 5px;
  height: 2rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
`;

const YourLocation = ({ title }) => {
  return (
    <YourLocationWrapper>
      <YLText>{title}</YLText>
      <YLSubText>Choose from our vast selection.</YLSubText>
      {/*             <YLInput type='text' placeholder='Enter your location...'></YLInput>
       */}
      <Button>Mallorca</Button>
    </YourLocationWrapper>
  );
};

export default YourLocation;
