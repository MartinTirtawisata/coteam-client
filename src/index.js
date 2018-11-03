import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from 'store';

import './index.css';

import HomePage from './components/homepage';

// Creating mock data
ReactDOM.render(
    <Provider store={store}>
        <HomePage userInfo={userInfo}/>
    </Provider>, 
    document.getElementById('root')
);

