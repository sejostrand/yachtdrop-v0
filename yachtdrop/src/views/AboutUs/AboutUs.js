import React from 'react'
import HomePageHeader from '../HomePage/components/Header/HomePageHeader'
import App from '../HomePage/components/Footer/App'
import Main from '../AboutUs/components/Main'
import Image from '../../assets/img/yacht.jpg'


const AboutUs = () => {
    return (
        <>
        <HomePageHeader image={Image}/>
        <Main />
        <App />
        </>
    )
}

export default AboutUs

