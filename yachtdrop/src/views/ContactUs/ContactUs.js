import React from 'react'
import HomePageHeader from '../HomePage/components/Header/HomePageHeader'
import App from '../HomePage/components/Footer/App'
import Main from './components/Main'
import Image from '../HomePage/img/7896.jpg'


const ContactUs = () => {
    return (
        <>
        <HomePageHeader image={Image} />
        <Main />
        <App />
        </>
    )
}

export default ContactUs
