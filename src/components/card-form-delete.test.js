import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import CardFormDelete from './card-form-delete';

describe('<CardFormDelete />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <CardFormDelete />
        </Provider>)
    });
})