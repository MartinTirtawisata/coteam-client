import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import CardFormAdd from './card-form-add';

describe('<CardFormAdd />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <CardFormAdd />
        </Provider>)
    });

    it('Renders submit button', () => {
        const wrapper = shallow(<Provider store={store}><CardFormAdd /></Provider>)
        expect(wrapper.hasClass('card-edit-submit-btn'));
    })

    it('submitStatus should return true submitted', () => {
        const wrapper = shallow(<Provider store={store}><CardFormAdd /></Provider>)
        wrapper.simulate('submit');
    })
})