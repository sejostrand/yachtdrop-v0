import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from '@assets/utils/CurrentUser';

import './index.css';

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  document.getElementById('root')
);
