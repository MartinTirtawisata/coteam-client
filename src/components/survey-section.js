import React from 'react';
import './survey-section.css';

import SurveySlider from './survey-slider';
import SurveyText from './survey-text';

import {connect} from 'react-redux';

import {fetchSurvey} from '../actions/actionIndex';


export class SurveySection extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchSurvey());
    }
    render(){
        return (
            <div className="question-form-section">
                <h1>Team Engagement Survey</h1>
                <form>
                    <SurveySlider question="Rate your engagement with the team this week" />
                    <SurveySlider question="Rate your trust with your teamate" />
                    <SurveySlider question="Rate your comfortability with your teamtes"/>
                    <SurveySlider question="Rate your creativity amongst your teamates" />
                    <SurveySlider question="Rate your confidence with you teamates" />
                    <SurveySlider question="Rate your productivity with your teamates" />
                    <SurveyText question="What is your ideal team environment?" />
                </form>
                <div className="survey-submit-btn">
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    question: state
})

export default connect(mapStateToProps)(SurveySection);
