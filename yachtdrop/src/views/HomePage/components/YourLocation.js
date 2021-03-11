import React from 'react'
import styled from 'styled-components'

const YourLocationWrapper = styled.div`
    width: 63%;
    height: 33%;
    background-color: #f7f9fb;
    position: absolute;
    margin-top: -30px;
    border: 1px grey solid;
`;

const YLText = styled.h1`
    font-family: sans-serif;
    font-size: 40px;
    text-align: center;
    color: red;
    padding: 25px;
    margin-top: 10px;
`;

const YLSubText = styled.h4`
    font-family: sans-serif;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-top: -30px;
`;

const YLInput = styled.input`
    width: 80%;
    height: 25%;
    font-size: 20px;
    text-align: center;
    margin-left: 10%;
    margin-top: -1%;
`;


const YourLocation = () => {
    return (
        <YourLocationWrapper>
            <YLText>Order drinks to your yacht.</YLText>
            <YLSubText>Choose from our vast selection.</YLSubText>
            <YLInput type='text' placeholder='Enter your location...'></YLInput>
        </YourLocationWrapper>
    )
}

export default YourLocation
