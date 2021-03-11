import React from 'react'
import styled from 'styled-components'
import Wine from '../../img/drinks-icon.jpg'
//import HowItWorksImg from '../HowItWorksTile/objects/HowItWorksImg'
import Truck from '../../img/truck.png'
import Time from '../../img/time.jpg'


const HIWWrapper = styled.div`
    width: 30%;
    height: 45%;
    background-color: #fefbe9;
    position: absolute;
    margin-left: 70%;
    margin-top: 15%;
`;

const HIWImg = styled.img`
    width: 45%;
    height: 45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const HIWTitle = styled.h1`
    font-size: 23px;
    color: black;
    text-align: center;
    padding: 30px;
`;

const HIWSubTitle = styled.p`
    font-size: 17px;
    color: black;
    padding: 10px;
    max-width: 300px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const HIWWrapper2 = styled.div`
    width: 30%;
    height: 45%;
    background-color: white;
    position: absolute;
    justify-content: flex-end;
    margin-top: 15%;
`;

const HIWImg2 = styled.img`
    width: 45%;
    height: 45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const HIWTitle2 = styled.h1`
    font-size: 25px;
    color: black;
    text-align: center;
    padding: 30px;
`;

const HIWSubTitle2 = styled.p`
    font-size: 17px;
    color: black;
    padding: 10px;
    max-width: 300px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const HIWWrapper3 = styled.div`
    width: 30%;
    height: 45%;
    background-color: white;
    position: absolute;
    margin-right: 70%;
    margin-top: 15%;
`;

const HIWImg3 = styled.img`
    width: 45%;
    height: 45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const HIWTitle3 = styled.h1`
    font-size: 25px;
    color: black;
    text-align: center;
    padding: 30px;
`;

const HIWSubTitle3 = styled.p`
    font-size: 17px;
    color: black;
    padding: 10px;
    max-width: 300px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const i = styled.text`
    text-align: center;
`;

const HowItWorksTile = () => {
    return (
        <>
        <HIWWrapper>
        <i className='fas fa-cocktail fa-6x'></i>
            <HIWTitle>Pick location and time of delivery</HIWTitle>
            <HIWSubTitle>We can deliver wherever you are. A marina, a mooring... Anywhere!</HIWSubTitle>
        </HIWWrapper>
        <HIWWrapper2>
            <HIWImg2 src={Time}></HIWImg2>
            <HIWTitle2>Await your yachtdrop</HIWTitle2>
            <HIWSubTitle2>Sit back and relax. We'll take it from here.</HIWSubTitle2>
        </HIWWrapper2>
        <HIWWrapper3>
            <HIWImg3 src={Wine}></HIWImg3>
            <HIWTitle3>Choose products online</HIWTitle3>
            <HIWSubTitle3>Champagne, Wine, Spirits, Cider, Water... You name it, we have it.</HIWSubTitle3>
        </HIWWrapper3>
        </>
    )
}

export default HowItWorksTile
