import React from 'react';
import SocialCard from './social-card';

import './social-card-section.css'

import {connect} from 'react-redux';


export function SocialCardSection(props) {
    return (
        <div className="social-card-section">
            <h1>Feed</h1>
            <SocialCard userInfo={props.userInfo[0]} />
            <SocialCard userInfo={props.userInfo[1]} />
        </div>
    )
}

const mapStateToProps = state => ({
    userInfo: state
})

export default connect(mapStateToProps)(SocialCardSection);

// Parent: HomePage
// Child: SocialCard


