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
        // Need to map out data list for skills and interests
        function log(e) {
            e.preventDefault();
        }

        const editIcon = {
            display: "inline-block", 
            float: "right", 
            fontSize: '18px'
        }
        const cardEditFormLink = "card-edit-form"
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
                        
                        <Steps progressDot direction="vertical" size="default" current={1}>
                            <Step title={this.props.card.experience} />
                            <Step title={this.props.card.experience} />
                            {/* <Step title="Thinkful"/> */}
                        </Steps>
                    </div>
                    <div className="section-right col-6">
                        <h1>About</h1><Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                            <Card title="Interests" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>{this.props.card.interest}</Tag>
                                {/* <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag> */}
                            </Card>
                            <br></br>
                            <Card title="Skills" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>{this.props.card.skill}</Tag>
                                {/* <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag> */}
                            </Card>
                    </div>
                </div>
            </div>
        )
    }
}
