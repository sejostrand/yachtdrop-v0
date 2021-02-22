import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShopPage from './views/ShopPage/ShopPage';

ReactDOM.render(<ShopPage />, document.getElementById('root'));
