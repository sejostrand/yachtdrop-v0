import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import History from '@components/History';

//COMPONENTS
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import ShopPage from './views/ShopPage/ShopPage';
import ShopLandingPage from './views/ShopLandingPage/ShopLandingPage';
import LandingPage from '@views/LandingPage/LandingPage';
import LandingPage2 from '@views/LandingPage2/LandingPage2';
import AboutUs from './views/AboutUs/AboutUs';
import ContactUs from './views/ContactUs/ContactUs';
import Embassador from './views/Embassador/Embassador';
import SignUp from './views/SignUp/SignUp';
import LogIn from './views/LogIn/LogIn';
import NewLogIn from '@views/LogIn/NewLogIn';
import Profile from '@views/Profile/Profile';
import Checkout from '@views/Checkout/Checkout';
import OrderConfirmation from '@views/OrderConfirmation/OrderConfirmation';
import Terms from '@views/Terms/Terms';
import PrivacyPolicy from '@views/PrivacyPolicy/PrivacyPolicy';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: auto;
`;

function App() {
  document.addEventListener('DOMContentLoaded', function (event) {
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
  });

  window.onbeforeunload = function (e) {
    localStorage.setItem('scrollpos', window.scrollY);
  };

  return (
    <AppWrapper>
      {window.location.href !== 'http://localhost:3000/' && <NavBar />}
      <Router history={History}>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/landingpage2'>
            <LandingPage2 />
          </Route>
          <Route path='/shoppage'>
            <ShopPage />
          </Route>
          <Route path='/shoplandingpage'>
            <ShopLandingPage />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/newlogin'>
            <NewLogIn />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/order-confirmation'>
            <OrderConfirmation />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          <Route path='/embassador'>
            <Embassador />
          </Route>
          <Route path='/terms'>
            <Terms />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AppWrapper>
  );
}
export default App;
