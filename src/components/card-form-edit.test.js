import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import CardFormEdit from './card-form-edit';

describe('<CardFormEdit />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <CardFormEdit />
        </Provider>)
    });
})