import React from 'react';
import SocialCard from './social-card';

import './social-card-section.css'

import {connect} from 'react-redux';

export class SocialCardSection extends React.Component {

    render(){
        return (
            <div className="social-card-section">
                <h1>Feed</h1>
                <SocialCard />
            </div>
        )
    }
}


export default connect()(SocialCardSection);

// Parent: HomePage
// Child: SocialCard


