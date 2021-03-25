import React from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import HomePageHeader from './components/Header/HomePageHeader'
import HomePageMain from './components/HomePageMain'
import App from '../HomePage/components/Footer/App'

import HeaderIcon from './img/yd1.jpg'


const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageMain />
      <App />
    </>
  );
};

export default HomePage;