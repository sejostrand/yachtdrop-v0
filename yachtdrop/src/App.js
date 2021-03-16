import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import GlobalStyles from './styles/global';

import ShopPage from './views/ShopPage/ShopPage';
import HomePage from './views/HomePage/HomePage';
import AboutUs from './views/AboutUs/AboutUs'
import ContactUs from './views/ContactUs/ContactUs'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/HomePage">
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
      </Switch>
    </Router>
  );
}
export default App;