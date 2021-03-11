import React from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import HomePageHeader from './components/HomePageHeader'
import HomePageMain from './components/HomePageMain'
import App from '../HomePage/components/Footer/App'


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