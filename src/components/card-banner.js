import React from 'react';
import './card-banner.css';
import 'antd/dist/antd.css';

import {Link} from 'react-router-dom';
import {Progress, Avatar, Icon} from 'antd';

export default class CardBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const editIcon = {
            display: "inline-block", 
            float: "right", 
            fontSize: '18px'
        }
        const cardEditFormLink = "card-edit-form"
        return (
            <div className="banner col-12">
                <div className="banner-header">
                    <div className="banner-header-avatar">
                        <Avatar shape="square" size={90} icon="user" />
                    </div>
                    <div className="banner-header-user">
                        <h1>{this.props.card.first_name} {this.props.card.last_name}</h1> 
                        <p>{this.props.card.job_title}</p>
                        <p>Personality: {this.props.card.personality}</p>
                    </div>
                    <div className="banner-header-progress-dashboard">
                        <Progress style={{paddingRight:'50px'}} size="small" type="dashboard" percent={90} width={100} format={(percent) => `${percent}% Profile Done`}  />
                        </div>
                        <div className="banner-header-progress-line">   
                        <Progress percent={90} size="small" format={(percent) => `${percent}%`}/>
                    </div>
                </div>
                <div className="banner-footer">
                    <a href="https://facebook.com"><Icon style={{paddingRight: '15px', fontSize: '24px', paddingLeft: '10px', paddingBottom: '10px'}} type="facebook" /></a>
                    <a href="https://instagram.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="instagram" /></a>
                    <a href="https://github.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="github" /></a>
                    <a href="https://medium.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="medium" /></a>
                    <a href="https://linkedin.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="linkedin" /></a>
                    <Icon style={{paddingRight: '15px', fontSize: '24px'}} type="loading" />
                    <Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                </div>
            </div>
        )
    }
}