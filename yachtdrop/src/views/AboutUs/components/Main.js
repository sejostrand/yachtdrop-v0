import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 20px;
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
    margin-bottom: 10px;
`;

const MainText = styled.p`
    font-size: 17px;
    text-align: left;
    width: 75%;
    margin: 0 auto;
    padding: 20px;
    font-weight: 100;
`;


const Main = () => {
    return (
        <MainWrapper>
            <MainTitle>About us.</MainTitle>
            <MainSubTitle>Hello, welcome to Yachtdrop.</MainSubTitle>
            <MainText>Founded in Falmouth, UK by an ex seafarer in 2017, Yachtdrop is the first and longest standing e-commerce company within the maritime industry with operations in 6 markets around the globe. </MainText>
            <MainText>Yachtdrop is a world leader in online and mobile ordering, providing customers with an easy and secure way to order and pay from our supplier partners.</MainText>
            <MainText>We use our technology to bring together thousands of yacht owners and crew with the best local suppliers in our operating locations. We're on a mission to create the world's greatest yacht product's community.</MainText>
            <MainText>Our purpose sits at the heart of everything we do and that's to make product discovery exciting for everyone, whether its giving our customers more choice than anywhere else, or by supporting our drink supplier partners to get more out of their businesses and raise standards across the industry.</MainText>
            <MainText>We're proud of what we have built, and the countless ways we have connected yacht owners and crew with trusted local suppliers, everywhere.</MainText>
            <MainText>Our people are what make Yachtdrop the great company it is. Find out more about our careers with Yachtdrop. </MainText>
            <MainText>If you’d like to boost your business by partnering with Yachtdrop, a leading global marketplace for online drinks delivery, click here.</MainText>
        </MainWrapper>
    )
}

export default Main
