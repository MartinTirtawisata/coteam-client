import React from 'react';
import SocialCard from './social-card';
import './social-card-section.css'


export default function SocialCardSection(props) {
    return (
        <div className="social-card-section">
            <SocialCard userInfo={props.userInfo[0]} />
            <SocialCard userInfo={props.userInfo[1]} />
        </div>
    )
}


