import React from 'react'
import styled from 'styled-components'

const YourLocationWrapper = styled.div`
    width: 63%;
    height: 33%;
    background-color: #fff;
    position: absolute;
    margin-top: -30px;
    border: 1px grey solid;

    @media (max-width: 1000px) {
        width: 63%;
        height: 20%;
    }
`;

const YLText = styled.h1`
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
