import React from 'react';
import './section.css';
import 'antd/dist/antd.css';

import {Steps, Card, Tag} from 'antd';

const Step = Steps.Step;

export default class Section extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render (){
        var expString = `${this.props.card.experience}`;
        var expParsedArray = expString.split(",");
        const experiences = expParsedArray.map(exp => (
            <Step title={exp} />
        ));
        let currentExp = expParsedArray.length - 1

        let interestString = `${this.props.card.interest}`;
        let interestParsedArray = interestString.split(",");
        let interests = interestParsedArray.map(intText => (
            <Tag>{intText}</Tag>
        ));

        let skillString = `${this.props.card.skill}`;
        let skillsParsedArray = skillString.split(",");
        let skills = skillsParsedArray.map(skill => (
            <Tag>{skill}</Tag>
        ));

        const cardStyle = { 
            width: '85%', 
            borderRadius: '4px',
            marginLeft: '25px',
            backgroundColor: 'rgba(51,51,51,0.1)',
            borderColor: 'rgb(51,51,51)'
        }
            
        


        return (
            <div className="section">
            
                <div className="section-header">
                <h1>My Definition of Teamwork</h1>
                    
                    <div className="section-header-content">
                        <Tag><span className="quote">"</span>{this.props.card.thought}<span className="quote">"</span></Tag>
                    </div>
                </div>

                <div className="mid-section">
                    <div className="section-left col-6">
                        <h1>Experiences</h1>
                        <Steps className="font-color" style={{marginLeft: '25px'}} progressDot direction="vertical" size="default" current={currentExp}>
                            {experiences}
                        </Steps>
                    </div>
                    <div className="section-right col-6">
                        <h1>About</h1>
                            <Card title="Interests" style={cardStyle}>
                                {interests}
                            </Card>
                            <br></br>
                            <Card title="Skills" style={cardStyle}>
                                {skills}       
                            </Card>
                    </div>
                </div>
            </div>
        )
    }
}
