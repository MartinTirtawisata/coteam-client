import React from 'react';
import './landingpage.css';
import {Link} from 'react-router-dom';
import Dashboard from './dashboard';
import sketch from '../sketch.png';
import engagement from '../engagement.png';
import culture from '../culture.jpg';
import {Card, Button} from 'antd';
const { Meta } = Card;


export default class LandingPage extends React.Component {
    render() {
        const cardStyle = {
            width: '100%',
            flex: '1',
            margin: '0 10px',
            borderRadius: '3px'
        }

        const buttonStyle = {
            height: '40px',
            width: '160px',
            fontWeight: 'bold',
            fontSize: '16px'
        }
        return(
            <div className="landing-page">
                <div className="landing-page-header">
                    <h1>Coteam</h1>
                    <p>Coteam is a platform that allows users to create a personal profile to share with their team to facilitate a better team engagement and environment. </p>
                </div>
                <h2>Build a better culture</h2>
                <div className="landing-page-section">
                    
                    <Card style={cardStyle} cover={<img src={sketch} alt="sketch" />}>
                        <Meta title="Create" description="Create a social profile and share them with your team!"/>
                    </Card>
                    <Card style={cardStyle} cover={<img src={engagement} alt="engagement" />}>
                        <Meta style={{marginTop: '50px'}} title="Engagement" description="Engage your team by making your team know each other better!"/>
                    </Card>
                    <Card style={cardStyle} cover={<img src={culture} alt="culture" />}>
                        <Meta style={{marginTop: '40px'}} title="Culture" description="Create a company culture that empowers people!"/>
                    </Card>
                </div>
                <div className="landing-page-footer">
                    <Link to="/register"><Button style={buttonStyle} type="primary">Sign Up Now!</Button></Link>
                </div>
            </div>
        )
    }
}