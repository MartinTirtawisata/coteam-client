import React from 'react';
import SocialCardContent from './social-card-content';

import './social-card.css';

import {connect} from 'react-redux';

export default function SocialCard(props) {
    return (
        <div className="social-card">
            <div className="social-card-header">
                <div className="name-section">
                    <span>{props.userInfo.first_name} {props.userInfo.last_name}</span>
                </div>
                <div className="job-title-section">
                    <span>{props.userInfo.job_title}</span>
                </div>
            </div>
            <div className="social-card-content">
                <SocialCardContent userInfoTitle="Experiences" userInfo={props.userInfo.experience} />
                <SocialCardContent userInfoTitle="Interests" userInfo={props.userInfo.interests} />
                <SocialCardContent userInfoTitle="Personality Type" userInfo={props.userInfo.personality} />
                <SocialCardContent userInfoTitle="Thoughts on teamwork" userInfo={props.userInfo.thoughts} />
            </div>
        </div>
    )
}

// Parent: SocialCardSection
// Child: SocialCardContent

