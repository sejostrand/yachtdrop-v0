import React, { useState } from 'react'
import styled from 'styled-components'
import BeerIMG from '../img/beer.png'
import WineImg from '../img/wine.png'
import SpiritsImg from '../img/spirits.png'
import OtherImg from '../img/more.png'

const SectionWrapper = styled.section`
    display: flex;
`

const TileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const TileTitle = styled.h1`
    margin: 0 auto;
    font-size: 35px;
    padding: 10px 0;
    color: white;
`

const TitleText = styled.p`
    font-size: 20px;
    padding-bottom: 19px;
    color: white;
`

const TileButton = styled.a`
    background-color: white;
    color: black;
    padding: 4px 0;
    margin: 0 auto;
    width: 20%;
    text-decoration: none;
`


const ColumnTile = () => {
    const [displayedTile, setDisplayedTile] = useState({
        id: 1,
        img: BeerIMG,
        title: "It's beer o' clock somewhere.",
        text: "We've got you covered.",
        link: "http://localhost:3000/shoppage/products?category.category=beer&"
    });

    const TileInfo = [
        {
            id: 1,
            img: BeerIMG,
            title: "It's beer o' clock somewhere.",
            text: "We've got you covered.",
            link: "http://localhost:3000/shoppage/products?category.category=beer&"
        },
        {
            id: 2,
            img: WineImg,
            title: "It's wine time somewhere.",
            text: "We've got your balls.",
            link: "http://localhost:3000/shoppage/products?category.category=wine&"
        },
        {
            id: 3,
            img: SpiritsImg,
            title: "It's time for a whyskey.",
            text: "We've got nuthin on ya.",
            link: "http://localhost:3000/shoppage/products?category.category=spirit&"
        },
        {
            id: 4,
            img: OtherImg,
            title: "Unless The Bless is Less.",
            text: "Progress becomes regress.",
            link: "http://localhost:3000/shoppage"
        }
    ]

    const updateTile = () => {
        if (displayedTile.id == 3) {
            setDisplayedTile(TileInfo[3])
        } else if (displayedTile.id == 1) {
            setDisplayedTile(TileInfo[1])
        } else if (displayedTile.id == 2) {
            setDisplayedTile(TileInfo[2])
        } else if (displayedTile.id == 4) {
            setDisplayedTile(TileInfo[0])
        }
    };
    setTimeout(updateTile, 5000);


    return (
        <SectionWrapper>
        <img src={displayedTile.img} />
        <TileWrapper>
                <TileTitle>{displayedTile.title}</TileTitle>
                <TitleText>{displayedTile.text}</TitleText>
                <TileButton href={displayedTile.link}>Shop</TileButton>
        </TileWrapper>
        </SectionWrapper>
    )
} 

export default ColumnTile
