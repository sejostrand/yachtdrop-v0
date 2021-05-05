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
  class Filter {
    constructor() {
      this.primaryTag = [];
      this.secondaryTag = [];
      this.otherTags = [];
    }

    checkTag(whichTag, tag) {}

    getTags() {
      let group = [];
      return group.concat(this.primaryTag, this.secondaryTag, this.otherTags);
    }

    togglePrimaryTag(tag) {
      if (String(this.primaryTag[0]) == String(tag)) {
        this.clearTags();
      } else {
        this.clearTags();
        this.primaryTag = [tag];
        console.log(this.getTags());
      }

      return console.log(tag + ' was toggled');
    }

    toggleSecondaryTag(tag) {
      String(this.secondaryTag[0]) == String([tag])
        ? (this.secondaryTag = [])
        : (this.secondaryTag = [tag]);
      console.log(this.getTags());
    }
    toggleTag(tag) {
      if (this.otherTags.includes(tag)) {
        this.otherTags.splice(this.otherTags.indexOf(tag), 1);
      } else {
        this.otherTags.push(tag);
      }
      console.log(this.getTags());
    }
    clearTags() {
      this.primaryTag = [];
      this.secondaryTag = [];
      this.otherTags = [];
      return console.log('tags were cleared');
    }
  }

  const productFilter = new Filter();

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shoppage'>
          <ShopPage productFilter={productFilter} />
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
