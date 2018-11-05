import React from 'react';

import './question-form.css';
import 'antd/dist/antd.css';

import { Slider, Icon, Card } from 'antd';



export default class QuestionForm extends React.Component {
    state = {
        value: 0,
    }
    
      handleChange = (value) => {
        this.setState({ value });
    }
    render(){

    const { value } = this.state;
        return (
            <div className="question-form">
                <h3>What do you think of your team's engagement this week?</h3>
                <Icon style={{ color: 'rgba(0, 0, 0, .45)' }} type="frown-o" />
                <Slider min={0} max={10} onChange={this.handleChange} value={value} />
                <Icon style={{ color: 'rgba(0, 0, 0, .45)' }} type="smile-o" />
            </div>
        )
    }
}

