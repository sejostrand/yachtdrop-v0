import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from '@assets/utils/CurrentUser';
import { CartProvider } from '@assets/utils/CartContext';

import './index.css';

ReactDOM.render(
  <CurrentUserProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </CurrentUserProvider>,
  document.getElementById('root')
);
