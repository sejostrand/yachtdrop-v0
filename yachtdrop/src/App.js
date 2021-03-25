import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import GlobalStyles from './styles/global';

import ShopPage from '@views/ShopPage/ShopPage';
import HomePage from '@views/HomePage/HomePage';
import AboutUs from '@views/AboutUs/AboutUs';
import ContactUs from '@views/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/homepage'>
          <HomePage />
        </Route>
        <Route path='/shoppage'>
          <ShopPage />
        </Route>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/contactus'>
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
