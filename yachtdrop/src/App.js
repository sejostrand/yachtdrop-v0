import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import GlobalStyles from './styles/global';

import ShopPage from './views/ShopPage/ShopPage';
import HomePage from './views/HomePage/HomePage';
import AboutUs from './views/AboutUs/AboutUs'
import ContactUs from './views/ContactUs/ContactUs'
import Embassador from './views/Embassador/Embassador';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ShopPage">
          <ShopPage />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/Embassador">
          <Embassador />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;