import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import GlobalStyles from './styles/global';

import ShopPage from './views/ShopPage/ShopPage';
import HomePage from './views/HomePage/HomePage';
import AboutUs from './views/AboutUs/AboutUs';
import ContactUs from './views/ContactUs/ContactUs';
import Embassador from './views/Embassador/Embassador';
import SignUp from './views/SignUp/SignUp'
import SignIn from './views/SignIn/SignIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shoppage'>
          <ShopPage />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/contactus'>
          <ContactUs />
        </Route>
        <Route path='/Embassador'>
          <Embassador />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
