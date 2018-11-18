import React from 'react';
import './section.css';
import 'antd/dist/antd.css';

import {Link} from 'react-router-dom';
import {Icon, Steps, Card, Tag} from 'antd';

const Step = Steps.Step;

export default class Section extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render (){
        function log(e) {
            e.preventDefault();
        }

        var expString = `${this.props.card.experience}`;
        var expParsedArray = expString.split(",");
        const experiences = expParsedArray.map(exp => (
            <Step title={exp} />
        ));
        let currentExp = expParsedArray.length - 1

        let interestString = `${this.props.card.interest}`;
        let interestParsedArray = interestString.split(",");
        let interests = interestParsedArray.map(intText => (
            <Tag style={{backgroundColor: 'transparent'}}>{intText}</Tag>
        ));

        let skillString = `${this.props.card.skill}`;
        let skillsParsedArray = skillString.split(",");
        let skills = skillsParsedArray.map(skill => (
            <Tag style={{backgroundColor: 'transparent'}}>{skill}</Tag>
        ));

        const editIcon = {
            display: "inline-block", 
            float: "right", 
            fontSize: '18px'
        }
        const cardEditFormLink = "card-edit-form";
        const cardStyle = { 
            width: '85%', 
            borderRadius: '10px',
            marginLeft: '25px',
            backgroundColor: 'rgba(221,221,221,0.1)'
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
