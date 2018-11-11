import React from 'react';

import './social-card.css';
import 'antd/dist/antd.css';

// import {connect} from 'react-redux';
import {Card} from 'antd';
const {Meta} = Card;

export default function SocialCard(props) {
    return (
        <div className="social-card">
            <Card style={{ width: 500 }}>
                <div className="social-card-header">
                    <div className="name-section">
                        <span>{props.card.first_name} {props.card.last_name}</span>
                    </div>
                    <div className="job-title-section">
                        <span>{props.card.job_title}</span>
                    </div>
                </div>
                <div className="social-card-content">
                    <Meta title="Experiences" description={props.card.experience} />
                    <Meta title="Interests" description={props.card.interests} />
                    <Meta title="Personality Type" description={props.card.personality} />
                    <Meta title="Thoughts on teamwork" description={props.card.thoughts} />
                </div>
            </Card>
        </div>
    )
}

// Parent: SocialCardSection
// Child: SocialCardContent

