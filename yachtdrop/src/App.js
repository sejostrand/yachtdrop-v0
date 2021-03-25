import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import GlobalStyles from './styles/global';

<<<<<<< HEAD
import ShopPage from './views/ShopPage/ShopPage';
import HomePage from './views/HomePage/HomePage';
import AboutUs from './views/AboutUs/AboutUs'
import ContactUs from './views/ContactUs/ContactUs'
import Embassador from './views/Embassador/Embassador';
=======
import ShopPage from '@views/ShopPage/ShopPage';
import HomePage from '@views/HomePage/HomePage';
import AboutUs from '@views/AboutUs/AboutUs'
import ContactUs from '@views/ContactUs/ContactUs'
>>>>>>> 12113deaf83dd57a233a3fde06b12b1d960c7001

function App() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
=======
        <Route path="/homepage">
>>>>>>> 12113deaf83dd57a233a3fde06b12b1d960c7001
          <HomePage />
        </Route>
        <Route path="/shoppage">
          <ShopPage />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/contactus">
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