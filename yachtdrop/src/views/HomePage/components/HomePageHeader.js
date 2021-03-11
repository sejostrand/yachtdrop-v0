import React from 'react'
import styled from 'styled-components'
import HeaderIcon from '../img/yd1.jpg'

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
`;

const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
`;

const Yachtdrop = styled.text`
    font-family: sans serif;
    font-size: 40px;
    color: white;
    position: absolute;
    left: 1%;
    
    cursor: pointer;
`;

const LogIn = styled.text`
    font-family: sans serif;
    font-size: 40px;
    color: white;
    position: absolute;
    right: 1%;

    cursor: pointer;
`;

const HomePageHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderImg src={ HeaderIcon } />
            <Yachtdrop>Yachtdrop</Yachtdrop>
            <LogIn>Log in</LogIn>
        </HeaderWrapper>  
    )
}

export default HomePageHeader
