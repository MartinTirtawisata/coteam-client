import React from 'react';
import './dashboard.css';
import 'antd/dist/antd.css';

import {Link} from 'react-router-dom';
import {Icon, Steps, Card, Tag} from 'antd';

const Step = Steps.Step;

export default class Section extends React.Component {
    render (){
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
                        <Tag>I think that teamwork is the core of the team and essential to success.</Tag>
                    </div>
                </div>

                <div className="mid-section">
                    <div className="section-left col-6">
                        <h1>Experiences</h1><Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                        
                        <Steps progressDot direction="vertical" size="default" current={2}>
                            <Step title="Rebelworks" description="I went to Rebelworks for my intership in Indonesia" />
                            <Step title="BJames" description="An intern I took in the US" />
                            <Step title="Thinkful" description="A Online Intensive bootcamp that I took to enchance my web developing skills" />
                        </Steps>
                    </div>
                    <div className="section-right col-6">
                        <h1>About</h1><Link to={cardEditFormLink}><Icon style={editIcon} type="edit" /></Link>
                            <Card title="Interests" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Basketball</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag>
                            </Card>
                            <br></br>
                            <Card title="Skills" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Basketball</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag>
                            </Card>
                    </div>
                </div>
            </div>
        )
    }
}
