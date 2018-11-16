import React from 'react';
import './dashboard.css';
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


        return (
            <div className="section col-12">
                <div className="section-header">
                    <h1>Thoughts on teamwork</h1>
                    <Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                    <div className="section-header-content">
                        <Tag>{this.props.card.thought}</Tag>
                    </div>
                </div>

                <div className="mid-section">
                    <div className="section-left col-6">
                        <h1>Experiences</h1><Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                        
                        <Steps progressDot direction="vertical" size="default" current={currentExp}>
                            {experiences}
                        </Steps>
                    </div>
                    <div className="section-right col-6">
                        <h1>About</h1><Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                            <Card title="Interests" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                {interests}

                            </Card>
                            <br></br>
                            <Card title="Skills" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                {skills}       
                            </Card>
                    </div>
                </div>
            </div>
        )
    }
}
