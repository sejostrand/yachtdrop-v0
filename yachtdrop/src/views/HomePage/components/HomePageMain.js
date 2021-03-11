import React from 'react'
import styled from 'styled-components'

import YourLocation from './YourLocation'
import HowItWorksTile from '../components/HowItWorksTile/HowItWorksTile'
import List from './List'
import Products from '../components/Products/index'
import { productData } from './Products/data'


const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    //background-color: #fffbf0;
    //background-color: #31708E;
    background-color: #f8faf7;
`;

const HowItWorksWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 550px;
    background-color: white;
`;

const HowItWorksText = styled.text`
    font-size: 60px;
    color: black;
    font-weight: bold;
    padding: 40px;
`;


const HomePageMain = () => {
    return (
        <>
        <MainWrapper>
            <YourLocation />
        </MainWrapper>
        <Products heading='How it works.' data={productData} />
        <List />
        </>
    )
}

export default HomePageMain
