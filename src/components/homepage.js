import React from 'react';
import './homepage.css';
import {Card, Icon, Avatar} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TopNav from './topnav';
import SocialCardSection from './social-card-section';

export default function HomePage(props) {
    return (
        // <Router>
            <div>
                <TopNav />

                <div className="main-section">
                {/* <Route exact path="/social-card" component={SocialCardSection } /> */}
                <SocialCardSection userInfo={props.userInfo}/>
                <QuestionFormSection />
                </div>
            </div>
        // </Router>
    )
}


function QuestionFormSection(){
    return (
        <div className="question-form-section">
            <form>
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
            </form>
            <button>Submit</button>
        </div>
    )
}

function QuestionForm(){
    return (
        <div className="question-form">
            <h3>Question</h3>
            <label>1</label>
            <input type="radio"></input>
            <label>2</label>
            <input type="radio"></input>
            <label>3</label>
            <input type="radio"></input>
            <label>4</label>
            <input type="radio"></input>
            <label>5</label>
            <input type="radio"></input>
        </div>
    )
}
