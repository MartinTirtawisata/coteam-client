import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';
import {fetchProtectedCard} from '../actions/actionIndex';

import UserBoard from './userboard';

describe('<UserBoard />', () => {

    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <UserBoard />
        </Provider>)
    });

    it('Dispatches fetchProtectedCard from fetchProtectedCard',() => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Provider store={store}><UserBoard dispatch={dispatch} /></Provider>);
    })
})