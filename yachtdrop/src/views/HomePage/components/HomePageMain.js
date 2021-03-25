import React from 'react'
import styled from 'styled-components'

import YourLocation from './YourLocation'
import List from './List'
import Products from '../components/Products/index'
import { productData } from './Products/data'


const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    background-color: #f8faf7;
    //background-color: #31708E;

    @media (max-width: 1000px) {
        height: 110px;
    }
`;



const HomePageMain = () => {
    return (
        <>
        <MainWrapper>
            <YourLocation title="Order drinks to your yacht."/>
        </MainWrapper>
        <Products heading='How it works.' data={productData} />
        <List />
        </>
    )
}

export default HomePageMain
