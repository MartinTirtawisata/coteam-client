import React from 'react';

import './survey-slider.css';
import 'antd/dist/antd.css';

import { Slider, Icon } from 'antd';



export default class SurveySlider extends React.Component {
    state = {
        value: 0,
    }
    
      handleChange = (value) => {
        this.setState({ value });
    }
    render(){

    const { value } = this.state;
        return (
            <div className="question-form-slider">
                <h3>{this.props.question}</h3>
                <div className="icon-wrapper">
                    <Icon style={{ color: 'rgba(0, 0, 0, .45)' }} type="frown-o" /><Slider min={0} max={10} onChange={this.handleChange} value={value} /><Icon style={{ color: 'rgba(0, 0, 0, .45)' }} type="smile-o" />
                </div>
                
            </div>
        )
    }
}

