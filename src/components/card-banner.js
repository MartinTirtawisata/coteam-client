import React from 'react';
import './card-banner.css';
import 'antd/dist/antd.css';

import {Avatar, Icon} from 'antd';

export default class CardBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const iconStyle = {
            paddingRight: '15px',
            fontSize: '20px'
        }

        return (
            <div className="banner">
                <div className="banner-header">
                    <div className="banner-header-avatar">
                        <Avatar shape="circle" size={100} icon="user" />
                    </div>
                    <div className="banner-header-user">
                        <h1>{this.props.card.first_name} {this.props.card.last_name}</h1> 
                        <p>{this.props.card.job_title}</p>
                        <p>Personality: {this.props.card.personality}</p>
                    </div>
                    <div className="banner-header-progress-dashboard">
                        </div>
                        <div className="banner-header-progress-line">   
                    </div>
                </div>
                <div className="banner-footer">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-links"><Icon style={iconStyle} type="facebook" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-links"><Icon style={iconStyle} type="instagram" /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-media-links"><Icon style={iconStyle} type="github" /></a>
                    <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="social-media-links"><Icon style={iconStyle} type="medium" /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-media-links"><Icon style={iconStyle} type="linkedin" /></a>
                </div>
            </div>
        )
    }
}