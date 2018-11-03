import React from 'react';
import './social-card-content.css';

export default function SocialCardContent(props) {
    return (
        <div>
            <p className="user-info-title">{props.userInfoTitle}</p>
            <p className="user-info-content">{props.userInfo}</p>
        </div>
    )
}
