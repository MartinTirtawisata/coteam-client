import React from 'react';

import './survey-text.css';
import 'antd/dist/antd.css';

import {Input} from 'antd';

const {TextArea} = Input

export default class SurveyText extends React.Component {
    render() {
        return(
            <div className="question-form-text">
                <h3>{this.props.question}</h3>
                <TextArea rows={3}/>
            </div>
        )
    }
}