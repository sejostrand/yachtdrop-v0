import React from 'react'
import styled from 'styled-components'

import BeerIMG from '../img/beer.png'
import WineImg from '../img/wine.png'
import SpiritsImg from '../img/spirits.png'
import OtherImg from '../img/more.png'
import ColumnTile from './ColumnTile'

const GridWrapper = styled.div`
    width: 80%;
    height: 50vh;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
`
const FirstColumn = styled.div`
    background-color: black;
    display: grid;
    justify-content: center;
    align-content: center;
`

const SecondColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 5px;
`

const Beer = styled.img`
    width: 100%;
    align-items: center;
`

const Wine = styled.img`
    width: 100%;
`

const Spirits = styled.img`
    width: 100%;
`

const SoftDrinks = styled.img`
    width: 100%;
`


const AdvertGrid = () => {
    return (
        <GridWrapper>
            <FirstColumn>
                <ColumnTile />
            </FirstColumn>
            <SecondColumn>
                <Beer src={BeerIMG}/>
                <Wine src={WineImg}/>
                <Spirits src={SpiritsImg}/>
                <SoftDrinks src={OtherImg}/>
            </SecondColumn>
        </GridWrapper>
    )
}

export default AdvertGrid
