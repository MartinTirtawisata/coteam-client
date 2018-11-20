import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import App from './app';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <App />
        </Provider>)
    });
});