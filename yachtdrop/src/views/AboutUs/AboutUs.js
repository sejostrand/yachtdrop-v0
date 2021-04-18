import React from 'react'
import Header from '../HomePage/components/Header/Header'
import Footer from '../HomePage/components/Footer/Footer'
import Main from '../AboutUs/components/Main'
import Image from '../../assets/img/yacht.jpg'


const AboutUs = () => {
    return (
        <>
        <Header image={Image}/>
        <Main />
        <Footer />
        </>
    )
}

export default AboutUs

