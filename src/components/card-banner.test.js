import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import CardBanner from './card-banner';

describe('<CardBanner />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <CardBanner />
        </Provider>)
    });

    it('Renders: First name, Last name, Job title, Personality', () => {
        const card = {first_name: "FirstName", last_name: "LastName", job_title: "JobTitle",personality: "Personality"}

        const wrapper = shallow(<Provider store={store}><CardBanner card={card}/></Provider>);
        expect(wrapper.contains(<h1>{card.first_name} {card.last_name}</h1>));
        expect(wrapper.contains(<p>{card.job_title}</p>));
        expect(wrapper.contains(<p>{card.personality}</p>));
    })
})