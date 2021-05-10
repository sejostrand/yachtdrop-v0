import React from 'react';
import styled from 'styled-components';
import Header from '@views/HomePage/components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@views/AboutUs/components/Main';
import Image from '@assets/img/yacht.jpg';

const AboutUs = () => {
  return (
    <>
      <Header image={Image} />
      <Main />
      <Footer />
    </>
  );
};

export default AboutUs;
