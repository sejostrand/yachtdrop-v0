import React from 'react';
import Header from '@views/HomePage/components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from './components/Main';
import Image from '@assets/img/7896.jpg';

const ContactUs = () => {
  return (
    <>
      <Header image={Image} />
      <Main />
      <Footer />
    </>
  );
};

export default ContactUs;
