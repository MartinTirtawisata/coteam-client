import React from 'react';
import './question-form-section.css';

import QuestionForm from './question-form';


export default function QuestionFormSection(){
    return (
        <div className="question-form-section">
            <h1>Team Engagement Survey</h1>
            <form>
                <QuestionForm question="" />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
            </form>
            <button>Submit</button>
        </div>
    )
}
