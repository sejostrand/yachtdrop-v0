import styled from 'styled-components'
//import HeaderIcon from '../../img/yd1.jpg'
//import Illustration from '../img/7896.jpg'

export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
`;

export const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const Yachtdrop = styled.a`
    font-family: sans serif;
    font-size: 40px;
    color: white;
    position: absolute;
    left: 1%;
    padding: 10px;
    text-decoration: none;
    
    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 25px;
    }
`;

export const LogIn = styled.a`
    font-family: sans serif;
    font-size: 30px;
    color: white;
    position: absolute;
    right: 1%;
    padding: 10px;
    text-decoration: none;

    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 15px;
    }
`;