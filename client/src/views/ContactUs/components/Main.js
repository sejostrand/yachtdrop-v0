import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width: 100%;
    height: 300px;
    background-color: #fff;
`;

const MainTitle = styled.h1`
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    padding: 30px;
`;

const MainSubTitle = styled.p`
    font-size: 22px;
    text-align: center;
    padding: 20px;
    //margin-bottom: 10px;
`;

const MainText = styled.p`
    font-size: 17px;
    text-align: center;
    width: 75%;
    margin: 0 auto;
    padding: 20px;
    font-weight: 100;
`;

const Main = () => {
    return (
        <>
        <MainWrapper>
            <MainTitle>Contact us.</MainTitle>
            <MainSubTitle>We will answer all of your questions.</MainSubTitle>
            <MainText>Drop us an email at info@yachtdrop.com and we will get back to you as soon as we can.</MainText>
        </MainWrapper>
        </>
    )
}

export default Main
